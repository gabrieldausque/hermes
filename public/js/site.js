import {SocketIOTopicServiceClientProxy} from "../lib/topic/SocketIOTopicServiceClientProxy.js";


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
const topicClient = new SocketIOTopicServiceClientProxy(socket);

const ownCreatedProjectIds = [];

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
      ownCreatedProjectIds.push(createdProject.id);
      window.setTimeout(() => {
        jQuery('#create-project-spinner').removeClass('active');
        jQuery('#project-' + createdProject.id + ' button.addmolecule').addClass('shown');
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

function displayMolecules(topicMessage) {
  const moleculesList = jQuery('#project-' + topicMessage.content.id + ' .list-molecules');
  moleculesList.empty();
  topicMessage.content.molecules.forEach((m) => {
    moleculesList.append('<li class="list-group-item">Name : ' + m.name + ' Description : ' + m.description + '</li>')
  })
}

function subscribeToCreatedProjectMoleculeLoadedEvent(createdProjectId) {
  topicClient.subscribe(createdProjectId + '.molecule_loaded', (topic, topicMessage) => {
    displayNotification("ProjectEntity molecule Loaded", "a molecule has been added to the project " + topicMessage.content.id);
    displayMolecules(topicMessage);
  })
}

function displayNotification(header, content){
  const notifNode = jQuery('#notification-template').clone().toast({
    animation:true,
    autohide:true,
    delay:5000
  });
  notifNode.attr("id","");
  notifNode.find('#notification-header').text(header);
  notifNode.find('#notification-content').text(content);
  notifNode.appendTo('#notification-zone').toast('show');
}

function displayProjectCard(topicMessage) {
  const newProjectCard = jQuery('#created-project-card-template').clone().attr('id', 'project-' + topicMessage.content.id);
  newProjectCard.find('.card-header h5').text('Project : ' + topicMessage.content.name);
  newProjectCard.find('.card-body > .card-title').text('Id : ' + topicMessage.content.id);
  newProjectCard.find('.card-body > .card-text').text('Description : ' + topicMessage.content.description);
  newProjectCard.find('.card-header > .project-actions > button.addmolecule').attr('data-projectid', topicMessage.content.id);
  if(ownCreatedProjectIds.indexOf(topicMessage.content.id) >= 0) {
    newProjectCard.find('.card-header > .project-actions > button.addmolecule').addClass('active');
  }
  newProjectCard.find('.card-header > .project-actions > button.follow').attr('data-projectid', topicMessage.content.id);
  newProjectCard.appendTo('#created-projects')
}

jQuery(document).ready((e) => {

  topicClient.ready(() => {
    topicClient.subscribe('global.project_created', (topic, topicMessage) => {
      displayNotification("ProjectEntity Created", "The project with id " + topicMessage.content.id + " has been created")
    }).then(() => {
    });

    topicClient.subscribe('global.project_created', (topic, topicMessage) => {
      displayProjectCard(topicMessage);
    }).then(() => {
    });
  });

  jQuery(".left-sidebar ul > li > a ").click((e) => {
    const sectionToDisplay = jQuery(e.currentTarget).attr("data-section");
    jQuery('main > section').removeClass('d-flex');
    jQuery('#' + sectionToDisplay).addClass('d-flex');
  });

  jQuery('#manage-subscription-button').click((e) => {
      topicClient.getSubscriptions((topic,topicMessage) => {
        jQuery('#subscriptions-list').empty();
        topicMessage.content.forEach((subscription) => {
          let subscriptionItem = jQuery('#subscription-template').clone().removeClass('hidden').attr('id','').appendTo('#subscriptions-list');
          subscriptionItem.find('p.subscription-text').text(subscription);
          subscriptionItem.find('button').attr('data-subscription',subscription);
        })
      }).then(() => {})
  });

  jQuery('#create-project-submit').click(createProject);
  jQuery('#create-project-form input').change(validateCreateProjectForm);

  jQuery(document).on('click','.project-molecules .display-molecules', (event) => {
    const moleculesList = jQuery(event.currentTarget).siblings("ul");
    if(moleculesList.hasClass('expand')){
      moleculesList.removeClass('expand');
    } else {
      moleculesList.addClass('expand');
    }
  });

  jQuery(document).on('click', 'button.addmolecule', (event) => {
    const currentButton = jQuery(event.currentTarget);
    const projectId = currentButton.attr('data-projectid');
    topicClient.publish('global.project_addmolecule', projectId);
  });

  jQuery(document).on('click', 'button.follow', (event) => {
    const currentButton = jQuery(event.currentTarget);
    const projectId = currentButton.attr('data-projectid');
    subscribeToCreatedProjectMoleculeLoadedEvent(projectId);
  });

  jQuery('#addsubscription').click((e) => {
    const newSubscription = jQuery('#newsubscription').val();
    topicClient.subscribe(newSubscription,(topic,topicMessage) => {
      displayNotification('Notification received', 'With content : ' + JSON.stringify(topicMessage.content));
    }).then(() => {});
    window.setTimeout(() => {
      jQuery('#manage-subscription-button').trigger('click');
    }, 1000);
  });

  jQuery(document).on('click', '#subscriptions-list > li > button',(e) => {
    const btn = jQuery(e.currentTarget);
    topicClient.unSubscribe(btn.attr('data-subscription'));
    window.setTimeout(() => {
      jQuery('#manage-subscription-button').trigger('click');
    }, 1000);
  })

});
