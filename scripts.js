let numberDisplay = document.querySelector('.number')
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

let dotContainer = indicator.querySelector('ul');
dotContainer.innerHTML = '';
items.forEach((_, index) => {
    const li = document.createElement('li');
    if (index === active) li.classList.add('active');
    li.addEventListener('click', () => {
        container.querySelector('.list .item.active').classList.remove('active');
        active = index;
        items[active].classList.add('active');
        updateIndicator();
    });
    dotContainer.appendChild(li);
});
dots = dotContainer.querySelectorAll('li');

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    let itemold = container.querySelector('.list .item.active');
    itemold.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add('active');

    updateIndicator();
};

prevButton.onclick = () => {
     list.style.setProperty('--calculation', -1)
    let itemold = container.querySelector('.list .item.active');
    itemold.classList.remove('active');

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active');

    updateIndicator();
};

function updateIndicator() {
    numberDisplay.innerText = (active + 1).toString().padStart(2, '0');

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === active);
    });
}