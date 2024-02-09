// onload = () => {
//     document.body.classList.remove("container");
// };

$(document).ready(function () {
    let password = "iloveyounikkiee";

    $("#denyBtn").click(function () {
        $(this).addClass("random-position");

        // Set a random position
        var windowWidth = $(window).width() - $(this).width();
        var windowHeight = $(window).height() - $(this).height();

        var randomLeft = Math.floor(Math.random() * windowWidth);
        var randomTop = Math.floor(Math.random() * windowHeight);

        $(this).css({
            left: randomLeft + "px",
            top: randomTop + "px"
        });
    });

    var $openModalBtn = $('#openModalBtn');
    var $closeModalBtn = $('#closeModalBtn');
    var $modal = $('#myModal');

    $openModalBtn.click(function () {
        $modal.show();
    });

    $closeModalBtn.click(function () {
        $modal.hide();
    });

    $(window).click(function (event) {
        if (event.target === $modal[0]) {
            $modal.hide();
        }
    });

    $("#confirmPassword").click(function () {

        let inputPwd = $("#inputPassword").val();
        console.log('inputpasss', inputPwd);
        console.log('password', password);
        if (inputPwd == password) {
            $("#redirectFlower a")[0].click();
            ("#myAudio")[0].play();
        } else {
            $("#promptMSG").text('Wrong password');
        }
    });
});