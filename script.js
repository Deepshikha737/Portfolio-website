let sidemeu=document.getElementById("new");
        function openmenu(){
            sidemeu.style.right="0";

        }
        function closemenu(){
            sidemeu.style.right="-200%";
            
        }
let menu1=document.getElementsByClassName("fa-sun")[0];
let menu2=document.getElementsByClassName("fa-moon")[0];
function chngm1(){
    if(menu1.style.opacity=="0"){
        menu1.style.opacity="1"
        menu2.style.opacity="0"

    }
    else{
        menu2.style.opacity="1"
        menu1.style.opacity="0"
    }
    

}

const body=document.querySelector("body"),
 switc=document.getElementsByClassName("mode")[0];

 switc.addEventListener("click",()=>{
    body.classList.toggle("dark")
    
 });

 var tablinks=document.getElementsByClassName("tab-links")
 var tabcontents=document.getElementsByClassName("tab-contents")

 function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");

 }
var typingeffect=new Typed(".typedText",{
    strings:["Coder","Developer","Designer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,
 })

 
 

 