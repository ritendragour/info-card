let fname = document.getElementById('fname')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let relation = document.getElementById('relation')

const ans = document.getElementById('ans')
const button = document.querySelector('button:nth-child(2)')
const img = document.querySelector('img')

const form = document.querySelector('form')

form.addEventListener('submit', subFun)
function subFun(e) {
    ans.style.display = "block"
    button.style.display = "block"
    img.style.display = "none"

    e.preventDefault()

    let removeClass = document.querySelectorAll('p').length

    if (removeClass <= 3) {

        var outputname = document.createElement('p')
        outputname.innerText = "Name : " + fname.value
        outputname.className = 'remove text-padding'
        ans.appendChild(outputname)

        var outputemail = document.createElement('p')
        outputemail.innerText = "E-mail : " + email.value
        outputemail.className = 'remove text-padding'
        ans.appendChild(outputemail)

        var outputTel = document.createElement('p')
        outputTel.innerText = "Mobile number : " + tel.value
        outputTel.className = 'remove text-padding'
        ans.appendChild(outputTel)

        var outputRelation = document.createElement('p')
        outputRelation.innerText = "Relation : " + relation.value
        outputRelation.className = 'remove text-padding'
        ans.appendChild(outputRelation)

        var outputCall = document.createElement('a')
        outputCall.innerText = 'Call me'
        outputCall.className = 'btn btn-success'
        outputCall.setAttribute("href", "tel:" + tel.value)
        ans.appendChild(outputCall)

        form.reset()
    } else {
        alert("You can't add more than One . If you want to add more please press clear button")
    }
}

function clearFun() {
    alert('Now page is Clear')
    location.reload()
}


