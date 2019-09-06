const addButton=document.querySelector('.add_button');
var input=document.querySelector('.input');
const container=document.querySelector('.container');

class item{

    constructor (itemName)
    {
       this.createDiv(itemName)
    }

    createDiv(itemName)
    {
    
        let input=document.createElement('input');
    
        input.value=itemName;
        input.disabled=true;
        input.type="text";
        input.classList.add('item_input');

        let itemBox=document.createElement('div');
        itemBox.classList.add('item');

        let completedButton=document.createElement('button');
        completedButton.innerHTML="Completed";
        completedButton.classList.add('completedButton');

        let removebutton=document.createElement('button');
        removebutton.innerHTML="Delete";
        removebutton.classList.add('class_delete');
        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(completedButton);
        itemBox.appendChild(removebutton);
        completedButton.addEventListener('click', ()=>this.completed(itemBox));
        removebutton.addEventListener('click', ()=>this.remove(itemBox));
    }
    completed(input)
    {
        input.disabled=!input.disabled;
    }

remove(item)
{
    container.removeChild(item);
}
    }

    function check()
    {
        if(input.value!="")
        {

            new item (input.value);
            input.value="";
        }
    }
    addButton.addEventListener('click', check);
    window.addEventListener('keydown', (e)=>{
        if (e.which==13)
        { 
            check();}})


