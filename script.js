// Document Objects
const bill = document.getElementById("bill");
const numberPeople = document.getElementById("number_people");
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const select4 = document.getElementById("select4");
const select5 = document.getElementById("select5");
const select6 = document.getElementById("select6");
const amount = document.getElementById("amount");
const total = document.getElementById("total");
const errbill = document.getElementById("errbill");
const errnum = document.getElementById("errnum");
const btnCompleted = document.querySelector("#btn-completed");

// For Mobile documents
const select1m = document.getElementById("select1m");
const select2m = document.getElementById("select2m");
const select3m = document.getElementById("select3m");
const select4m = document.getElementById("select4m");
const select5m = document.getElementById("select5m");
const select6m = document.getElementById("select6m");

// 5% Button
select1.addEventListener("click", getinput);
select1m.addEventListener("click", getinput);
function getinput(){
    const usbill = bill.value;
    const usnumberPeople = numberPeople.value;
    const usselect1 = select1.value;

    bill.style.borderColor ='hsl(0, 0%, 86%)'
    numberPeople.style.borderColor ='hsl(0, 0%, 86%)'

    errbill.innerHTML ='';
    errnum.innerHTML ='';
    
    if(usbill==''){
        errbill.innerHTML ="Can't be 0";
        bill.style.borderColor = 'crimson'
        errbill.style.color = "crimson"
    }
    if(usnumberPeople==''){
        errnum.innerHTML ="Can't be 0";
        numberPeople.style.borderColor = 'crimson'
        errnum.style.color = 'crimson'
    }
    else{
        const abill = usbill * usselect1 / usnumberPeople;
        const addition = usbill / abill;
        const abill2 = + addition;
        amount.innerHTML = "$" + abill.toFixed(2);
        total.innerHTML = "$" + abill2.toFixed(2);
    }   
}

// 10% Button
select2.addEventListener("click", getinput1);
select2m.addEventListener("click", getinput1);
function getinput1(){
    const usbill = bill.value;
    const usnumberPeople = numberPeople.value;
    const usselect2 = select2.value;

    bill.style.borderColor ='hsl(0, 0%, 86%)'
    numberPeople.style.borderColor ='hsl(0, 0%, 86%)'

    errbill.innerHTML ='';
    errnum.innerHTML ='';
    
    if(usbill==''){
        errbill.innerHTML ="Can't be 0";
        bill.style.borderColor = 'crimson'
        errbill.style.color = "crimson"
    }
    if(usnumberPeople==''){
        errnum.innerHTML ="Can't be 0";
        numberPeople.style.borderColor = 'crimson'
        errnum.style.color = 'crimson'
    }
    else{
        const abill = usbill * usselect2 / usnumberPeople;
        const addition = usbill / abill;
        const abill2 = + addition;
        amount.innerHTML = "$" + abill.toFixed(2);
        total.innerHTML = "$" + abill2.toFixed(2);
    }   
}

// 15% Button
select3.addEventListener("click", getinput2);
select3m.addEventListener("click", getinput2);
function getinput2(){
    const usbill = bill.value;
    const usnumberPeople = numberPeople.value;
    const usselect3 = select3.value;

    bill.style.borderColor ='hsl(0, 0%, 86%)'
    numberPeople.style.borderColor ='hsl(0, 0%, 86%)'

    errbill.innerHTML ='';
    errnum.innerHTML ='';
    
    if(usbill==''){
        errbill.innerHTML ="Can't be 0";
        bill.style.borderColor = 'crimson'
        errbill.style.color = "crimson"
    }
    if(usnumberPeople==''){
        errnum.innerHTML ="Can't be 0";
        numberPeople.style.borderColor = 'crimson'
        errnum.style.color = 'crimson'
    }
    else{
        const abill = usbill * usselect3 / usnumberPeople;
        const addition = usbill / abill;
        const abill2 = + addition;
        amount.innerHTML = "$" + abill.toFixed(2);
        total.innerHTML = "$" + abill2.toFixed(2);
    }   
}

// 25% Button
select4.addEventListener("click", getinput3);
select4m.addEventListener("click", getinput3);
function getinput3(){
    const usbill = bill.value;
    const usnumberPeople = numberPeople.value;
    const usselect4 = select4.value;

    bill.style.borderColor ='hsl(0, 0%, 86%)'
    numberPeople.style.borderColor ='hsl(0, 0%, 86%)'

    errbill.innerHTML ='';
    errnum.innerHTML ='';
    
    if(usbill==''){
        errbill.innerHTML ="Can't be 0";
        bill.style.borderColor = 'crimson'
        errbill.style.color = "crimson"
    }
    if(usnumberPeople==''){
        errnum.innerHTML ="Can't be 0";
        numberPeople.style.borderColor = 'crimson'
        errnum.style.color = 'crimson'
    }
    else{
        const abill = usbill * usselect4 / usnumberPeople;
        const addition = usbill / abill;
        const abill2 = + addition;
        amount.innerHTML = "$" + abill.toFixed(2);
        total.innerHTML = "$" + abill2.toFixed(2);
    }   
}

// 50% Button
select5.addEventListener("click", getinput4);
select5m.addEventListener("click", getinput4);
function getinput4(){
    const usbill = bill.value;
    const usnumberPeople = numberPeople.value;
    const usselect5 = select5.value;

    bill.style.borderColor ='hsl(0, 0%, 86%)'
    numberPeople.style.borderColor ='hsl(0, 0%, 86%)'

    errbill.innerHTML ='';
    errnum.innerHTML ='';
    
    if(usbill==''){
        errbill.innerHTML ="Can't be 0";
        bill.style.borderColor = 'crimson'
        errbill.style.color = "crimson"
    }
    if(usnumberPeople==''){
        errnum.innerHTML ="Can't be 0";
        numberPeople.style.borderColor = 'crimson'
        errnum.style.color = 'crimson'
    }
    else{
        const abill = usbill * usselect5 / usnumberPeople;
        const addition = usbill / abill;
        const abill2 = + addition;
        amount.innerHTML = "$" + abill.toFixed(2);
        total.innerHTML = "$" + abill2.toFixed(2);
    }   
}

// Custom Button
select6.addEventListener("input", getinput5);
select6m.addEventListener("input", getinput5);
function getinput5(){
    const usbill = bill.value;
    const usnumberPeople = numberPeople.value;
    const usselect6 = select6.value / 100;

    bill.style.borderColor ='hsl(0, 0%, 86%)'
    numberPeople.style.borderColor ='hsl(0, 0%, 86%)'

    errbill.innerHTML ='';
    errnum.innerHTML ='';
    
    if(usbill==''){
        errbill.innerHTML ="Can't be 0";
        bill.style.borderColor = 'crimson'
        errbill.style.color = "crimson"
    }
    if(usnumberPeople==''){
        errnum.innerHTML ="Can't be 0";
        numberPeople.style.borderColor = 'crimson'
        errnum.style.color = 'crimson'
    }
    else{
        const abill = usbill * usselect6 / usnumberPeople;
        const addition = usbill / abill;
        const abill2 = + addition;
        amount.innerHTML = "$" + abill.toFixed(2);
        total.innerHTML = "$" + abill2.toFixed(2);
    }   
}

btnCompleted.addEventListener("click", (e) => {
    if (e.target.id === "btn-completed") {
      e.preventDefault();
      resetForm();
    }
  });

  const resetForm = () => {
    //
    // Reset All Inputs
    bill.value = "";
    numberPeople.value = "";
    select6.value = "";
    select6m.value = "";
  };