const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let nameEl = document.getElementById("name-el")
let usernameEl = document.getElementById("username-el")
let locationEl = document.getElementById("location-el")
let avatarEl = document.getElementById("avatar-el")
let postEl = document.getElementById("post-el")
let commentEl = document.getElementById("comment-el")
let likesEl = document.getElementById("likes-el")

for (i = 0; i < posts.length; i++){
    nameEl.textContent = posts[i].name;
    locationEl.textContent = posts[i].location;
    
}

console.log(nameEl.textContent)

