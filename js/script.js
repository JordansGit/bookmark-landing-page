//let tabsNav = document.querySelector('.tabs-nav');   deleted this as it's not being used  
let tabs = document.querySelectorAll('.tabs-nav li');
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');

let questions = document.querySelectorAll('.questions > div'); 
let answer = document.querySelectorAll('.answer');
let arrow = document.querySelectorAll('.arrow');
let arrowColor = document.querySelectorAll('.arrow path')


// tabbed section
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', displayTab); 
}

function displayTab(e) {
  // remove active class on all tabs li 
  tabs.forEach(tab => tab.classList.remove('active'));

  // add active class to current tab li
  this.classList.add('active');

  // display tabbed content
  if (tabs[0].classList.contains('active')) {
    tab1.style.display = 'flex';
    tab2.style.display = 'none';
    tab3.style.display = 'none';
  } else if (tabs[1].classList.contains('active')) {
    tab1.style.display = 'none';
    tab2.style.display = 'flex';
    tab3.style.display = 'none';
  } else if (tabs[2].classList.contains('active')) {
    tab1.style.display = 'none';
    tab2.style.display = 'none';
    tab3.style.display = 'flex';
  }  
}


// faq section 
for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', displayAnswer);
}

function displayAnswer(e) {
  let currAnswer = e.currentTarget.querySelector('.answer');
  let currArrow = e.currentTarget.querySelector('.question .arrow');
  let currArrowColor = e.currentTarget.querySelector('.question .arrow path');
  console.log(e.currentTarget);
  console.log(arrow);
  console.log(arrowColor);
  console.log(currArrowColor);

  // hide all answers, except for currently selected answer
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] != currAnswer) {
      answer[i].style.display = 'none';
      arrow[i].style.transform = 'rotate(0deg)';
      arrowColor[i].style.stroke = 'var(--arrow-blue)';
    }
  }

  // display current answer or, hide it if it's already selected. 
  if (currAnswer.style.display === 'flex') {
    currAnswer.style.display = 'none';
    currArrow.style.transform = 'rotate(0deg)';
    currArrowColor.style.stroke = 'var(--arrow-blue)';

  } else {
    currAnswer.style.display = 'flex';
    currArrow.style.transform = 'rotate(180deg)';
    currArrowColor.style.stroke = 'var(--soft-red)';
  }
}


// form validation 
let form = document.querySelector('form');
let emailContainer = document.querySelector('.email-container');
let email = document.getElementById('email');
let errorIcon = document.querySelector('.error-icon');
let errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkEmail();
});

// function to check if email input is empty. 
const isRequired = function(value) {
  if (value == '') {
    value = false;
  } else {
    value = true;
  }  
  return value;  
}; 

// function to check if email has a valid input. i.e. xyz@domain.net. 
const isEmailValid = (x) => {
  const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormat.test(x);
};

// return true if email is provided and it's valid. + show error msg if it returns false. 
const checkEmail = () => {
  let valid = false;
  const x = email.value.trim();
  
  if (!isRequired(x) || !isEmailValid(x)) {
    errorMsg.style.display = 'block'; 
    errorIcon.style.display = 'block'; 
    emailContainer.style.background = 'var(--soft-red)';
    email.style.border = '2px solid var(--soft-red)';
  } else {
    errorMsg.style.display = 'none';  
    errorIcon.style.display = 'none'; 
    emailContainer.style.background = 'var(--soft-blue)';
    email.style.border = '2px solid var(--soft-blue)';
    valid = true;
  }
  return valid;
}
