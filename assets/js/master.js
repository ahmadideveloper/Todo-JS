
document.getElementById('add').addEventListener('click', (e) => {

    let _inp = document.getElementById('inp')
    if (_inp.value != '') {
        let temp = document.createElement('div')
        temp.classList.add('task', 'col-9', 'py-2', 'ps-3', 'bg-white', 'row', 'justify-content-between', 'align-items-center', 'mb-2')
        temp.innerHTML = `
    <div class="left w-auto w-50">
        <input type="checkbox" id="check" onclick="_check(this)">
        <label for="check"> ${_inp.value} </label>
    </div>
    <div class="right w-auto w-50">
        <i onclick="_del(this)" class="bi bi-x"></i>
        <i onclick="_edit(this)" class="bi bi-pencil-square"></i>
    </div>
    `
        document.getElementById('tasks').appendChild(temp)
        e.preventDefault()
        _inp.value = null
        _inp.focus()
        e.preventDefault()
    } else {
        alert('fill ...')
    }
})

function _del(s) {
    s.parentElement.parentElement.remove()
}
function _edit(s) {
    let _child = s.parentElement.previousElementSibling.children
    // console.log(_child[1]);
    _child[1].setAttribute('contenteditable', true)
}

document.getElementById('delAll').addEventListener('click', (e) => {
    e.preventDefault()
    let _tasks = document.querySelectorAll('.task')
    // console.log(_tasks);
    _tasks.forEach((val) => {
        // console.log(val.children[0].children[0]);
        if (
            val.children[0].children[0].checked
        ) {
            val.remove()
        }
    })
})



function _check(s) {
    if (s.checked) {
        document.getElementById('delAll').style.opacity = '1'
        document.getElementById('delAll').style.visibility = 'visible'
    } else {
        document.getElementById('delAll').style.opacity = '0'
        document.getElementById('delAll').style.visibility = 'hidden'
    }
}
setInterval(() => {
    if (document.querySelector('#check') == null) {
        document.getElementById('delAll').style.opacity = '0'
        document.getElementById('delAll').style.visibility = 'hidden'
    }
}, 100);