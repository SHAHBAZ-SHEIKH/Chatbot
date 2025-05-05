// var list = document.getElementById("list")
// var list2 = document.getElementById("list2")
// var message =document.getElementById("message")
// var typing =document.getElementById("typing")
// function sendMesage(){
//     if(event.keyCode === 13){
//         var elem = event.target
//         list.innerHTML +=`<li class="left">${elem.value}</li>`
//         typing.style.display = "block";

//         if(["hi","bye","hye","oye","hello","hi hello","kaesy hoo"].indexOf(elem.value.toLowerCase()) !== -1){
//             setTimeout(() =>{
//                 list.innerHTML +=`<li class="right">Mai aap ki kya help kr sakta hoo.</li>`
//                 typing.style.display = "none";
//             },2000)
//         }
//         else if(["mujhe smit mai admission chahye","mujhe smit mai course krna hai"].indexOf(elem.value.toLowerCase()) !== -1){
//             setTimeout(() =>{
//                 list.innerHTML +=`<li class="right">knsa Course Krna hai</li>`
               
//                 typing.style.display = "none";
//             },2000)
//         }
//         else if(["Assalam O alaikum","salam"].indexOf(elem.value.toLowerCase()) !== -1){
//             setTimeout(() =>{
//                 list.innerHTML +=`<li class="right">Walikum Assalam</li>`
               
//                 typing.style.display = "none";
//             },2000)
//         }
//         else if(["mujhe wma ka course krna hai","mujhe graphic designing ka course krna hai","mujhe ai ka course krna hai",].indexOf(elem.value.toLowerCase()) !== -1){
//             setTimeout(() =>{
//                 list.innerHTML +=`<li class="right">Apna Name Btaye</li>`
//                 typing.style.display = "none";
//             },2000)
//         }
//         else if(["shahbaz ahmed"].indexOf(elem.value.toLowerCase()) !== -1){
//             setTimeout(() =>{
//                 list.innerHTML +=`<li class="right">Apny Father Ka Name Btayye</li>`
//                 typing.style.display = "none";
//             },2000)
//         }
//         else if(["niaz ahmed"].indexOf(elem.value.toLowerCase()) !== -1){
//             setTimeout(() =>{
//                 list.innerHTML +=`<li class="right">App ko Enroll Krlyegaya hai..</li>`
//                 typing.style.display = "none";
//             },2000)
//         }
//         else if(["thank you"].indexOf(elem.value.toLowerCase()) !== -1){
//             setTimeout(() =>{
//                 list.innerHTML +=`<li class="right">Welcome..</li>`
//                 typing.style.display = "none";
//             },2000)
//         }
//         else{
//             setTimeout(() =>{
//                 list.innerHTML +=`<li class="right">Sorry!Mai Nahi Samjha</li>`
//                 typing.style.display = "none";
//             },2000)

//         }
//         elem.value=""
//     }
    
    

// }



const list = document.getElementById("list");
const messageInput = document.getElementById("message");
const typing = document.getElementById("typing");

function sendMessage(event) {
  if (event.key === "Enter") {
    const userMessage = messageInput.value.trim();
    if (userMessage === "") return;

    addMessage(userMessage, "left");
    typing.style.display = "block";

    const msg = userMessage.toLowerCase();

    setTimeout(() => {
      if (["hi", "bye", "hye", "oye", "hello", "hi hello", "kaesy hoo"].includes(msg)) {
        addMessage("Mai aap ki kya help kr sakta hoo.", "right");
      } else if (["mujhe smit mai admission chahye", "mujhe smit mai course krna hai"].includes(msg)) {
        addMessage("Knsa course krna hai?", "right");
      } else if (["assalam o alaikum", "salam"].includes(msg)) {
        addMessage("Walikum Assalam", "right");
      } else if (["mujhe wma ka course krna hai", "mujhe graphic designing ka course krna hai", "mujhe ai ka course krna hai"].includes(msg)) {
        addMessage("Apna Name Btaye", "right");
      } else if (["shahbaz ahmed"].includes(msg)) {
        addMessage("Apny Father Ka Name Btayye", "right");
      } else if (["niaz ahmed"].includes(msg)) {
        addMessage("App ko Enroll kr liya gaya hai..", "right");
      } else if (["thank you"].includes(msg)) {
        addMessage("Welcome!", "right");
      } else {
        addMessage("Sorry! Mai nahi samjha", "right");
      }
      typing.style.display = "none";
    }, 1500);

    messageInput.value = "";
  }
}

function addMessage(text, side) {
  const div = document.createElement("div");
  div.classList.add("message", side);
  div.textContent = text;
  list.appendChild(div);
  list.scrollTop = list.scrollHeight;
}
