// captcha generation js
function GenerateCaptcha() {
    var chr1 = Math.ceil(Math.random() * 10) + '';
    var chr2 = Math.ceil(Math.random() * 10) + '';
    var chr3 = Math.ceil(Math.random() * 10) + '';

    var str = new Array(4).join().replace(/(.|$)/g, function () {
        return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"]
            ();
    });
    var captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3;
    document.getElementById("txtCaptcha").value = captchaCode
}

/* Validating Captcha Function */
function ValidCaptcha() {
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
    var str2 = removeSpaces(document.getElementById('txtCompare').value);

    if (str1 == str2) return true;
    return false;
}

/* Remove spaces from Captcha Code */
function removeSpaces(string) {
    return string.split(' ').join('');
}


// Sidebar buttons toggling for opening and closing
$('.allplans-btn').click(function(){
    $('.allplans-show').toggleClass("show");
});

$('.buyonline-btn').click(function(){
    $('.buyonline-show').toggleClass("show");
});
$('.newcustomer-btn').click(function(){
    $('.newcustomer-show').toggleClass("show");
});
$('.oldcustomer-btn').click(function(){
    $('.oldcustomer-show').toggleClass("show");
});

$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});


function rangeSlider(value) {
    document.getElementById('rangeValue').innerHTML = value;
};



let slider = tns({
    container: ".my-slider",
    "slideby": 2,
    "speed": 1100,
    "nav": false,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
        1600: {
            items: 4,
            gutter: 05,
        },
        1024: {
            items: 4,
            gutter: 10,
        },
        768: {
            items:2,
            gutter: 05,
        },
        480: {
            items: 1,
        },
    },
});