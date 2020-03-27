function validateCreateProjectForm() {
  const isValid = jQuery('#create-project-form').addClass('was-validated')[0].checkValidity();
  if(isValid){
    jQuery('#create-project-submit').removeAttr('disabled');
  } else {
    jQuery('#create-project-submit').attr('disabled','disabled')
  }
  return isValid;
}

function createProject(event){
  //TODO : validate the forms, if ok, submit to api;
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
    }).done((data,textStatus,jqxhr)  => {
      window.setTimeout(() => {
        jQuery('#create-project-spinner').removeClass('active');
      }, 2000);
      console.log(data)
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

jQuery(document).ready((e) => {
  jQuery(".left-sidebar ul > li > a ").click((e) => {
    const sectionToDisplay = jQuery(e.currentTarget).attr("data-section");
    jQuery('main > section').removeClass('d-flex');
    jQuery('#' + sectionToDisplay).addClass('d-flex');
  });
  jQuery('#create-project-submit').click(createProject);
  jQuery('#create-project-form input').change(validateCreateProjectForm);
});
