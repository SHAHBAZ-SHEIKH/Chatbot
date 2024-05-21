var list = document.getElementById("list")
var list2 = document.getElementById("list2")
var message =document.getElementById("message")
var typing =document.getElementById("typing")
function sendMesage(){
    if(event.keyCode === 13){
        var elem = event.target
        list.innerHTML +=`<li class="left">${elem.value}</li>`
        typing.style.display = "block";

        if(["hi","bye","hye","oye","hello","hi hello","kaesy hoo"].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Mai aap ki kya help kr sakta hoo.</li>`
                typing.style.display = "none";
            },2000)
        }
        else if(["mujhe smit mai admission chahye","mujhe smit mai course krna hai"].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">knsa Course Krna hai</li>`
               
                typing.style.display = "none";
            },2000)
        }
        else if(["Assalam O alaikum","salam"].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Walikum Assalam</li>`
               
                typing.style.display = "none";
            },2000)
        }
        else if(["mujhe wma ka course krna hai","mujhe graphic designing ka course krna hai","mujhe ai ka course krna hai",].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Apna Name Btaye</li>`
                typing.style.display = "none";
            },2000)
        }
        else if(["shahbaz ahmed"].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Apny Father Ka Name Btayye</li>`
                typing.style.display = "none";
            },2000)
        }
        else if(["niaz ahmed"].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">App ko Enroll Krlyegaya hai..</li>`
                typing.style.display = "none";
            },2000)
        }
        else if(["thank you"].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Welcome..</li>`
                typing.style.display = "none";
            },2000)
        }
        else{
            setTimeout(() =>{
                list.innerHTML +=`<li class="right">Sorry!Mai Nahi Samjha</li>`
                typing.style.display = "none";
            },2000)

        }
        elem.value=""
    }
    
    

}