


//all color
let links = document.querySelectorAll(".sidenav a");
let body = document.querySelector(".allColor");
document.body.style.backgroundColor=window.localStorage.getItem("backgroundColor")
window.localStorage.setItem("color","#fff")

if (window.localStorage.getItem("color")){
    //if there is color in local storage
    //[1]add color to div
    body.style.backgroundColor = localStorage.getItem("color");
    //[2]remove active class from all a
    links.forEach((a) => {
        a.classList.remove("active");

        if(a.dataset.color === localStorage.getItem("color")){
            a.classList.add("active");
        }
    });
    //[3]add active class to current color
    // document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");
};

links.forEach((a) => {
    a.addEventListener("click" , (e) =>{
        //remove active class from all a
        links.forEach((a) => {
            a.classList.remove("active");
        });
        //add active class to current
        e.currentTarget.classList.add("active");
        //add current color to local storage
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        body.style.backgroundColor = e.currentTarget.dataset.color;
    });
});

AOS.init();