let hover = document.querySelectorAll(".hover img");

//like
if(!localStorage.getItem('like')){
    let likearray = new Array();
    localStorage.setItem("like",JSON.stringify(likearray));
}

let out_put = document.querySelectorAll(".out_put");

const loopLike = ()=>{

    let currenLike = JSON.parse(localStorage.getItem('like'));

    //loop through localstorage
    currenLike.forEach((value, index) =>{
       
       out_put.forEach((e)=>{
        if(e.innerHTML = ""){
            console.log("bad");
        }else{
            document.querySelector("span").classList.toggle("active")
        }

           e.innerHTML = `<img src="${value.title}" alt="">`;
       })
       
    })
}
loopLike();

//addlang
const addLike = ()=>{
    hover.forEach((like) =>{
        like.addEventListener('click', function(){
            if(like.classList.contains("")){
                like.classList.toggle("")
            }else{
                hover.forEach((e)=>{
                    e.classList.remove("No_Class")
                })
                like.classList.toggle("No_Class")
                let single_like = like.currentSrc;
                console.log(single_like);
                let newLike = {
                    title:single_like
                }

                //get current Items
                let currentLike = JSON.parse(localStorage.getItem('like'));
                currentLike.push(newLike);
                localStorage.setItem('like', new Array());
                //setItem again
                localStorage.setItem("like", JSON.stringify(currentLike));
            }
            loopLike();
        })
    })
}
addLike();







