
const add_button = document.getElementById("add");
const ul = document.getElementById("to-do");



add_button.addEventListener("click", () => {


    let li = document.createElement("li");
    let text_to_add = document.getElementsByClassName("plans")[0].value;

    if(text_to_add !== "") {
        
    li.appendChild(document.createTextNode(text_to_add));
    ul.appendChild(li);
    document.getElementsByClassName("plans")[0].value = "";
    

    //If the task is done, then cross it out

    let to_do_elements = document.querySelectorAll("li");

    to_do_elements.forEach( to_do_element => {
        to_do_element.addEventListener("click" , e => {

            e.target.style.textDecoration = "line-through";
            
        })
    })

    }
    
})


// clean the list 

const clear_button = document.getElementById("clear");

clear_button.addEventListener("click", () => {

    let to_do_elements = document.querySelectorAll("li");

    to_do_elements.forEach( to_do_element => {
        ul.removeChild(to_do_element);
    })

})

