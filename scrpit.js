const counterBtn =(btn) =>{
    let counter = parseFloat(counterTxt.textContent);
    

    // Increase and Decrease counter
    if(btn === "-"){
        counter -= 1    
    }
    else if (btn === "+"){
        counter += 1
    }
    else {
        counter = 0
    }
    counterTxt.textContent = counter;
    // Change counter background
    if (counter < 0) {
        counterTxt.style.backgroundColor = '#F05454';
    }
    else if (counter === 0)  {
        counterTxt.style.backgroundColor = '#00848f';
    }
    else{
        counterTxt.style.backgroundColor = '#7BBEEB';
    }
}
