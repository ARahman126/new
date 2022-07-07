let like = document.querySelectorAll("#like");
let dislike = document.querySelectorAll("#disLike");

//like
if(!localStorage.getItem('like')){
    let likearray = new Array("active");
    localStorage.setItem("like",JSON.stringify(likearray));
}

//loop
const loopLike = ()=>{

    let currenLike = JSON.parse(localStorage.getItem('like'));

    //loop through localstorage
    currenLike.forEach((value, index) =>{
       
       console.log(value);
       
    })
}
loopLike();

like.forEach((singlelike)=>{
    singlelike.addEventListener('click', function(){
        if(singlelike.classList.contains("active")){
            singlelike.classList.toggle("active")
        }else{
            

            singlelike.classList.toggle("active")
            console.log(singlelike);
            dislike.forEach((e)=>{
                
                if(e.classList.contains("active")){
                    e.classList.toggle("active")
                }else{
                    e.classList.remove("active")
                }
            });
        }
        loopLike();
    })
});

dislike.forEach((singdislelike)=>{
    singdislelike.addEventListener('click', function(){
        if(singdislelike.classList.contains("active")){
            singdislelike.classList.toggle("active")
        }else{
            
            singdislelike.classList.toggle("active")
            console.log(singdislelike);
            like.forEach((e)=>{
                
                if(e.classList.contains("active")){
                    e.classList.toggle("active")
                }else{
                    e.classList.remove("active")
                }
            });
        }
    })
});
