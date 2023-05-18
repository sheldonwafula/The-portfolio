const hambger = document.querySelector('#nav-menus');
const menu = document.querySelector('#menu-icon');
const closex = document.querySelector('.menu');
const list = document.querySelectorAll('.items');
const mode = document.querySelector('.all');

hambger.addEventListener('click', () => {
  hambger.classList.add('hide');
  menu.classList.add('show');
});

closex.addEventListener('click', () => {
  hambger.classList.remove('hide');
  menu.classList.remove('show');
});

Array.from(list).forEach((item)=>{
  item.addEventListener('click', () => {
    hambger.classList.remove('hide');
    menu.classList.remove('show');
  }); 
})
// popup window
 const popup = [
  {
    id: 1,
    title: 'Tonic',
    Organization:'Canopy',
    Stack: ['Back End','2015'],
    image: 'images/first.png',
    Discription: 'loremipsum',
    Technologies:['HTML' ,'CSS' , 'JavaScript'],
    seeLive:'btn',
    seeSource:'button'

  }
  ,
  {
    id: 2,
    title: 'Tonic',
    Organization:'Canopy',
    Stack: ['Back End','2015'],
    image: 'images/first.png',
    Discription: 'loremipsum',
    Technologies:['HTML' ,'CSS' , 'JavaScript'],
    seeLive:'btn',
    seeSource:'button'

  }
  ,
  {
    id: 3,
    title: 'Tonic',
    Organization:'Canopy',
    Stack: ['Back End','2015'],
    image: 'images/first.png',
    Discription: 'loremipsum',
    Technologies:['HTML' ,'CSS' , 'JavaScript'],
    seeLive:'btn',
    seeSource:'button'

  }
  ,
  {
    id: 4,
    title: 'Tonic',
    Organization:'Canopy',
    Stack: ['Back End','2015'],
    image: 'images/first.png',
    Discription: 'loremipsum',
    Technologies:['HTML' ,'CSS' , 'JavaScript'],
    seeLive:'btn',
    seeSource:'button'

  }
]

mode.addEventListener('click', (e) => {
    const container=document.querySelector('.work-section');
    popup.map((project)=>{
     
      const card=document.createElement('div');
      card.classList.add('card-section');
      const image=document.createElement('img');
      image.classList.add('profile');
      image.src=project.image;
      card.appendChild(image);
      
      container.appendChild(card);
    })
  });
