let theinput=document.querySelector(".add-task input");
let theaddbutton=document.querySelector(".add-task .plus");
let taskcontainer=document.querySelector(".tasks-content");
let notaskmsg=document.querySelector(".no-tasks-msg");

//foucs on field
window.onload = function () {
    theinput.focus();
};
// start add function
theaddbutton.onclick=function (){
if(theinput.value ===''){

}else{
    //remove task msg
    notaskmsg.remove();
}

    //creat main span
    let mainspan=document.createElement("span");

    //creat delete elemnt
    let deleteElemnt=document.createElement("span");
    
    //creat the span text
    let text=document.createTextNode(theinput.value);
    
    //creat delete button text
    let deletetext=document.createTextNode("Delete");

    //add text to spain
    mainspan.appendChild(text);
    //add class to span
    mainspan.className='task-box';


    //add text to delete button
    deleteElemnt.appendChild(deletetext)
    //add class to delete button
    deleteElemnt.className='delete';

    //add dlete button to main span
    mainspan.appendChild(deleteElemnt);

    //add the task to the container
    taskcontainer.appendChild(mainspan);

    //emptyyyyyyyyy
    theinput.value ='';
}
//end add fun 

//DELETE FUN
document.addEventListener('click',function(e){
    //delete task
    if(e.target.className=='delete'){
        e.target.parentNode.remove();
        
    }

    //finish task
    if(e.target.classList.contains('task-box')){
   
        //toggle class finished
        e.target.classList.toggle("finished");
    }
});



    
