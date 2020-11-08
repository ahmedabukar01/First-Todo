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
let filterTodo = (term)=>{
    Array.from(ul.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo=>{
        return todo.classList.add('filtered');
    });

    Array.from(ul.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach(todo=>{
        return todo.classList.remove('filtered');
    });
}
// filtering
search.addEventListener('keyup',()=>{
    const term = search.value.toLowerCase().trim();
    filterTodo(term);
})