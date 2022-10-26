var siteName = document.getElementById("siteName");
var sideUrl = document.getElementById("sideUrl");
var outPut = document.getElementById("outPut");
var btnUpdate=document.getElementById("btnUpdate");
var btnSubmit=document.getElementById("btnSubmit");
var alertName=document.getElementById("alertName");
var alertUrl=document.getElementById("alertUrl");
var alertexist=document.getElementById("alertexist");

linkContainer=[];
if( localStorage.getItem("links") != null){
linkContainer = JSON.parse(localStorage.getItem("links"))
}

display()



 function addlinks(){
    if(siteName.value==""){
        alertName.classList.remove("d-none");
    }
    else if(sideUrl.value==""){
    alertUrl.classList.remove("d-none");

    }
    else if(validation()== true){
        validation();
    }
    else
    {
        var links={
        name:siteName.value,
        url:sideUrl.value,
        }
    linkContainer.push(links);
    localStorage.setItem("links",JSON.stringify(linkContainer))
    clear()
    display()
 }
}


// =====================
 function display(){
    var box=``;
for(var i=0;i<linkContainer.length;i++){
    box+=`  <div class="gradient m-3 d-flex justify-content-between p-3 align-items-center  " >
    <a  class="s-name">${linkContainer[i].name}</a>
    <div>
    <a href="${linkContainer[i].url}" class="btn btn-primary" target="_blank">Visit</a>
    <button class="btn btn-primary" onclick="updatelinks(${i})">Update</button>
    <button class="btn btn-danger" onclick="deletelink(${i})">Delete</button>

    </div>
</div>`;

}
outPut.innerHTML=box;

}
// =========================
function deletelink(index){

linkContainer.splice(index,1);
localStorage.setItem("links",JSON.stringify(linkContainer))
    display()

}
// ====================
var globalitem;
function updatelinks(item){
    globalitem=item;
    siteName.value=linkContainer[item].name;
    sideUrl.value=linkContainer[item].url;
    btnUpdate.classList.remove("d-none");
    btnSubmit.classList.add("d-none");

}
function changelinks(){
    if(siteName.value==""){
        alertName.classList.remove("d-none");
    }
    else if(sideUrl.value==""){
    alertUrl.classList.remove("d-none");
    }
    else
    {
   linkContainer[globalitem].name= siteName.value;
    linkContainer[globalitem].url=sideUrl.value;
    localStorage.setItem("links",JSON.stringify(linkContainer))
    clear()
    btnUpdate.classList.add("d-none");
    btnSubmit.classList.remove("d-none");
    display()
    }

}
function clear(){
    siteName.value="";
    sideUrl.value="";
    alertName.classList.add("d-none");
    alertUrl.classList.add("d-none");
    alertexist.classList.add("d-none");

}

function validation(){
    for(var i=0; i<linkContainer.length;i++){
        if(siteName.value == linkContainer[i].name){
                alertexist.classList.remove("d-none");
                alertName.classList.add("d-none");
        return true;
    }
    }
}
