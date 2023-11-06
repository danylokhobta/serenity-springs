let menuStatus = false;

$(document).ready(function() {
  $(".menubtn").click(function(){
    if (menuStatus === false && window.innerWidth<800){
      buttonToClose();
      openNavBar();
    }
    else {
      buttonToOpen();
      closeNavBar();
    }
  });
  $(".menu li").click(function(){
      buttonToOpen();
      closeNavBar();
  });
});

const buttonToOpen = () => {
  $(".menubtn span:nth-child(1)").css({"top": "0", "transform": "rotate(0deg) translateY(0)"});
  $(".menubtn span:nth-child(2)").css("transform", "rotate(0deg) translateY(-50%)");
  $(".menubtn span:nth-child(3)").css("opacity", "1");
  $(".menubtn").css("position", "absolute");
}
const buttonToClose = () => {
  $(".menubtn span:nth-child(1)").css({"top": "50%", "transform": "rotate(45deg) translateY(-50%)"});
  $(".menubtn span:nth-child(2)").css("transform", "rotate(-45deg)");
  $(".menubtn span:nth-child(3)").css("opacity", "0");
  $(".menubtn").css("position", "fixed");
}

const openNavBar = () => {
  menuStatus = true;
  $("header nav .hiddenMenu").css("top", "0");
  $("header nav .hiddenMenu").css("opacity", "1");
  $("body").css("position", "fixed");
  $("body").css("overflow-y", "scroll");
  console.log("did openNavBar func");
}
const closeNavBar = () => {
  menuStatus = false;
  $("header nav .hiddenMenu").css("opacity", "0");
  $("body").css("position", "static");
  $("body").css("overflow-y", "auto");

  function1(function() {
    $("header nav .hiddenMenu").css("top", "-100%");
  });
  console.log("did closeNavBar func");
}