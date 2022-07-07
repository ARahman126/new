//menu starts
let menu = document.querySelectorAll("menu");
let service = document.querySelectorAll(".service");
let profile = document.querySelectorAll(".profile");
let sub_menu2 = document.querySelectorAll(".sub_menu2");
let sub_menu3 = document.querySelectorAll(".sub_menu3");
let body = document.querySelector("body");


service.forEach((service)=>{
    service.addEventListener('click', function(){
        sub_menu2.forEach((sub_menu2)=>{
            sub_menu2.classList.toggle("active");
        });
        sub_menu3.forEach((sub_menu3)=>{
            sub_menu3.classList.remove("active");
        });
    });
});

profile.forEach((profile)=>{
    profile.addEventListener('click', function(){
        sub_menu3.forEach((sub_menu3)=>{
            sub_menu3.classList.toggle("active");
        });
        sub_menu2.forEach((sub_menu2)=>{
            sub_menu2.classList.remove("active");
        });
    });
});

menu.forEach((e) =>{
    e.addEventListener('click', function(){
        if(e.classList.contains("")){
            e.classList.toggle("");
            sub_menu2.classList.remove("active");
            sub_menu3.classList.remove("active");
        }else{
            menu.forEach((remove)=>{
                remove.classList.remove("no_class")
            })
            e.classList.toggle("no_class")
        }
    })
})
//menu close
