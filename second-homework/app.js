const posts = [
    {post_id: '1' , title: 'POST 1', author:'Ali'},
    {post_id: '2' , title: 'POST 2', author:'Veli'},
    {post_id: '3' , title: 'POST 3', author:'Selim'},
];

const listPosts = () => {    
    posts.map(post => {
        console.log(post.title);
    })
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve,reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject("YENI POST EKLERKEN BIR HATA OLUŞTU...");
})

    return promise1;

};

async function showPosts(){
    try {
        await addPost( {post_id:'4', title:'POST 4' , author:'Bora'}); 
        listPosts();
    } catch(error) {
        console.log(error);
    }
}

showPosts();


