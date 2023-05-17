const hambger = document.querySelector('#nav-menus');
const menu = document.querySelector('#menu-icon');
const closex = document.querySelector('.menu');
const list = document.querySelectorAll('.items');

hambger.addEventListener('click', () => {
  hambger.classList.add('hide');
  menu.classList.add('show');
});

closex.addEventListener('click', () => {
  hambger.classList.remove('hide');
  menu.classList.remove('show');
});

list.addEventListener('click', () => {
  hambger.classList.remove('hide');
  menu.classList.remove('show');
});
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
const container=document.querySelector('#main-container');
popup.map((project)=>{
  const card=document.createElement('div');
  card.classList.add('card-section');
  const image=document.createElement('img');
  image.classList.add('profile');
  image.src=project.image;
  card.appendChild(image);
  container.appendChild(card);
})
// popup.forEach((project) => {
//   container.innerHTML += `
//   <div class="card-section" id="${project.id}">

//                 <img src="${project.image}" class="profile">
              

//                 <div class="ton-section">
//                     <h2 class="ton">Tonic</h2>
//                     <ul class="canopy">
//                         <li class="cano">CANOPY</li>
//                         <li><img src="images/Counter.png"></li>
//                         <li>Back End Dev</li>
//                         <li><img src="images/Counter.png"></li>
//                         <li>2015</li>
                        
//                     </ul>
    
//                     <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    
//                     <ul class="tech">
//                         <li>HTML</li>
//                         <li>CSS</li>
//                         <li>JavaScript</li>
//                     </ul>
//                     <div id="buttn" >
//                     <a href="#" >See Project</a>
//                 </div>
//                 </div>
               
        
//             </div>
//   `
// })