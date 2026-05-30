const loadData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data) => console.log(data))
}

const loadPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displayPosts(data)
    })
}

displayPosts = (posts) =>{
    posts.forEach((post) => {
        console.log(post)
    })
}