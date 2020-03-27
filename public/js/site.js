jQuery(document).ready((e) => {
  jQuery(".left-sidebar ul > li > a ").click((e) => {
    const sectionToDisplay = jQuery(e.currentTarget).attr("data-section");
    jQuery('main > section').removeClass('d-flex');
    jQuery('#' + sectionToDisplay).addClass('d-flex');
  })
});
