let taskbar = document.getElementsByClassName("icon")[0]
let startmenu = document.getElementsByClassName("hover")[0]

taskbar.addEventListener("click", ()=>{
    // console.log("clicked");
    if(startmenu.style.bottom == "60px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "60px"
    }
})
