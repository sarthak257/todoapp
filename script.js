const inputBox=document.querySelector(".inputfield input");
const addbtn=document.querySelector(".inputfield button");
const todoList=document.querySelector(".todolist");
const deleteAll=document.querySelector(".footer button");



 inputBox.onkeyup=()=>{

     let userdata=inputBox.value;
     
     if(userdata.trim()!=0) // if user does not enter only spaces 
     
     { 
               addbtn.classList.add("active");
                                                  }
     else
     {
         addbtn.classList.remove("active");
     }
 }

showTask();// calling it outside so that it does not go away after refreshing

 addbtn.onclick=()=>{
     let getLocalStorage=localStorage.getItem("new todo");  // ??
     let userdata=inputBox.value;
     if(getLocalStorage==null)
     {
         listArr=[]; // empty list

     }
     else
     {
         listArr=JSON.parse(getLocalStorage); // tranforming json string into js object
     }
     if(!userdata==" "){  // TO check if its inputing empty strings
        addbtn.classList.remove("active");
     listArr.push(userdata);
     }
     localStorage.setItem("new todo",JSON.stringify(listArr)); // transforming js object into json string
 
     showTask(); // calling the function so to show results
    }


// function to add task list inside ul
 function showTask()
 {
    let getLocalStorage=localStorage.getItem("new todo");
    let userdata=inputBox.value;
    if(getLocalStorage==null)
    {
        listArr=[]; // empty list

    }
    else
    {
        listArr=JSON.parse(getLocalStorage); // tranforming json string into js object
    }
const pendingNumb=document.querySelector(".pendingNumb");
pendingNumb.textContent=listArr.length;
if(listArr.length>0) // To make clearall active
{
deleteAll.classList.add("active")
 
}else{
    deleteAll.classList.remove("active")

}

let newlitag='';
    listArr.forEach((element,index)=>{
        newlitag=newlitag+`<li> ${element}<span> <i onclick ="deletetask(${index})"class="fas fa-trash "></i></span></li>`;
    
    });
    todoList.innerHTML=newlitag;// adding new li tag inside todo list class
    inputBox.value="";

 }


 // delete task function
function deletetask(index)
{
    let getLocalStorage=localStorage.getItem("new todo");  // ??
   listArr=JSON.parse(getLocalStorage);
   listArr.splice(index,1); // delete

   localStorage.setItem("new todo",JSON.stringify(listArr)); // transforming js object into json string
 
   showTask(); // calling the function so to show results
  }


  // delete all
deleteAll.onclick=()=>{
    listArr=[]; //empty the array
    localStorage.setItem("new todo",JSON.stringify(listArr)); // transforming js object into json string
 
    showTask(); // calling the function so to show results
}