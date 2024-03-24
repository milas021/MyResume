(function () {
    
    var elem = document.querySelectorAll(".midlevel .progress-title .level");
    for( x in elem)
    {
        elem[x].innerHTML = "متوسط";
    }

    var elem = document.querySelectorAll(".advanced .progress-title .level");
    for( x in elem)
    {
        elem[x].innerHTML = "پیشرفته";
    }

    var elem = document.querySelectorAll(".pro .progress-title .level");
    for( x in elem)
    {
        elem[x].innerHTML = "حرفه ای";
    }


    console.log(elem);

    // for (var i = 0; i < elem.length; i++) {
    //     console.log(elem[i]);
    // }

})();



function Scroll(sectionId) {
    var element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}


