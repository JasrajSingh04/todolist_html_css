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
    document.getElementById("tab_2_id").style.backgroundColor = "rgb(245, 245, 245)";


    document.getElementById("content_id_1").style.display = "block";
    document.getElementById("tab_1_id").style.backgroundColor = "white";
  }

  function openForm2() {
    document.getElementById("content_id_1").style.display = "none";
    document.getElementById("tab_2_id").style.backgroundColor = "white";

    document.getElementById("content_id_2").style.display = "block";
    document.getElementById("tab_1_id").style.backgroundColor = "rgb(245, 245, 245)";
  }

openForm1();


// var sum=0
// var scroll_down=document.getElementsByClassName("content_class_1")

// const myForm=document.getElementById("user_form_submit");
// myForm.addEventListener("submit",(e)=>{
  
//     e.preventDefault();
//     var message=$('#enter_text_id').val();

// // checkbox_class
// checkbox_input=document.createElement("input");
// checkbox_input.type="radio";
// checkbox_input.className="radio_btn";
// checkbox_input.id="radio_id";
// checkbox_input.checked==true;
// checkbox_input.val="yes";
// checkbox_input.onclick=function(e){
//   h2.style.textDecorationLine="line-through";
//   h2.style.color="rgb(226, 226, 226)";
  
//   document.getElementById("content_id_2").appendChild(div)
// }



//                     //function(e){
//   // if(checkbox_input.val=="yes"){
//   //   checkbox_input.val="no"
//   //   h2.style.textDecorationLine="line-through";
//   //   h2.style.color="rgb(226, 226, 226)";
//   // }
//   // else if(checkbox_input.val=="no"){
//   //   checkbox_input.val=="yes"
//   //   h2.style.textDecorationLine="none";
//   //   h2.style.color="black";
//   // }
  
// //}




// checkbox=document.createElement("div");
// checkbox.id="checkbox_id";
// checkbox.className="checkbox_class";
// checkbox.appendChild(checkbox_input)



//   //input div that is message
//   var h2 = document.createElement("p")
//   h2.innerHTML=message;


//   var message_task=document.createElement("div")
//   message_task.className="message_task";
//   message_task.id="message_task_id";
//   message_task.appendChild(h2)
 


//   //deleting task
//   var bin_id=document.createElement("input")
//   bin_id.type="image";
//   bin_id.src="bin_3.png";
//   bin_id.className="bin_class";
//   bin_id.id="bin_id";
//   bin_id.height=48;
//   bin_id.width=48;
//   bin_id.onclick = function(e){        
//             e.target.parentNode.parentNode.remove();    
//             }

//   var delete_task=document.createElement("div")
//   delete_task.className="deletetask_class";
//   delete_task.id="deletetask_id";
//   delete_task.appendChild(bin_id);


 







//     // main div for user_task
//     var div = document.createElement("div")
//     div.className="user_task";
//     div.id="user_task_id";
//     div.appendChild(checkbox);
//     div.appendChild(message_task);
//     div.appendChild(delete_task);
   
    
    


//     if (message==""){
//               return
//           }
//           else{
//               document.getElementById("content_id_1").appendChild(div);
//           }
          
//           myForm.reset();
//           scroll_down[0].scrollTop = 9e9;
         
          
    

//     myForm.reset();
    

// });

// console.log("hello")


// var t=document.getElementById("plus_img_id");
//         t.addEventListener("click",function(){
//             console.log("submitted")
//         if(t.value=="YES"){
//           document.getElementById("enter_task_id").classList.add("open_task");
//             t.value="NO";
//           }
//         else if(t.value=="NO"){
//             document.getElementById("enter_task_id").classList.remove("open_task");
//             t.value="YES";
//           } 
//         })


//-------------------------------------------------------------------------------------------








t=document.getElementById("plus_img_id")
 t.addEventListener("click",function(e){
  e.preventDefault();
    // var message=$('#enter_text_id').val();

// checkbox_class
checkbox_input=document.createElement("input");
checkbox_input.type="radio";
checkbox_input.className="radio_btn";
checkbox_input.id="radio_id";
checkbox_input.checked==true;
checkbox_input.val="yes";
checkbox_input.onclick=function(e){
  h2.style.textDecorationLine="line-through";
  h2.style.color="rgb(226, 226, 226)";
  document.getElementById("content_id_2").appendChild(div);
  openForm2();
  h2.disabled="disabled";
  h2.backgroundColor="white"
}



                    //function(e){
  // if(checkbox_input.val=="yes"){
  //   checkbox_input.val="no"
  //   h2.style.textDecorationLine="line-through";
  //   h2.style.color="rgb(226, 226, 226)";
  // }
  // else if(checkbox_input.val=="no"){
  //   checkbox_input.val=="yes"
  //   h2.style.textDecorationLine="none";
  //   h2.style.color="black";
  // }
  
//}




checkbox=document.createElement("div");
checkbox.id="checkbox_id";
checkbox.className="checkbox_class";
checkbox.appendChild(checkbox_input)



  //input div that is message
  var h2 = document.createElement("input");
  h2.type="text"
  h2.id="p"
  h2.className="p"
  h2.addEventListener("keypress",function(e){

    if(e.key=="Enter"){
      
      h2.disabled="disabled";
      h2.style.backgroundColor="white";
      h2.style.color="black";
    }
    h2.addEventListener("focusout",function(e){ 
        h2.disabled="disabled";
        h2.style.backgroundColor="white";
        h2.style.color="black";
    
    })
  
  })


  var message_task=document.createElement("div")
  message_task.className="message_task";
  message_task.id="message_task_id";
  message_task.appendChild(h2)
 


  //deleting task
  var bin_id=document.createElement("input")
  bin_id.type="image";
  bin_id.src="bin_3.png";
  bin_id.className="bin_class";
  bin_id.id="bin_id";
  bin_id.height=48;
  bin_id.width=48;
  bin_id.onclick = function(e){        
            e.target.parentNode.parentNode.remove();    
            }

  var delete_task=document.createElement("div")
  delete_task.className="deletetask_class";
  delete_task.id="deletetask_id";
  delete_task.appendChild(bin_id);


 







    // main div for user_task
    var div = document.createElement("div")
    div.className="user_task";
    div.id="user_task_id";
    div.appendChild(checkbox);
    div.appendChild(message_task);
    div.appendChild(delete_task);

    document.getElementById("content_id_1").appendChild(div);
    h2.focus();
    openForm1();
    
          })






















































































































          
// // remove_all_items=document.getElementById("user_form_submit");
// // // remove_all_items.addEventListener("submit",function(){
// // //   t=document.getElementById("enter_text_class")
// // //   if(t.value=="YES"){
// // //     t.classList.add("open_task");
// // //     t.value="NO";
// // //   }
// // //   else if(t.value=="NO"){
// // //     t.classList.remove("open_task");
// // //     t.value="YES";
// // //   } 

    
// })



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












// button.onclick = function(e){
//   //         // document.getElementById(id).remove();
//   //         e.target.parentNode.remove();
  
//   //         }



























































































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





