// alert("error");



const hearts = document.getElementsByClassName('heart');

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        const heartCount = document.getElementById('heart-count');
        let count = parseInt(heartCount.innerText);
        count = count + 1;
        heartCount.innerText = count;
    });
}


 

// call button event handler


// call emergency number
document.getElementById('call-emergency').addEventListener('click' , function(){

    

    const serviceName = document.getElementById('service-name1').innerText;
    const phoneNumber = document.getElementById('phone-number1').innerText;
    const coincount = document.getElementById('coin-count');
    let coin = parseInt(coincount.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${serviceName} ${phoneNumber}...`);
        coin = coin - 20;
        coincount.innerText = coin;
    }
    

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${serviceName}</h1>
                <p>${phoneNumber}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});



// Ambulance


document.getElementById('call-ambulance').addEventListener('click' , function(){

    

    const serviceName = document.getElementById('service-name2').innerText;
    const phoneNumber = document.getElementById('phone-number2').innerText;
    const coincount = document.getElementById('coin-count');
    let coin = parseInt(coincount.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${serviceName} ${phoneNumber}...`);
        coin = coin - 20;
        coincount.innerText = coin;
    }
    

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${serviceName}</h1>
                <p>${phoneNumber}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});


// Bd railway
document.getElementById('call-railway').addEventListener('click' , function(){

    

    const serviceName = document.getElementById('service-name3').innerText;
    const phoneNumber = document.getElementById('phone-number3').innerText;
    const coincount = document.getElementById('coin-count');
    let coin = parseInt(coincount.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${serviceName} ${phoneNumber}...`);
        coin = coin - 20;
        coincount.innerText = coin;
    }
    

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${serviceName}</h1>
                <p>${phoneNumber}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});


// brac
document.getElementById('call-brac').addEventListener('click' , function(){

    

    const serviceName = document.getElementById('service-name4').innerText;
    const phoneNumber = document.getElementById('phone-number4').innerText;
    const coincount = document.getElementById('coin-count');
    let coin = parseInt(coincount.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${serviceName} ${phoneNumber}...`);
        coin = coin - 20;
        coincount.innerText = coin;
    }
    

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${serviceName}</h1>
                <p>${phoneNumber}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});

// police
document.getElementById('call-police').addEventListener('click' , function(){

    

    const serviceName = document.getElementById('service-name5').innerText;
    const phoneNumber = document.getElementById('phone-number5').innerText;
    const coincount = document.getElementById('coin-count');
    let coin = parseInt(coincount.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${serviceName} ${phoneNumber}...`);
        coin = coin - 20;
        coincount.innerText = coin;
    }
    

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${serviceName}</h1>
                <p>${phoneNumber}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});


// fire

document.getElementById('call-fire').addEventListener('click' , function(){

    

    const serviceName = document.getElementById('service-name6').innerText;
    const phoneNumber = document.getElementById('phone-number6').innerText;
    const coincount = document.getElementById('coin-count');
    let coin = parseInt(coincount.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${serviceName} ${phoneNumber}...`);
        coin = coin - 20;
        coincount.innerText = coin;
    }
    

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${serviceName}</h1>
                <p>${phoneNumber}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});

// food

document.getElementById('call-food').addEventListener('click' , function(){

    

    const serviceName = document.getElementById('service-name7').innerText;
    const phoneNumber = document.getElementById('phone-number7').innerText;
    const coincount = document.getElementById('coin-count');
    let coin = parseInt(coincount.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${serviceName} ${phoneNumber}...`);
        coin = coin - 20;
        coincount.innerText = coin;
    }
    

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${serviceName}</h1>
                <p>${phoneNumber}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});

// bus

document.getElementById('call-bus').addEventListener('click' , function(){

    

    const serviceName = document.getElementById('service-name8').innerText;
    const phoneNumber = document.getElementById('phone-number8').innerText;
    const coincount = document.getElementById('coin-count');
    let coin = parseInt(coincount.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${serviceName} ${phoneNumber}...`);
        coin = coin - 20;
        coincount.innerText = coin;
    }
    

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${serviceName}</h1>
                <p>${phoneNumber}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});

// plain

document.getElementById('call-plain').addEventListener('click' , function(){

    

    const serviceName = document.getElementById('service-name9').innerText;
    const phoneNumber = document.getElementById('phone-number9').innerText;
    const coincount = document.getElementById('coin-count');
    let coin = parseInt(coincount.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${serviceName} ${phoneNumber}...`);
        coin = coin - 20;
        coincount.innerText = coin;
    }
    

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${serviceName}</h1>
                <p>${phoneNumber}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});


// clear btn

document.getElementById("clear-btn").addEventListener('click', function () {
    const callHistory = document.getElementById('call-history');
    if (callHistory) {
        callHistory.innerHTML = '';
    }
});


