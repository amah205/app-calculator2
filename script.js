'use script';
/*const randomInt =(min,max) => Math.floor(Math.random() * (max-min) + 1) +min;

console.log(randomInt(10,15))

// Rounding Integers
// console.log(Math.trunc(23.3));

//  console.log(Math.round(23.3));
//  console.log(Math.round(23.9));

//  console.log(Math.ceil(23.1));
//  console.log(Math.ceil(23.9));

// console.log(Math.floor(-23.3));
// console.log(Math.floor(23.9));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2))

// Remainder Operator
console.log(5 % 2);
console.log(5/2)

// Date
const now = new Date();
console.log(now)
console.log(new Date('26 august, 1999'))

const future=new Date(2037,10,19,15,23);
console.log(future);
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString())

// Finding Timestamp from d variable
console.log(future.getTime());
console.log(new Date(2142285780000));

// Getting Timestamp

console.log(Date.now());
console.log(new Date(1729247478036))*/

// Select d output elements
const output_year=document.querySelector('.output-year');
const output_month=document.querySelector('.output-month');
const output_day=document.querySelector('.output-day');
const submit_btn=document.querySelector('.submit-btn');

// Select d input Elemt

let isValidElement=false;
// let showUp=false;

const input_year=document.querySelector('#year');
const input_month=document.querySelector('#month');
const input_day=document.querySelector('#day');
// const submit_btn=document.querySelector('.submit-btn');

// Selecting Error Element
const error_year=document.querySelector('.error-year');
const error_month=document.querySelector('.error-month');
const error_day=document.querySelector('.error-day');

submit_btn.addEventListener('click',calculateDate);
input_day.addEventListener('input',(e)=>{
    e.preventDefault()
    console.log(e.target)
    if(+input_day.value >31){
        error_day.textContent='must be a valid date';
        isValidElement=false;
        return;
    }else{
        error_day.textContent='';
        isValidElement=true
    }

    if(+input_day.value === 0 ){
        isValidElement = false;
        error_day.textContent='This field is Required';
        return;
    }else{
        error_day.textContent='';

    }

    
})
input_day.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target)
    input_day.focus();
    error_day.textContent='figure Required'
})



// month
input_month.addEventListener('input',(e)=>{
    e.preventDefault()
    console.log(e.target)
    if(+input_month.value >12){
        error_month.textContent='must be a valid date';
        isValidElement=false;
        return;
    }else{
        error_month.textContent='';
        isValidElement=true
    }

    if(+input_month.value === 0 ){
        isValidElement = false;
        error_month.textContent='This field is Required';
        return;
    }else{
        error_month.textContent='';

    }

})
input_month.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target)
    input_month.focus();
    error_month.textContent='figure Required'
})


// Year
input_year.addEventListener('input',(e)=>{
    e.preventDefault()
    console.log(e.target)
    if(+input_year.value >2023){
        error_year.textContent='must be a valid date';
        isValidElement=false;
        return;
    }else{
        error_year.textContent='';
        isValidElement=true
    }

    if(+input_year.value === 0 ){
        isValidElement = false;
        error_year.textContent='This field is Required';
        return;
    }else{
        error_year.textContent='';

    }

})
let show=false;
input_year.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target)
     input_year.focus();
     error_year.textContent='figure Required'
    
})

function calculateDate(){
    if(isValidElement){
        let birthDate=`${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthDate);
        let birthDateObj=new Date(birthDate);
        console.log(birthDateObj)
        let ageDiff =Date.now() -birthDateObj
        console.log(ageDiff)
        let ageDate = new Date(ageDiff);
        console.log(ageDate)
        let ageYear =ageDate.getUTCFullYear()-1970;
        console.log(ageYear)
        let ageMonth =ageDate.getUTCMonth();
        let ageDay =ageDate.getUTCDay() -1;
        output_day.textContent=ageDay;
        output_month.textContent=ageMonth;
        output_year.textContent=ageYear;
    }else{
         alert('error')
    

    }
}