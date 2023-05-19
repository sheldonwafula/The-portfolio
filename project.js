const works = document.querySelector('.work-section');
const showDetails = document.querySelector('.popup-window')
const blur = document.getElementById('blur');
const close = document.querySelector('.close');
const Ptitle = document.querySelector('.title');
const Pcanop = document.querySelector('.canop');
const Pstack1 = document.querySelector('.stack1');
const Pstack2 = document.querySelector('.stack2');
const pic = document.querySelector('.detail-pic');
const desc = document.querySelector('.description');
const Ptag = document.querySelector('.tag');
const Plive = document.querySelector('.live');
const Psource = document.querySelector('.source');
const popup = [
  {
    id: 0,
    title: "Tonic",
    Organization: "CANOPY",
    Stack: ["Back End Dev", "2015"],
    image: "images/first.png",
    Description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    Technologies: ["HTML", "CSS", "JavaScript"],
    seeLive: "https://sheldonwafula.github.io/The-portfolio/",
    seeSource: "https://github.com/sheldonwafula/The-portfolio",
  },
  {
    id: 1,
    title: "Multi-Post Stories",
    Organization: "Canopy",
    Stack: ["Back End", "2015"],
    image: "images/second.png",
    Description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    Technologies: ["HTML", "CSS", "JavaScript"],
    seeLive: "https://sheldonwafula.github.io/The-portfolio/",
    seeSource: "https://github.com/sheldonwafula/The-portfolio",
  },
  {
    id: 2,
    title: "Tonic",
    Organization: "Canopy",
    Stack: ["Back End", "2015"],
    image: "images/Snapshoot Portfolio.png",
    Description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    Technologies: ["HTML", "CSS", "JavaScript"],
    seeLive: "https://sheldonwafula.github.io/The-portfolio/",
    seeSource: "https://github.com/sheldonwafula/The-portfolio",
  },
  {
    id: 3,
    title: "Multi-Post Stories",
    Organization: "CANOPY",
    Stack: ["Back End Dev", "2015"],
    image: "images/fourth.png",
    Description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    Technologies: ["HTML", "CSS", "JavaScript"],
    seeLive: "https://sheldonwafula.github.io/The-portfolio/",
    seeSource: "https://github.com/sheldonwafula/The-portfolio",
  },
];

popup.forEach((popups) => {
  works.innerHTML += `
    <div class="card-section" id='${popups.id}'>
    <img src="${popups.image}" class="profile" />
    <div class="ton-section">
      <h2 class="ton">${popups.title}</h2>
      <ul class="canopy">
        <li class="cano">${popups.Organization}</li>
        <li><img src="images/Counter.png" /></li>
        <li>${popups.Stack[0]}</li>
        <li><img src="images/Counter.png" /></li>
        <li>${popups.Stack[1]}</li>
      </ul>
      <p>${popups.Description}</p>
      <ul class="tech">
        ${popups.Technologies.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
      <button type="button" id=${popups.id} class="seep">See Project</button>
    </div>
  </div>
    `;
});

const seeDetails = document.querySelectorAll('.seep');

function showPop(Id) {
  Ptitle.textContent = popup[Id].title;
  Pcanop.textContent = popup[Id].Organization;
  Pstack1.innerHTML = popup[Id].Stack[0];
  Pstack2.innerHTML = popup[Id].Stack[1];
  pic.src = popup[Id].image;
  desc.textContent = popup[Id].Description;
  Ptag.innerHTML = popup[Id].Technologies.map((tech) => `<li>${tech}</li>`).join('');
  Plive.href = popup[Id].seeLive;
  Psource.href = popup[Id].seeSource;
  blur.classList.toggle('active');
  showDetails.classList.toggle('active');
}

seeDetails.forEach((button) => button.addEventListener('click', () => {
  showPop(Number(button.id));
  
}));

close.addEventListener('click', () => {
  blur.classList.toggle('active');
  showDetails.classList.toggle('active');
})
