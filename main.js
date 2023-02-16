// input field 
let fname = document.getElementById('fname')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let relation = document.getElementById('relation')

//show hide selector
const ans = document.getElementById('ans')
const button = document.querySelector('button:nth-child(2)')
// const img = document.querySelector('img')
const container = document.querySelector('#container')

//form tag
const form = document.querySelector('form')

form.addEventListener('submit', subFun)
function subFun(e) {

    //show hide condition
    container.style.Height ="auto"
    ans.style.display = "block"
    button.style.display = "block"
    // img.style.display = "none"

    //window stop
    e.preventDefault()

    //count p tag in page
    let ID = document.querySelectorAll('b').length

    // condition call button less then one 
    // if (removeClass < 1) {

        // ID
        var outputID = document.createElement('b')
        outputID.innerText = '\n\nID : ' +(ID+1) 
        outputID.id = 'removebtn '
        ans.appendChild(outputID)

        //Cancel Button
        var outputbtn = document.createElement('a')
        outputbtn.innerText = 'X'
        outputbtn.className = 'btn btn-danger float-end'
        outputbtn.id = 'removebtn'
        ans.appendChild(outputbtn)

        //NAME
        var outputname = document.createElement('p')
        outputname.innerText = "Name : " + fname.value
        localStorage.setItem('name', fname.value)
        outputname.className = 'remove text-padding'
        ans.appendChild(outputname)

        //EMAIL
        var outputemail = document.createElement('p')
        outputemail.innerText = "E-mail : " + email.value
        localStorage.setItem('email', email.value)
        outputemail.className = 'remove text-padding'
        ans.appendChild(outputemail)

        //MOBILE NUMBER
        var outputTel = document.createElement('p')
        outputTel.innerText = "Mobile number : " + tel.value
        localStorage.setItem('Mobile number', tel.value)
        outputTel.className = 'remove text-padding'
        ans.appendChild(outputTel)

        //RELATION
        var outputRelation = document.createElement('p')

        //Check RELATIONSHIP STATUS
        if(relation.value != "Select Relation"){
        outputRelation.innerText = "Relation : " + relation.value
        }else{
            outputRelation.innerText = "Relation : you haven't announced your relationship "
        }

        localStorage.setItem('Relation', relation.value)
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
    // } else {
    //     // condition call button more then one
    //     alert("You can't add more than One . If you want to add more please press clear button")
    // }
}

    ans.addEventListener('click' ,(e)=>{
        if(e.target.className.includes("float-end")){
            let deleteInfo = e.target.parentElement
            ans.removeChild(deleteInfo)
        } 
    } )
// let btnX = document.querySelector('button')

// Refresh page
function clearFun() {
    alert('Now page is Clear')
    location.reload()
}


