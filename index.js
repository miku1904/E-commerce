var product_total_amt = document.getElementById('product_total_amt')
var shipping_charge = document.getElementById('shipping_charge')
var total_cart_amt = document.getElementById('total_cart_amt')
var discountcode = document.getElementById('discount_code1')

const decreseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec)
    var itemprice = document.getElementById(itemprice)
    // console.log(itemval.value)

    if(itemval.value <= 0){
        itemval.value = 0;
    }else{
        itemval.value = parseInt(itemval.value) -1 ;  
        itemval.style.background = '#fff';
        itemval.style.color = '#000'
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}


const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec)
    var itemprice = document.getElementById(itemprice)
    // console.log(itemval.value)

    if (itemval.value >= 5) {
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background = 'red';
        itemval.style.color = '#fff'
    } else {
        itemval.value = parseInt(itemval.value) +1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) +15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}


const discount_code = () => {
    let totalamtcurr = parseInt(total_cart_amt.innerHTML)
    let error_trw = document.getElementById('error_trw')
    if (discountcode.value === 'thapa'){
        let newtotalamt = totalamtcurr -15; 
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML = "congratulation"

    }else{
        error_trw.innerHTML = "try again valid code"

    }
}