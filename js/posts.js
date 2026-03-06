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

    posts.forEach(post => {
        const title = post.title;
        console.log(title);
        // console.log(post);

        //1. get the parent container
        const postsContainer = document.getElementById("posts-container");
        // console.log(postsContainer);

        //2. create HTML elements
        const li = document.createElement('li');
        li.innerText = title;

        //connection add with parent 
        postsContainer.appendChild(li);
        // console.log(postInLi);
    })
};