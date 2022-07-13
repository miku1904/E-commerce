const decreseNumber = (incdec) => {
    var itemval = document.getElementById(incdec)
    // console.log(itemval.value)

    if(itemval.value <= 0){
        itemval.value = 0;
    }else{
        itemval.value = parseInt(itemval.value) -1 ;  
        itemval.style.background = '#fff';
        itemval.style.color = '#000'
    }
}


const increaseNumber = (incdec) => {
    var itemval = document.getElementById(incdec)
    // console.log(itemval.value)

    if (itemval.value >= 5) {
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background = 'red';
        itemval.style.color = '#fff'
    } else {
        itemval.value = parseInt(itemval.value) +1;
    }
}