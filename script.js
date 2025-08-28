function increaseCounts(className, idName) {
    let counts = document.getElementsByClassName(className);

    for (let index = 0; index < counts.length; index++) {
        counts[index].addEventListener('click', function() {
            let count = Number(document.getElementById(idName).innerText);
            let totalCounts = count + 1;
            document.getElementById(idName).innerText = totalCounts;
        })
    }
    return document.getElementById(idName).innerText;
}

increaseCounts('heart-icon', 'count-hearts');

let calls = document.getElementsByClassName('call-btn');
for (let index = 0; index < calls.length; index++) {
    calls[index].addEventListener('click', function() {

        let countCoins = Number(document.getElementById('count-coins').innerText);
        let totalCoins = countCoins - 20;

        if (countCoins < 20) {
            alert("You don't have enough coins for calling.");

        }
        else {
            let serviceName = calls[index].parentNode.parentNode.childNodes[3].innerText;
            let serviceNumber = calls[index].parentNode.parentNode.childNodes[7].innerText;
            alert(`Calling ${serviceName} ${serviceNumber}...`);

            document.getElementById('count-coins').innerText = totalCoins;

            let div = document.createElement('div');
            div.innerHTML = `<div class="flex p-4 items-center justify-between bg-[#fafafa] mb-2">
                    <div>
                       <h1 id="selected-option" class="font-[600] text-[18px]/[22px] max-w-[215px] mb-1">${serviceName}</h1>
                       <h1 id="selected-number" class="text-[18px] text-[#5c5c5c]">${serviceNumber}</h1>
                   </div>
                   <h1 id="selection-time" class="text-[#111111] text-[18px] font-[400]">${new Date().toLocaleTimeString()}</h1>
                </div>`
            document.getElementById('calls-cards-container').append(div);
        }
    })
}

document.getElementById('clear-btn').addEventListener('click', function() {
   document.getElementById('calls-cards-container').innerHTML = ``;
})

let copies = document.getElementsByClassName('copy-btn');
for (let index = 0; index < copies.length; index++) {
    copies[index].addEventListener('click', function() {
        alert('Hotline number copied to clipboard')
        let hotlineNumber = copies[index].parentNode.parentNode.childNodes[7].innerText;
        navigator.clipboard.writeText(hotlineNumber);
    })
}

increaseCounts('copy-btn', 'count-copies');

document.getElementById('clear-btn').addEventListener('mouseenter', function() {
    
})