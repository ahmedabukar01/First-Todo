let form = document.querySelector('#form');
let ul = document.querySelector('ul');
form.addEventListener('submit', e=>{
    e.preventDefault();
    let Todo = form.add.value.trim();
    if(Todo.length){
        createTemplete(Todo);
        form.reset();
    }
    
    form.value
});

let createTemplete = todo=>{
    const html = `
    <li class="flex">
         <span>${todo}</span>
        <ion-icon name="trash-outline"></ion-icon>
    </li>
    `;

    ul.innerHTML +=html;
    
}