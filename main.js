let addMission=document.querySelector(".sphere");
let lists=document.querySelector(".lists");
let input=document.querySelector(".text");
let reversebutton=document.querySelector(".btdwn");
let sortbutton=document.querySelector(".btup");

let array=[];
addMission.onclick=function(){
    if(input.value.length==0){
        alert("Xana boş buraxıla bilməz")
    }
    else{
        
        lists.innerHTML += `
        <div class="mission">
           ${input.value}    
            <div class="bt2nd">
            <img src="images/Group 56.png">
           
        </div>
        </div>
    `;
    let removelist = document.querySelectorAll(".bt2nd");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}
    
}
    let boolean=true;
    sortbutton.addEventListener("click", (e) => {
     let missionSort = [...document.querySelectorAll(".lists .mission")]
      .map((mission) => mission.innerHTML)
      .sort();
       
     
    if (boolean) {
    
    document.querySelectorAll(".lists > .mission").forEach((item, i) => {
        item.innerHTML=missionSort[i];
        item.innerHTML+= ``;
    let removelist = document.querySelectorAll(".bt2nd");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    });
}

    });
    reversebutton.addEventListener("click", (e) => {
        let missionSort = [...document.querySelectorAll(".lists .mission")]
         .map((mission) => mission.innerHTML)
         .sort().reverse();
       if (boolean) {

       
       document.querySelectorAll(".lists > .mission").forEach((item, i) => {
           item.innerHTML=missionSort[i];
           item.innerHTML+= ``;
    let removelist = document.querySelectorAll(".bt2nd");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
        });
    }
   
});