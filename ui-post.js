const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayPost(data)
        })
}


// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

const displayPost = (posts) => {
    // console.log(posts)
    posts.forEach(post => {
        //1. get parent container
        console.log(post)
        const postContainer = document.getElementById("post-container");
        // postContainer.innerHTML = "";

        //2. create element 
        const div = document.createElement("div");
        div.innerHTML = `
              <div class="post-card">
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        </div>
        `

        //3. add child into the parent container
        postContainer.appendChild(div)
    })
}


// loadPost()