$(document).ready(function() {
    $(".ui-draggable").draggable({
        snap: true,
        snapMode: "outer",
        snapTolerance: 5,
        stack: ".ui-draggable",
        containment: ".play.box",
        scroll: false,
        start: function(event,ui) {
            var source = $(this).attr('id');
            $('.instruction').fadeOut('slow');
        }
    });
});