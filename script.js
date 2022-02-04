function toggleMenu(){
    var menuIcon = document.querySelector(".menu-icon");
    var menubar = document.querySelector(".left");
    var boxHeader = document.querySelector(".header");

    if (menubar.style.display == "block"){
        menuIcon.src = "./images/menu.png";
        menuIcon.style.height = "20px";
        boxHeader.style.boxShadow = "0px 0px 50px 1px #e2e2e2";

        menubar.style.display = "none";
    }else{
        menuIcon.src = "./images/close.png";
        menuIcon.style.height = "30px";
        boxHeader.style.boxShadow = "none";

        menubar.style.display = "block";
        menubar.style.position = "fixed";
        menubar.style.width = "100%";
        menubar.style.boxShadow = "0px 0px 50px 1px #e2e2e2";
    }
}

function openSearch(){
    var searchArea = document.querySelector(".search-area");
    searchArea.style.visibility = "visible";
}

function closeSearch(){
    if(document.body.clientWidth <= 900){
        var searchArea = document.querySelector(".search-area");
        searchArea.style.visibility = "hidden";
    }else{
        searchArea.style.visibility = "visible";
    }
    
}