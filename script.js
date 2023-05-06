const date = () =>{
    let date_main = new Date('dec,31,2023,12:00:00')
    let naw_date = new Date();
    let date_day = parseInt((date_main - naw_date) /1000 /60 /60 /24);
    let date_hours = parseInt((date_main - naw_date) /1000 /60 /60)%24;
    let date_min = parseInt((date_main - naw_date) /1000 /60)%60;
    let date_sec = parseInt((date_main - naw_date) /1000)%60; 
    document.getElementsByClassName('time')[0].innerHTML=`
    
    <span> ${date_day} <br> <h6>Days</h6></span>
    <h5>:</h5>
    <span> ${date_hours} <br> <h6>hours</h6></span>
    <h5>:</h5>
    <span> ${date_min} <br> <h6>Minutes</h6></span>
    <h5>:</h5>
    <span> ${date_sec} <br> <h6>seconds</h6></span>` 


}  

setInterval(date,1000);
date()

let coin_first = document.getElementById('coin_first')
let coin = document.getElementById('coin');
let btc =document.getElementById('btc');

coin.addEventListener('change',() => {
    let a = coin.value;
    coin_first.innerText= a.slice(0,1);
    if(a === "Bitcoin"){
        btc.innerText = "BTC"
    }
    if(a === "Ethereum"){
        btc.innerText = "ETH"
    }
    if(a === "Tether"){
        btc.innerText = "USDI"
    }
    if(a === "BNB"){
        btc.innerText = "USDI"
    }

})
let gov_coins = document.getElementById("gov_coins");
let coins = document.getElementById("coins");
let gov_coinss = document.getElementById("gov_coinss");

coins.addEventListener('change' , ()=>{
    let e = coins.value;
    gov_coins.innerText = e.slice(0,1);
    if(e ==='Dollar'){
        gov_coinss.innerText = '$'
    }
    if(e ==='JOD'){
        gov_coinss.innerText = 'JOD'
    }
    if(e ==='Riyal'){
        gov_coinss.innerText = 'S'
    }
    if(e ==='Dirham'){
        gov_coinss.innerText = 'A'
    }
})

let crypto =document.getElementById('crypto');
let gov = document.getElementById('gov');
let btc_dollar = 27.844; 
let Ethereum_dollar = 1.769; 
let Tether_dollar = 1; 
let bnb_dollar = 328.04; 


crypto.addEventListener('change',() => {
    switch ('Bitcoin') {
        case coin.value:
            switch ('Dollar') {
                case coins.value:
                    gov.value = (crypto.value) * btc_dollar
                    break;
            }
            switch ('JOD') {
                case coins.value:
                    gov.value = (crypto.value) * (btc_dollar/0.09)
                    break;
            }
            switch ('Riyal') {
                case coins.value:
                    gov.value = (crypto.value) * (btc_dollar*3.76)
                    break;
            }
            switch ('Dirham') {
                case coins.value:
                    gov.value = (crypto.value) * (btc_dollar*3.56)
                    break;
            }
            break;
    
    }
})


crypto.addEventListener('change',() => {
    switch ('Ethereum') {
        case coin.value:
            switch ('Dollar') {
                case coins.value:
                    gov.value = (crypto.value) * Ethereum_dollar
                    break;
            }
            switch ('JOD') {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar/0.09)
                    break;
            }
            switch ('Riyal') {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar*3.76)
                    break;
            }
            switch ('Dirham') {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar*3.56)
                    break;
            }
            break;
    
    }
})

crypto.addEventListener('change',() => {
    switch ('Tether') {
        case coin.value:
            switch ('Dollar') {
                case coins.value:
                    gov.value = (crypto.value) * Tether_dollar
                    break;
            }
            switch ('JOD') {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar/0.09)
                    break;
            }
            switch ('Riyal') {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar*3.76)
                    break;
            }
            switch ('Dirham') {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollarr*3.56)
                    break;
            }
            break;
    
    }
})

crypto.addEventListener('change',() => {
    switch ('BNB') {
        case coin.value:
            switch ('Dollar') {
                case coins.value:
                    gov.value = (crypto.value) * bnb_dollar
                    break;
            }
            switch ('JOD') {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar/0.09)
                    break;
            }
            switch ('Riyal') {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar*3.76)
                    break;
            }
            switch ('Dirham') {
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar*3.56)
                    break;
            }
            break;
    
    }
})