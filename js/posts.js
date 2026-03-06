//connect with Promise of JSON
const loadPosts = () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayPosts(data);
    })
};

const displayPosts = (posts) => {
    // for(let i=0; i<=posts.length-1; i++){
    //     console.log(posts[i]);
    // }

    // for(let post of posts){
    //     console.log(post);
    // }

     //1. get the parent container and also empty the container
        const postsContainer = document.getElementById("posts-container");
        postsContainer.innerHTML = '';
        // console.log(postsContainer);

    posts.forEach(post => {
        // const title = post.title;
        // console.log(title);
        // console.log(post);

       

        //2. create HTML elements
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card bg-primary text-primary-content w-96">
            <div class="card-body">
                <h2 class="card-title">${post.title}</h2>
                <p>${post.body}</p>
            </div>
        </div>
        `

        //connection add with parent 
        postsContainer.appendChild(div);
        // console.log(postInLi);
    })
};