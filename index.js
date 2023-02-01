const menu = document.querySelector('#menuBttn');
const navbar = document.querySelector('.navbar');
const modalContainer = document.querySelector('.modal-container');
const containerProject = document.querySelector('.work');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
});

document.querySelectorAll('.links').forEach((link) => link.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  menu.classList.remove('active');
}));

// create array

const cardsContainer = [

  {
    id: 0,
    name: 'Tonic',
    titleDescription: [
      'Canopy',
      'Back End Dev',
      '2015',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'unt/tush1.png',
    technologies: [
      'html',
      'css',
      'javascript'],
    liveVersion: '#',
    source: '#',
  },

  {
    id: 1,
    name: 'Multi-Post Stories',
    titleDescription: [
      'Canopy',
      'Back End Dev',
      '2015',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'unt/tush.png',
    technologies: [
      'html',
      'css',
      'javascript'],
    liveVersion: '#',
    source: '#',
  },

  {
    id: 2,
    name: 'Tonic',
    titleDescription: [
      'Canopy',
      'Back End Dev',
      '2015',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'unt/tush3.png',
    technologies: [
      'html',
      'css',
      'javascript'],
    liveVersion: '#',
    source: '#',
  },

  {
    id: 3,
    name: 'Multi-Post Stories',
    titleDescription: [
      'Canopy',
      'Back End Dev',
      '2015',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './unt/Snapshoot Portfolio (3).png',
    technologies: [
      'html',
      'css',
      'javascript'],
    liveVersion: '#',
    source: '#',
  },
];

// create modal

const displayModal = (id) => {
  const displayIdOf = cardsContainer.findIndex((card) => card.id === +id);
  modalContainer.style.display = 'flex';
  overlay.style.display = 'block';
  let html = '';

  html += `<div class= "title-modal">
      <h3 class="heading">${cardsContainer[displayIdOf].name}</h3>
      <button class="close-modal">
        <i class="fas fa-times"></i>
      </button>
      </div>
      <ul class="exper-modal">
          <li class="comp">${cardsContainer[displayIdOf].titleDescription[0]}</li>
          <li class="dot">&#x2022;</li>
          <li class="comp1">${cardsContainer[displayIdOf].titleDescription[1]}</li>
          <li class="dot">&#x2022;</li>
          <li class="comp1">${cardsContainer[displayIdOf].titleDescription[2]}</li>
      </ul>
      <img class="project-image" src="${cardsContainer[displayIdOf].image}">
      <div class='flex-sidebar'>
        <div class=desc>
          <p class="project-description">${cardsContainer[displayIdOf].description}</p>
        </div>
        <div class='side'>
          <ul class="tags-modal">
            <li class="language">${cardsContainer[displayIdOf].technologies[0]}</li>
            <li class="language">${cardsContainer[displayIdOf].technologies[1]}</li>
            <li class="language">${cardsContainer[displayIdOf].technologies[2]}</li>
          </ul>
  
          <div class="btns-modal">
            <div class="btns1">
              <a class="btn-seeLive" href="${cardsContainer[displayIdOf].liveVersion}"> See live </a>
              <i class="fa-regular fa-share-from-square" id="btn-icon"></i>
            </div>
            <div class="btns2">
              <a class="btn-seeSource" href="${cardsContainer[displayIdOf].source}">See source </a>
              <i class="fa-brands fa-github" id="btn-gitIcon"></i>
            </div>
          </div>
        </div>
      </div>`;

  modalContainer.innerHTML = html;

  // for (const card of cardsContainer) {
  //   if (Number(id) === card.id) {
  //     modalContainer.style.display = 'flex';
  //     overlay.style.display = 'block';
  //     let html = '';
  //     html += `
  //   <div class= "title-modal">
  //   <h3 class="heading">${card.name}</h3>
  //   <button class="close-modal">
  //     <i class="fas fa-times"></i>
  //   </button>
  //   </div>
  //   <ul class="exper-modal">
  //       <li class="comp">${card.titleDescription[0]}</li>
  //       <li class="dot">&#x2022;</li>
  //       <li class="comp1">${card.titleDescription[1]}</li>
  //       <li class="dot">&#x2022;</li>
  //       <li class="comp1">${card.titleDescription[2]}</li>
  //   </ul>
  //   <img class="project-image" src="${card.image}">
  //   <div class='flex-sidebar'>
  //     <div class=desc>
  //       <p class="project-description">${card.description}</p>
  //     </div>
  //     <div class='side'>
  //       <ul class="tags-modal">
  //         <li class="language">${card.technologies[0]}</li>
  //         <li class="language">${card.technologies[1]}</li>
  //         <li class="language">${card.technologies[2]}</li>
  //       </ul>

  //       <div class="btns-modal">
  //         <div class="btns1">
  //           <a class="btn-seeLive" href="${card.liveVersion}"> See live </a>
  //           <i class="fa-regular fa-share-from-square" id="btn-icon"></i>
  //         </div>
  //         <div class="btns2">
  //           <a class="btn-seeSource" href="${card.source}">See source </a>
  //           <i class="fa-brands fa-github" id="btn-gitIcon"></i>
  //         </div>
  //       </div>
  //     </div>
  //   </div>`;

  //     modalContainer.innerHTML = html;
  //   }
  // }

  // close modal
  const ModalClose = document.querySelector('.close-modal');

  ModalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.style.display = 'none';
    overlay.style.display = 'none';
  });
};

// display cards

cardsContainer.forEach((card) => {
  const boxCard = document.createElement('div');
  boxCard.className = 'box-card';
  const html = `
  <div class="box-card">
    <div class="image">
      <img class="project-image" src="${card.image}" alt=${card.name}>
    </div>
    <div class="content" id=project-card-details>
      <p class="heading">${card.name}</p>
      <ul class="exper">
        <li class='comp'>${card.titleDescription[0]}</li>
        <li class="dot">&#x2022;</li>
        <li class='comp1'>${card.titleDescription[1]}</li>
        <li class="dot">&#x2022;</li>
        <li class='comp1'>${card.titleDescription[2]}</li>
      </ul>
      <p>${card.description}</p>
      <ul class="tags">
        <li class="language">${card.technologies[0]}</li>
        <li class="language">${card.technologies[1]}</li>
        <li class="language">${card.technologies[2]}</li>
      </ul>
      <button class="btn" id="${card.id}">See project</button>
    </div>
  </div>
  `;
  containerProject.insertAdjacentHTML('afterbegin', html);
});

const btnModal = document.querySelectorAll('.btn');
btnModal.forEach((btn) => btn.addEventListener('click', (e) => {
  const { id } = e.target;
  displayModal(id);
}));
