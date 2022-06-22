// var tabbuttons=document.querySelector(".container_class .tabs_class div")
// var tabpanels=document.querySelector(".container_class .content_class_1")

// function showpanel(panelindex,colorcode){
//     tabbuttons.forEach(function(node){
//         node.style.backgroundcolor="";
//         node.style.color="";
//     })
//     tabbuttons[panelindex].style.backgroundcolor=colorcode;
//     tabbuttons[panelindex].style.color="white"

//     tabpanels.forEach(function(node){
//         node.style.display="none";
//     })

//     tabpanels[panelindex].style.display="block";
//     tabpanels[panelindex].style.backgroundcolor=colorcode;

// }


function openForm1() {
    document.getElementById("content_id_2").style.display = "none";
    document.getElementById("tab_2_id").style.backgroundColor = "rgb(202, 202, 202)";


    document.getElementById("content_id_1").style.display = "block";
    document.getElementById("tab_1_id").style.backgroundColor = "white";
  }

  function openForm2() {
    document.getElementById("content_id_1").style.display = "none";
    document.getElementById("tab_2_id").style.backgroundColor = "white";

    document.getElementById("content_id_2").style.display = "block";
    document.getElementById("tab_1_id").style.backgroundColor = " rgb(202, 202, 202)";
  }

openForm1();































































































// const myForm=document.getElementById("user_form_task")
// var scroll_down=document.getElementById("htmlforscroll")
// var sum=0


// myForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("for submitted")
//     var message=$('#todo_name_id').val();
//     sum=sum+1;


//     // for (let i = 0; i < 1000; i++) {
//     //     num=num+1
//     // }
//     // var but=document.createElement("button")
//     // but.innerHTML="Delete"
//     // but.className="deletetask"
//     // but.id="deletetask"
    

//     // var div=document.createElement("div");
//     // div.id="Task";
//     // div.className="taskclass";
//     // // div.innerHTML=message;
//     // // div.appendChild(but)

    
//     // const id = "messagecon"+ Math.floor(Math.random() * 1000)
//     var div2=document.createElement("div");
//     div2.id = "message";
//     div2.className="messagecon";
//     div2.innerHTML=message;
    

//     var btndiv=document.createElement("div");
//     btndiv.className="deletebtn";
//     btndiv.id="deletebtn";
    


//     var button=document.createElement("BUTTON");
//     button.id="deletetask";
//     button.className="deletetask";
//     button.innerHTML="Delete Task";
//     button.onclick = function(e){
//         // document.getElementById(id).remove();
//         e.target.parentNode.remove();

//         }
    

//     var completed_button=document.createElement("BUTTON");
//     completed_task=document.getElementById("content_id_completed");
//     completed_button.id="completed_btn";
//     completed_button.className="completed_btn";
//     completed_button.innerHTML="Task Completed";
//     completed_button.onclick = function(e){
//         completed_task.appendChild(e.target.parentNode);
//         completed_button.remove();
        
//         }

    
    
   

//     var div=document.createElement("div");
//     div.id= "Task";
//     div.className="taskclass";
//     div.appendChild(div2);
//     div.appendChild(btndiv);
//     div.appendChild(button);
//     div.appendChild(completed_button)
    
//     remove_all_task=document.getElementById("remove_all_items")
//     remove_all_task.onclick=function(e){
//         var remove_all=document.getElementById("content_id");
//         while(remove_all.hasChildNodes()){
//             remove_all.removeChild(remove_all.firstChild)
//         }


//     }

  

//     if (message==""){
//         return
//     }
//     else{
//         document.getElementById("content_id").appendChild(div);
//     }
    
//     myForm.reset();
//     scroll_down[0].scrollTop = 9e9;
    

// });

// remove_all_items=document.getElementById("remove_all_items");
// remove_all_items.addEventListener("click",function(){
//     document.getElementById("content_id").removeChild(document.getElementById("Task"));
// })




// function remove_div(){
//     document.getElementById("content").remove();
// }

// var m_con=document.getElementById("deletetask")
// delete_div=document.getElementById("deletetask")
//     delete_div.onclick=function(){
//     m_con.parentNode.parentNode.remove();
//     }


   
// $(document).ready(function(){
//     $(document).on('click','.deletetask',function(){
//         $(this).closest(`#taskclass`).remove()
//     })

// })





























































































// var outputArea=$('#content_id')
// var scroll_down=$(`#htmlforscroll`)

// $('#user_form_task').on('submit',function(e){
//     e.preventDefault();
//     var message=$('#todo_name_id').val();

//     if(message==""){
//         return
//     }
//     else{
//     outputArea.append(`
//     <div class='taskclass' id ="task">
                
//                 <div class="messagecon"> ${message}</div>
                
//                     <div class ="deletebtn"><button class="deletetask" id   ="deletetask">Delete</button></div>       
//                 </div>`);
//     }
//     $("#user_form_task")[0].reset();

//     scroll_down[0].scrollTop = 9e9;
    
// });
 
// $(document).ready(function(){
//     $(document).on('click','.deletetask',function(){
//         $(this).closest(`#task`).remove()
//     })

// })





