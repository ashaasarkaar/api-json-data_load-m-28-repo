//API request kore amra chaile j kono data k niye aste pari
const loadPosts = () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    //promise of json response
    .then(response => response.json())
    //promise of json data
    .then(json =>{
        console.log(json);
        displayPost(json);
    })
};

const displayPost = (posts) =>{
    posts.forEach(post =>{
        console.log(post);
    })
}