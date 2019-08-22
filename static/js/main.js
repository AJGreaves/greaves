// code credit: https://bootstrapious.com/p/circular-progress-bar
$(function () {

    $(".progress").each(function () {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }

    })

    function percentageToDegrees(percentage) {

        return percentage / 100 * 360

    }

});

$('.work-history-btn').click(function() {
    let text = $(this).text();
    if (text ==  'Close') {
        $(this).text('Read More')
    } else {
        $(this).text('Close')
    };
    return;
})