
// Blog slider logic
const blogs = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "RISHU KUMAR SINGH",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    meta: "1 year ago"
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "SNEHA KUMARI SINGH",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    meta: "1 year ago"
  },
  {
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "BHAWATI KUMARI SINGH",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    meta: "1 year ago"
  }
];

let blogIndex = 0;
function renderBlogs() {
  const cards = [];
  for (let i = 0; i < 3; i++) {
    const idx = (blogIndex + i) % blogs.length;
    const b = blogs[idx];
    cards.push(`
      <div class="card">
        <img src="${b.img}" alt="${b.name}" />
        <h3>${b.name}</h3>
        <p>${b.text}</p>
        <div class="blog-meta">${b.meta}</div>
      </div>
    `);
  }
  document.getElementById('blogCards').innerHTML = cards.join('');
}
function slideBlogs(dir) {
  blogIndex = (blogIndex + dir + blogs.length) % blogs.length;
  renderBlogs();
}
renderBlogs();



// Games slider logic
const games = [
  {
    img: "https://img.icons8.com/color/96/000000/hill-climb-racing.png",
    name: "HILL CLIMB RACING"
  },
  {
    img: "https://img.icons8.com/color/96/000000/subway-surfers.png",
    name: "SUBWAY SURFERS"
  },
  {
    img: "https://img.icons8.com/color/96/000000/driving.png",
    name: "DR. DRIVING"
  }
];
let gameIndex = 0;
function renderGames() {
  const cards = [];
  for (let i = 0; i < 3; i++) {
    const idx = (gameIndex + i) % games.length;
    const g = games[idx];
    cards.push(`
      <div class="game-card">
        <img src="${g.img}" alt="${g.name}">
        <h4>${g.name}</h4>
      </div>
    `);
  }
  document.getElementById('gameCards').innerHTML = cards.join('');
}
function slideGames(dir) {
  gameIndex = (gameIndex + dir + games.length) % games.length;
  renderGames();
}
renderGames();

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for contacting ACEHUB!');
  this.reset();
});
