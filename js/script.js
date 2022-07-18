let tabsNav = document.querySelector('.tabs-nav');
let tabs = document.querySelectorAll('.tabs-nav li');
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');
let questions = document.querySelectorAll('.questions > div'); 
let answer = document.querySelectorAll('.answer');

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

for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', displayAnswer);
}

let arrow = document.querySelectorAll('.arrow');
let arrowColor = document.querySelectorAll('.arrow path')

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

