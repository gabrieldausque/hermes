function validateCreateProjectForm() {
  const isValid = jQuery('#create-project-form').addClass('was-validated')[0].checkValidity();
  if(isValid){
    jQuery('#create-project-submit').removeAttr('disabled');
  } else {
    jQuery('#create-project-submit').attr('disabled','disabled')
  }
  return isValid;
}

const socket = io(window.location.href);
const app = feathers();
app.configure(feathers.socketio(socket));
const topicClient = new TopicClientProxy(socket);

function createProject(event){
  if(validateCreateProjectForm()){
    const data = {
      name:jQuery('#project-name').val(),
      code:jQuery('#project-code').val(),
      description:jQuery('#project-description').val(),
    };
    jQuery.ajax({
      url:'/project/',
      method:'POST',
      dataType:'json',
      contentType:'application/json',
      processData:false,
      data:JSON.stringify(data),
      beforeSend:(jqxhr, settings) => {
        jQuery('#create-project-spinner').addClass('active');
      }
    }).done((createdProject,textStatus,jqxhr)  => {
      subscribeToCreatedProjectMoleculeLoadedEvent(createdProject.id);
      window.setTimeout(() => {
        jQuery('#create-project-spinner').removeClass('active');
      }, 2000);
    }).fail((jqxhr,textStatus,error) => {
      window.setTimeout(() => {
        jQuery('#create-project-spinner').removeClass('active');
      }, 2000);
      console.log(error);
    })
  } else {
    console.log("Form is invalid");
  }
}

function subscribeToCreatedProjectMoleculeLoadedEvent(createdProjectId) {
  topicClient.subscribe(createdProjectId + '.molecule_loaded', (arg) => {
    jQuery('#notification-header').text("Project molecule Loaded");
    jQuery('#notification-content').text("a metadata has been loaded in a project");
    jQuery('.toast').toast('show');
  })
}

jQuery(document).ready((e) => {
  jQuery(".left-sidebar ul > li > a ").click((e) => {
    const sectionToDisplay = jQuery(e.currentTarget).attr("data-section");
    jQuery('main > section').removeClass('d-flex');
    jQuery('#' + sectionToDisplay).addClass('d-flex');
  });
  jQuery('#create-project-submit').click(createProject);
  jQuery('#create-project-form input').change(validateCreateProjectForm);

  topicClient.ready(() => {
    topicClient.subscribe('global.project_created', (arg) => {
      console.log(arg);
      jQuery('#notification-header').text("Project Created");
      jQuery('#notification-content').text("The project with id " + arg.id + " has been created");
      jQuery('.toast').toast('show');
    }).then(() => {});
  });

  jQuery('.toast').toast({
    animation:true,
    autohide:true,
    delay:3000
  })

});
