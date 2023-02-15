let fname = document.getElementById('fname')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let relation = document.getElementById('relation')

const ans = document.getElementById('ans')
const form = document.querySelector('form')


form.addEventListener('submit', subFun)

function subFun(e){
    e.preventDefault()
    
    var outputname = document.createElement('h1')
    outputname.innerText = fname.value
    outputname.className = 'text-center'
    ans.appendChild(outputname)

    var outputemail = document.createElement('p')
    outputemail.innerText = email.value
    outputemail.className = 'text-center'
    ans.appendChild(outputemail)

    var outputtel = document.createElement('p')
    outputtel.innerText = tel.value
    outputtel.className = 'text-center'
    ans.appendChild(outputtel)

    var outputRelation = document.createElement('p')
    outputRelation.innerText = relation.value
    outputRelation.className = 'text-center'
    ans.appendChild(outputRelation)
    form.reset()
}


