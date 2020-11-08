let form = document.querySelector('#form');
let ul = document.querySelector('ul');
let search = document.querySelector('.form input');


form.addEventListener('submit', e=>{
    e.preventDefault();
    let Todo = form.add.value.trim();
    if(Todo.length){
        createTemplete(Todo);
        form.reset();
    }
    
    form.value
});

// creating html templete

let createTemplete = todo=>{
    const html = `
    <li class="flex">
         <span>${todo}</span>
        <ion-icon name="trash-outline" class="delete"></ion-icon>
    </li>
    `;

    ul.innerHTML +=html;
    
}

// delete todo
ul.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// filter function
let filterTodo = (x)=>{
    console.log(x)
}
// filtering
search.addEventListener('keyup',()=>{
    const term = search.value.trim();
    filterTodo(term);
})