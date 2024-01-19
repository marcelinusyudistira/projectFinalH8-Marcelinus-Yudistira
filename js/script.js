// >>>>>>>> Todos Function <<<<<<<<<
function displayTodo(){
    const todos = JSON.parse(localStorage.getItem('todos'))

    let list = ``

    if(todos){
        for(i=0; i<todos.length; i++){
            list += `
            <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
                <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div class="form-check">
                        <input class="form-check-input me-0" type="checkbox" values="" id=${todos[i].id} onchange="setComplete(this.checked, this.id)"
                        aria-label="..." ${todos[i].checked ? 'checked' : ''}/>
                    </div>
                </li>
                <li class="list-group-item d-flex align-items-center px-3 py-1 flex-grow-1 border-0 bg-transparent">
                    <p class="lead fw-normal mb-0">${todos[i].name}</p>
                </li>
                <li class="list-group-item d-flex align-items-center px-3 py-1 border-0 bg-transparent">
                    <button type="button" class="btn btn-danger" id=${todos[i].id} onclick="deleteTodo(this.id)">Delete</button>
                </li>
            </ul>
            `
        }
    }

    document.getElementById('list-todo').innerHTML = list
}

function submitTodo(){
    const todo = document.getElementById('add-todo').value
    let todos = JSON.parse(localStorage.getItem('todos')) 

    if(todos){
        todos.push({
            id: todos[todos.length-1].id + 1,
            name: todo,
            checked: false
        })
    }else{
        todos = [{
            id: 0,
            name: todo,
            checked: false
        }]
    }
    localStorage.setItem('todos', JSON.stringify(todos))

    document.getElementById('add-todo').value = ''

    displayTodo()
}

function setComplete(checked, id){
    let todos = JSON.parse(localStorage.getItem('todos')) 
    let todosCheck

    // todos dicopy ke todosCheck pake map, tapi dicek id yg dicari, semua direturnkan ke todos lagi
    todosCheck = todos.map(el => {
        if (el.id === Number(id)) {
            el.checked = checked
        }
        return el
    })

    localStorage.setItem('todos', JSON.stringify(todosCheck))

    displayTodo()
}

function deleteTodo(id){
    let todos = JSON.parse(localStorage.getItem('todos')) 
    let todosLain

    //filter didalam todos selain id, dikumpulkan di todosLain selain id yang masuk
    //karena id yang masuk itu string makan digunakan Number(id) -> dicek
    todosLain = todos.filter(el => el.id !== Number(id))

    //editing todos (yang mau dihapus) menjadi todosLain (yang dihapus sudah difilter)
    if(todos.length) {
        localStorage.setItem('todos', JSON.stringify(todosLain))
    }else{
        localStorage.removeItem('todos')
    }

    displayTodo()
}

// >>>>>>>> Todos Function <<<<<<<<<

// >>>>>>>> Blog Function <<<<<<<<<
const blogLoad = () => {
    let temp = ''
    document.getElementById('blogId').value = ''

    const blog = [
        {
            id : 1,
            judul : "Judul Blog 1",
            keterangan : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel eligendi, voluptates magnam perspiciatis ex esse nemo excepturi, quis, sit eos?",
        },
        {
            id : 2,
            judul : "Judul Blog 2",
            keterangan : "Adipisicing elit. Lorem ipsum dolor sit amet consectetur  Pariatur vel eligendi, voluptates magnam perspiciatis ex esse nemo excepturi, quis, sit eos?",
        },
        {
            id : 3,
            judul : "Judul Blog 3",
            keterangan : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel eligendi, voluptates magnam perspiciatis ex esse nemo excepturi, quis, sit eos?",
        },
        {
            id : 4,
            judul : "Judul Blog 4",
            keterangan : "Ex esse nemo excepturi, quis, sit eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel eligendi, voluptates magnam perspiciatis",
        },
        {
            id : 5,
            judul : "Judul Blog 1",
            keterangan : "Pariatur vel eligendi, amet consectetur adipisicing elit. Pariatur vel eligendi, voluptates magnam perspiciatis ex esse nemo excepturi, quis, sit eos?",
        },
        {
            id : 6,
            judul : "Judul Blog 5",
            keterangan : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel eligendi, voluptates magnam perspiciatis ex esse nemo excepturi, quis, sit eos?",
        },
        {
            id : 7,
            judul : "Judul Blog 6",
            keterangan : "Vluptates magnam sit amet consectetur adipisicing elit. Pariatur vel eligendi, voluptates magnam perspiciatis ex esse nemo excepturi, quis, sit eos?",
        },
        {
            id : 8,
            judul : "Judul Blog 7",
            keterangan : "Consectetur adipisicing elit. Lorem ipsum dolor sit amet Pariatur vel eligendi, voluptates magnam perspiciatis ex esse nemo excepturi, quis, sit eos?",
        },
        {
            id : 9,
            judul : "Judul Blog 8",
            keterangan : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel eligendi, voluptates magnam perspiciatis ex esse nemo excepturi, quis, sit eos?",
        },
    ]

    blog.forEach(el => {
        temp += `
            <div class="col">
                <div class="card">
                    <img src="https://picsum.photos/200/10${el.id}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${el.judul}</h5>
                        <p class="card-text">${el.keterangan}</p>
                        <a href="#" class="btn btn-primary">Selengkapnya</a>
                    </div>
                </div>
            </div>
        
        `
    })
    
    console.log(temp);

    document.getElementById('blogId').innerHTML = temp
}
// >>>>>>>> Blog Function <<<<<<<<<