// Sample posts data with unique authors, titles, and bodies
const posts = [
  {
    author: "Riya Sharma",
    avatar: "R",
    date: "3 days ago",
    read: "3 min read",
    title: "Building Your First Startup: Lessons from IIT Patna",
    body: "Discover how students at IIT Patna are turning ideas into startups, facing challenges, and building innovative solutions for real-world problems.",
    likes: 15,
    views: 40
  },
  {
    author: "Amit Verma",
    avatar: "A",
    date: "2 days ago",
    read: "4 min read",
    title: "Innovation at Campus: The Ideation Workshop Experience",
    body: "Amit shares his experience attending a hands-on ideation workshop, highlighting key takeaways and the importance of creative thinking in entrepreneurship.",
    likes: 10,
    views: 30
  },
  {
    author: "Sneha Gupta",
    avatar: "S",
    date: "1 day ago",
    read: "2 min read",
    title: "From Idea to MVP: A Student’s Journey",
    body: "Sneha describes her journey from brainstorming a business idea to developing a minimum viable product, emphasizing the learning process.",
    likes: 18,
    views: 25
  },
  {
    author: "Jay Kumar",
    avatar: "J",
    date: "5 hours ago",
    read: "5 min read",
    title: "Overcoming Startup Challenges in College",
    body: "Jay discusses the common obstacles faced by student entrepreneurs and shares tips on balancing academics with startup ambitions.",
    likes: 8,
    views: 22
  },
  {
    author: "Priya Singh",
    avatar: "P",
    date: "just now",
    read: "3 min read",
    title: "Startup Networking: Building Connections at IIT Patna",
    body: "Priya highlights the value of networking events and how connecting with mentors and peers has accelerated her startup journey.",
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
