// input field 
let fname = document.getElementById('fname')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let relation = document.getElementById('relation')

//show hide selector
const ans = document.getElementById('ans')
const button = document.querySelector('button:nth-child(2)')
const img = document.querySelector('img')

//form tag
const form = document.querySelector('form')

form.addEventListener('submit', subFun)
function subFun(e) {

    //show hide condition
    ans.style.display = "block"
    button.style.display = "block"
    img.style.display = "none"

    //window stop
    e.preventDefault()

    //count p tag in page
    let removeClass = document.querySelectorAll('p').length

    // condition para less then three 
    if (removeClass <= 3) {

        //NAME
        var outputname = document.createElement('p')
        outputname.innerText = "Name : " + fname.value
        outputname.className = 'remove text-padding'
        ans.appendChild(outputname)

        //EMAIL
        var outputemail = document.createElement('p')
        outputemail.innerText = "E-mail : " + email.value
        outputemail.className = 'remove text-padding'
        ans.appendChild(outputemail)

        //MOBILE NUMBER
        var outputTel = document.createElement('p')
        outputTel.innerText = "Mobile number : " + tel.value
        outputTel.className = 'remove text-padding'
        ans.appendChild(outputTel)

        //RELATION
        var outputRelation = document.createElement('p')
        outputRelation.innerText = "Relation : " + relation.value
        outputRelation.className = 'remove text-padding'
        ans.appendChild(outputRelation)

        // CALL ME BUTTON
        var outputCall = document.createElement('a')
        outputCall.innerText = 'Call me'
        outputCall.className = 'btn btn-success'
        outputCall.setAttribute("href", "tel:" + tel.value)
        ans.appendChild(outputCall)

        //form reset
        form.reset()
    } else {
        // condition para more then three 
        alert("You can't add more than One . If you want to add more please press clear button")
    }
}

// Refresh page
function clearFun() {
    alert('Now page is Clear')
    location.reload()
}


