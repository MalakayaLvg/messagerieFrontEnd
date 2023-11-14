
// Register  https://b1messenger.imatrythis.tk/register
// requete POST
// corps {
//              username: "luc",
//                password : "motdepasse"
//                  }

// Login https://b1messenger.imatrythis.tk/login
// requete POST
// corps {
//              username: "luc",
//                password : "motdepasse"
//                  }

// "dsfkjsdfkjhdskjfhs:<fbdsfn;:ndsbf;snbdf;,sdbfnb"


// Liste des messages  https://b1messenger.imatrythis.tk/api/messages
// requete GET
// Headers
//          Authorization : `Bearer ${token}`

//poster un nouveau message
//requete POST  https://b1messenger.imatrythis.tk/api/messages/new
// Headers
//          Authorization : `Bearer ${token}`
//Corps de requete :
// {
//  "content":"bla bla bla bla"
// }


const baseUrl = "https://b1messenger.imatrythis.tk/"
const clientUsername = document.getElementById("username")
console.log(clientUsername.value)
const clientPassword = document.getElementById("password")
console.log(clientPassword.value)


// const corpsRequeteRegister = {
//     username:"jeanpascal",
//     password : "pascalou"
// }
//register
// const registerParams = {
//         method : 'POST',
//         headers : {"Content-type":"application/json"},
//         body : JSON.stringify(corpsRequeteRegister)
//
// }
//
// fetch(`${baseUrl}register`, registerParams)
// .then(response=>response.json())
// .then(data=> console.log(data))


//Login : demander un token

const corpsRequeteLogin = {
    username: clientUsername.value,
    password : clientPassword.value
}

const loginParams = {
        method : 'POST',
        headers : {"Content-type":"application/json"},
        body : JSON.stringify(corpsRequeteLogin)


}
// let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTk5NzM0NTIsImV4cCI6MTY5OTk3NzA1Miwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiamVhbiJ9.dUr2zZ6873YRgHxLD6MJOUlvhHImBhSuLx9SFKryuq3onK3KMA3JDYUwfsNCzU1gwOdcpsT6Tyug4exw_RYzSvoWiZB_vJIahcTWyS1BF7z2CmW_9xJCF0uWWDJhAboqcoyIeWN9QhsDLPdqb6CBhl9HCscfqUfbVLYoNSSwRHs9an2hibf11IRaNoooSXlesjVEumSLnRMpahoKLDsppUxMpJ_zz_px61oRRI7DudEmXodvjVebfzyAF9cc8IlrLR2IGsfuT0Ew1jBOs9ITlLhBz46_ztY5HYW7UFIxL63UYDopKdjgQ1cAyyU-KR0VZJb5Sp8rHrI9eH6WqB-t_Q"
let token = ""
// console.log(token)
fetch(`${baseUrl}login`, loginParams)
.then(response=>response.json())
.then(data=>{
    console.log(data)
    console.log(data.token)
    token = data.token

} )

// console.log(token)
// const taken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTk5NjcyODksImV4cCI6MTY5OTk3MDg4OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiamVhbnBhc2NhbCJ9.BI7JPJ2CnbZ7qTBhdTUEz9pCzBWFfREHptF3E1sd2JDIMW9r8Hq8qnfNc5Y1VItzsNNPdsyWOx-HGZnpDoDhyLcc8nXxOha11dKXRmmUNpfu6kW1OSwZfOew7Owr0cDFPtZyASHMdk3EKZXGoUwINN_csVfZjDdlbO1c3y3LhUtCHIBDhPJmfIWluPRxn2LuLY8aOyrzzLxn1_8ANedKVmCbRwgMyZdJnsLtBw3EIWv7XuSMyOSw1uYKev19V72k_yDmlcVmrzJ8aGfkh4crVD_vdtcXlpmTOywAGelsyiCnmVkBf3fxn8hDsWV87ysGomDJSR5hjbFJNUYblxsH6Q"

// recuperer liste des messages


const messagesListParams = {
    method : 'GET',
    headers : {"Content-type":"application/json",
        "Authorization":`Bearer ${token}`},


}

const content = document.querySelector('.content')



fetch(`${baseUrl}api/messages`, messagesListParams)
    .then(response=>response.json())
    .then(data=>{
        // console.log("data")
        // console.log(data)
        data.forEach((message)=>{
            content.innerHTML+= `<p>${message.content}</p>`
        })
    } )


//Changement du titre de la page
const titreSign = document.querySelector(".titreSign")
const changeSign = document.querySelector(".changeSign")

changeSign.addEventListener('mousedown',()=>{
    console.log('click')
    titreSign.innerHTML = "REGISTER"
})