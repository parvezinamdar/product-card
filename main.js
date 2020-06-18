var container =  document.getElementById("remote1");
function change(image){
    container.src = image.src;
}

$(document).ready(function(){
    $(".like").click(function(){
        $(this).toggleClass("heart");
    })
});