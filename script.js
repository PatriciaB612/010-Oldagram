const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
]

let render = ''
const mainEl = document.querySelector('main')

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    render += `<section class="profile-info">
                    <img id="avatar-el" class="avatar" src="${posts[i].avatar}" alt=${posts[i].name}>
                    <div class="profile-details">
                        <h3 id="name-el">${posts[i].name}</h3>
                        <p id="location-el">${posts[i].location}</p>
                    </div>
                </section>
                <section class="user-post">
                    <img id="post-el" class="post-image" src="${posts[i].post}">
                </section>
                <section class="post-info">
                    <div class="icons-container">
                        <img class="icon" src="images/icon-heart.png">
                        <img class="icon" src="images/icon-comment.png">
                        <img class="icon" src="images/icon-dm.png">
                    </div>
                        <h3 id="likes-el">${posts[i].likes} likes</h3>
                    <div class="comment-container">
                        <h3 id="username-el">${posts[i].username}</h3>
                        <p id="comment-el">${posts[i].comment}</p>
                    </div>
                </section>`
  }
  mainEl.innerHTML = render
}

renderPosts()

let postEl = document.getElementById('post-el')

postEl.addEventListener('dblclick', function () {
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].likes + 1)
  }
})
