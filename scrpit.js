let celInput =document.querySelector('#celcius >input');
let fahInput =document.querySelector('#Fahrenheit >input');
let kelInput =document.querySelector('#Kelvin >input');

let btn=document.querySelector('.btn button')

function roundNumber(number){
    return Math.round(number*100)/100
}


celInput.addEventListener('input',function(){
    let ctemp=parseFloat(celInput.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp+273.15

    fahInput.value=roundNumber(ftemp)
    kelInput.value=roundNumber(ktemp)
})
fahInput.addEventListener('input',function(){
    let ftemp=parseFloat(fahInput.value)
    let ctemp=(ftemp-32)+(5/9)
    let ktemp=(ftemp-32) +(5/9) +273.15

    celInput.value=roundNumber(ctemp)
    kelInput.value=roundNumber(ktemp)
})
kelInput.addEventListener('input',function(){
    let ktemp=parseFloat(kelInput.value)
    let ctemp=ktemp-273.15
    let ftemp=(ktemp-273.15)*(9/5)+32

    celInput.value=roundNumber(ctemp)
    fahInput.value=roundNumber(ftemp)
})
btn.addEventListener('click',()=>{
    celInput.value=""
    fahInput.value=""
    kelInput.value=""
})