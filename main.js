let a = document.querySelector('.but')
a.addEventListener('click', function() {
    const taskInput = document.querySelector('.inp');
    const taskList = document.querySelector('.ul');
    
    if (taskInput.value) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="radio">
            <span>${taskInput.value}</span>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
})
