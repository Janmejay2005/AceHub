// Sample posts data with unique authors, titles, and bodies
const posts = [
  {
    author: "PRATAP KUMAR SINGH",
    avatar: "PKS",
    date: "3 days ago",
    read: "3 min read",
    title: "Building Your First Startup: Lessons from IIT Patna",
    body: "Discover how students at IIT Patna are turning ideas into startups, facing challenges, and building innovative solutions for real-world problems.",
    likes: 15,
    views: 40
  },
  {
    author: "Amit Verma",
    avatar: "AV",
    date: "2 days ago",
    read: "4 min read",
    title: "Innovation at Campus: The Ideation Workshop Experience",
    body: "The Ideation Workshop at our campus was a vibrant and transformative event, designed to ignite creativity and foster a culture of innovation among students and faculty. By bringing together diverse minds in a collaborative environment, the workshop offered participants a unique opportunity to explore the process of ideation—generating, developing, and communicating new ideas for real-world challenges.",
    likes: 10,
    views: 30
  },
  {
    author: "Sneha Gupta",
    avatar: "SG",
    date: "1 day ago",
    read: "2 min read",
    title: "From Idea to MVP: A Student’s Journey",
    body: "The journey from a simple idea to a Minimum Viable Product (MVP) is both challenging and rewarding, especially for students stepping into the world of innovation and entrepreneurship. This collage captures the essence of that journey, highlighting the key milestones, struggles, and triumphs experienced by students as they transform their concepts into tangible solutions.
",
    likes: 18,
    views: 25
  },
  {
    author: "Jay Kumar",
    avatar: "JK",
    date: "5 hours ago",
    read: "5 min read",
    title: "Overcoming Startup Challenges in College",
    body: "Starting a business while studying was tougher than I imagined, but it taught me so much about time management and persistence,Balancing classes and startup tasks was a daily challenge, but I learned to prioritize and stay organized.
",
    likes: 8,
    views: 22
  },
  {
    author: "Janmejay Singh",
    avatar: "JS",
    date: "just now",
    read: "3 min read",
    title: "Startup Networking: Building Connections at IIT Patna",
    body: "Being a part of the startup networking scene at IIT Patna has been an eye-opening experience for us. From attending E-Summit events to joining interactive sessions at the Incubation Centre, we’ve had countless opportunities to connect with founders, investors, and industry leaders. These events aren’t just about exchanging business cards—they’re about building real relationships and learning from each other’s journeys.


",
    likes: 20,
    views: 50
  }
];

function renderPosts() {
  document.getElementById('postsGrid').innerHTML = posts.map(post => `
    <div class="blog-card">
      <div class="blog-header">
        <span class="avatar">${post.avatar}</span>
        <span class="blog-meta">
          ${post.author} &nbsp; • &nbsp; ${post.date} &nbsp; • &nbsp; ${post.read}
        </span>
      </div>
      <div class="blog-title">${post.title}</div>
      <div class="blog-body">${post.body}</div>
      <div class="blog-footer">
        <span class="likes">💜 ${post.likes}</span>
        <span class="views">👁️ ${post.views}</span>
      </div>
    </div>
  `).join('');
}

renderPosts();
