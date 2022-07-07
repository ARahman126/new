//languges starts
const allSubmit = document.querySelectorAll(".submit");
let output = document.querySelectorAll(".output");
const select_lang = document.querySelectorAll(".logo_lang");
const all_languege = document.querySelectorAll(".all_lang");

allSubmit.forEach((single_Submit) =>{
    single_Submit.addEventListener('click',function(){
        //localstorage languege update
        localStorage.setItem('languege', new Array());
        if(!localStorage.getItem('languege')){
            let mkarray = new Array();
            localStorage.setItem("languege",JSON.stringify(mkarray));
        }
        if(single_Submit.classList.contains("button_toggle") ){
            single_Submit.classList.toggle("button_toggle");
        }else{
            allSubmit.forEach((s_button) =>{
                s_button.classList.remove("button_toggle");
            })
            single_Submit.classList.toggle("button_toggle");
        }
    })
});

//languege
if(!localStorage.getItem('languege')){
    let mkarray = new Array({"title":"English"});
    localStorage.setItem("languege",JSON.stringify(mkarray));
}


//lopp languege
const loopLanguege = ()=>{

    output.forEach((output)=>{
        output.innerHTML = "";
    });

    let currenItems = JSON.parse(localStorage.getItem('languege'));

    //loop through localstorage
    currenItems.forEach((value, index) =>{

        const english = document.querySelector("header.enlish");
        const bangla = document.querySelector("header.bangla");
        const hindi = document.querySelector("header.hindi");

        output.forEach((output)=>{
            output.innerHTML += value.title;
        });
        //Languege update
        if(value.title == "English"){

            english.classList.remove("lang_active");
            bangla.classList.add("lang_active");
            hindi.classList.add("lang_active");

            document.querySelectorAll(".lang_img").forEach((lang_img)=>{
                lang_img.innerHTML = `<img src="addmin/img/usa.webp" alt="USA">`;
            });
            document.querySelectorAll("span.english").forEach((span_english)=>{
                span_english.innerHTML = value.title;
            });
            document.querySelectorAll("span.bangla").forEach((span_bangla)=>{
                span_bangla.innerHTML = "";
            });
            document.querySelectorAll("span.hindi").forEach((span_hindi)=>{
                span_hindi.innerHTML = "";
            });

            document.querySelectorAll(".bangla").forEach((bangla)=>{
                bangla.classList.remove("button_toggle");
            });
            document.querySelectorAll(".hindi").forEach((hindi)=>{
                hindi.classList.remove("button_toggle");
            });
            document.querySelectorAll(".english").forEach((english)=>{
                english.classList.add("button_toggle");
            });
        }else if(value.title == "বাংলা"){
            bangla.classList.remove("lang_active");
            english.classList.add("lang_active");
            hindi.classList.add("lang_active");

            document.querySelectorAll(".lang_img").forEach((lang_img)=>{
                lang_img.innerHTML = `<img src="addmin/img/bd.bmp" alt="BD">`;
            });
            document.querySelectorAll("span.english").forEach((span_english)=>{
                span_english.innerHTML = "";
            });
            document.querySelectorAll("span.bangla").forEach((span_bangla)=>{
                span_bangla.innerHTML = value.title;
            });
            document.querySelectorAll("span.hindi").forEach((span_hindi)=>{
                span_hindi.innerHTML = "";
            });

            document.querySelectorAll(".hindi").forEach((hindi)=>{
                hindi.classList.remove("button_toggle");
            });
            document.querySelectorAll(".english").forEach((english)=>{
                english.classList.remove("button_toggle");
            });
            document.querySelectorAll(".bangla").forEach((bangla)=>{
                bangla.classList.add("button_toggle");
            });
        }else if(value.title == "हिन्दी"){
            hindi.classList.remove("lang_active");
            english.classList.add("lang_active");
            bangla.classList.add("lang_active");

            document.querySelectorAll(".lang_img").forEach((lang_img)=>{
                lang_img.innerHTML = `<img src="addmin/img/India.svg" alt="INDIA">`;
            });
            document.querySelectorAll("span.english").forEach((span_english)=>{
                span_english.innerHTML = "";
            });
            document.querySelectorAll("span.bangla").forEach((span_bangla)=>{
                span_bangla.innerHTML = "";
            });
            document.querySelectorAll("span.hindi").forEach((span_hindi)=>{
                span_hindi.innerHTML = value.title;
            });

            document.querySelectorAll(".english").forEach((english)=>{
                english.classList.remove("button_toggle");
            });
            document.querySelectorAll(".bangla").forEach((bangla)=>{
                bangla.classList.remove("button_toggle");
            });
            document.querySelectorAll(".hindi").forEach((hindi)=>{
                hindi.classList.add("button_toggle");
            });
        }else{
            document.querySelectorAll(".lang_img").forEach((lang_img)=>{
                lang_img.innerHTML = `<img src="addmin/img/usa.webp" alt="USA">`;
            });
            document.querySelectorAll("span.english").forEach((span_english)=>{
                span_english.innerHTML = "English";
            });
            
            
            document.querySelectorAll(".bangla").forEach((bangla)=>{
                bangla.classList.remove("button_toggle");
            });
            document.querySelectorAll(".hindi").forEach((hindi)=>{
                hindi.classList.remove("button_toggle");
            });
            document.querySelectorAll(".english").forEach((english)=>{
                english.classList.add("button_toggle");
            });
        }
    })
}
loopLanguege();

//addlang
const addLanguege = ()=>{
    allSubmit.forEach((single_lang)=>{
        single_lang.addEventListener('click', function(){
            setTimeout(() => {
            let todoTitle = single_lang.value;
            all_languege.forEach((all_languege)=>{
                all_languege.classList.toggle("active")
            });

            let newTodo = {
                title:todoTitle
            }
            //get current Items
            let currentTodos = JSON.parse(localStorage.getItem('languege'));
            currentTodos.push(newTodo);
            
            localStorage.setItem('todo', new Array());
            //setItem again
            localStorage.setItem("languege", JSON.stringify(currentTodos));
            //loop again
            loopLanguege();
            }, 200);
        })
    })
}
addLanguege();

//menu hegite
select_lang.forEach((single_languge) =>{
    single_languge.addEventListener('click', function(){
        all_languege.forEach((all_languege)=>{
            all_languege.classList.toggle("active")
        });
    });

});
//languges closes