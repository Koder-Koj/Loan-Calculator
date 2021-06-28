

'use strict';

let btn = document.querySelector('.btn');


btn.addEventListener('click', function () {
    const loan = document.querySelector('#loan').value;


    // Interest Calculation:
    const interest = loan * 0.03;
    document.querySelector('#interest').value = interest;

    // Mortgage Payment:
    const amortization = document.querySelector('#amortization').value;
    const frequency = document.querySelector('#frequency').value;
    // const frequencyOption = document.querySelector('.frequency_monthly');
    // const frequencyCalc = function () {
    //     if (frequency === 'monthly') {
    //         frequency = '';
    //         document.querySelector('select frequency_monthly').textContent = '12';
    //         // frequencyOption.removeAttribute('value', 'monthly');
    //         // frequencyOption.setAttribute('value', '12');
    //     };
    //     console.log(typeof (frequencyCalc));

    // };


    const time = Number(amortization) * Number(function ());
    console.log(typeof (time));
    console.log(time);
    const rate = 0.03;


    const mortgage = function () {

        const top = rate * ((1 + rate) ** time);
        const bottom = ((1 + rate) ** time) - 1;
        return loan * (Number(top) / Number(bottom));
    }

    console.log(typeof (mortgage()));

    const mortgagePayment = mortgage();

    document.querySelector('#payment').value = mortgagePayment.toFixed(2);
})


