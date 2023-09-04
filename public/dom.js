let show= document.querySelectorAll(".show");
let ans= document.querySelectorAll(".ans");
let add= document.querySelectorAll(".show span");
var flage=true;
function detail(one){
   let ans= one.nextSiblingNode;
   console.log(ans);
    if(flage){
      ans.style.display="flex";
      flage=false;
    }else{
        ans.style.display="none";
        flage=true;
    }
}

for(let i=0;i<show.length;i++){
    show[i].addEventListener("click",function(){
        if(ans[i].style.display=="flex"){
            ans[i].style.display="none";
            add[i].style="transform:rotate(0deg);";
        }else{
            ans[i].style.display="flex";
            add[i].style="transform:rotate(45deg);";
        }
    })
}
