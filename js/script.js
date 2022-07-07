let tabsNav = document.querySelector('.tabs-nav');
let tabs = document.querySelectorAll('.tabs-nav li');
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');


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