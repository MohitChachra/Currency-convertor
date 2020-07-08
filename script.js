const currency_buttons = document.getElementById('currency_buttons');
const usdvalue = document.getElementById('usdvalue');
const resultInput = document.getElementById('result');

currency_buttons.addEventListener('click',function(event){
    const button = event.target;
    //console.log(event.target);
    const currencyId = button.getAttribute('data-currencyid');
    //console.log(currencyId);
    if(currencyId === null)
    return;

    if(usdvalue.value === ""){
        alert('input cannnot be empty');
        return;
    }
    convert(currencyId,usdvalue.value);
});

function convert(currencyId, usdvalue){
    fetch(`https://free.currconv.com/api/v7/convert?q=USD_${currencyId}&compact=ultra&apiKey=85ff8c67b5d6241ab26c`)
    .then(function(response){
        return response.json();
    }).then(function(result){
        var rate = result[`USD_${currencyId}`];
        resultInput.value = usdvalue*rate;
        //console.log(result[`USD_${currencyId}`]);
    }).catch(function(err){
        console.log(err);
    })
}