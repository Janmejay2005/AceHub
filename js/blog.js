// Sample posts data
const posts = Array.from({length: 12}, (_, i) => ({
  author: "ACEHUB",
  avatar: "A",
  date: "3 days ago",
  read: "3 min read",
  title: `"HOW TO IDEATE A STARTUP" - JAY IIT STUDENT ASSISTED IN THE AUDITORIUM OF IIT PATNA SENATE HALL`,
  body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  likes: 12,
  views: 12
}));

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
