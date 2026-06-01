const loadPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayPosts(data)
        })
}

const displayPosts = (posts) =>{
    //1. get the container and also empty
    const postsContainer = document.getElementById('postscontainer')
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        //2. create element
        const li = document.createElement("li");
        li.innerText = post.title;

        //add the child into the parent container
        postsContainer.appendChild(li)
    })
}


