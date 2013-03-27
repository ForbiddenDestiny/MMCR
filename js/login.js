$(document).ready(function() {
    $('a.login-window').click(function() {
        // Getting the variable's value from a link
        var loginBox = $(this).attr('href');

        //Fade in the Popup and add close button
        $(loginBox).fadeIn(300);

        //Set the center alignment padding + border
        var popMargTop = ($(loginBox).height() + 36) / 2;
        var popMargLeft = ($(loginBox).width() + 36) / 2;

        $(loginBox).css({
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
        });

        // Add the mask to body
        $('body').append('<div id="mask"></div>');
        $('#mask').fadeIn(300);

        return false;
    });

    // When clicking on the button close or the mask layer the popup closed
    $('a.close, #mask').live('click', function() {
        $('#mask , .login-popup').fadeOut(300 , function() {
            $('#mask').remove();
        });
        return false;
    });
});

$(window).load(function() {
    $('#slider').nivoSlider({
        effect: 'random',
        randomStart: true
    });
});


$(document).ready(function() {
    function loadData() {
        $('#contentContainerHeader').load('include/header.html');
    }
    loadData(); //Now call the function
});

$(document).ready(function() {
    function loadData() {
        $('#contentContainerFooter').load('include/footer.html');
    }
    loadData(); //Now call the function
});
