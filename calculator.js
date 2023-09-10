function erase(){
  calculation = '';
  displayCalculation();

  localStorage.setItem('calculation', calculation);
  document.querySelector('.js-calculation').innerHTML = '0';
}

function compute(){
  try{
  calculation = eval(calculation);
  displayCalculation();

  localStorage.setItem('calculation', calculation);
  }
  catch{
    document.querySelector('.js-calculation').innerHTML = 'Syntax Error';
  }
  
}

function updateCalculation(value){
  calculation += value;

  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation(){
  document.querySelector('.js-calculation').innerHTML = calculation;
}


let calculation = localStorage.getItem('calculation') || '';



