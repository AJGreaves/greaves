$(document).ready(function () {


    const contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {
            service_id: "gmail",
            template_id: "resume",
            user_id: "user_CQSk7h9Wyuw2xLhYG0hBX",
            template_params: {
                "name": contactForm.name.value,
                "email": contactForm.email.value,
                "message": contactForm.message.value
            }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            $('input').val('');
            $('textarea').val('');
            alert('Your email has been sent successfully!');
            window.location.reload(true); 
        }).fail(function (error) {
            console.log('Oops... ' + JSON.stringify(error));
            alert('Oops something went wrong, please try again');
        });
    });

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

    // Changes readmore button text to close when element is open.
    $('.work-history-btn').click(function () {
        let text = $(this).text();
        if (text == 'Close') {
            $(this).text('Read More')
        } else {
            $(this).text('Close')
        };
        return;
    })

});