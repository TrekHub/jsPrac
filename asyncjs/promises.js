const posts = [{
        title: 'Post one',
        body: 'This is post one'
    },
    {
        title: 'Post two',
        body: 'This is post two'
    }

];


function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}


function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false;
            if (!error) {
                resolve()
            } else {
                reject('Something went wrong')
            }

        }, 2000)



    })

}
createPost({
        title: 'Post three',
        body: 'This is post three'
    })
    // .then(getPost)
    // .catch(error => console.log(error))


//async await 

 async function init () {
    createPost({
                title: 'Post three',
                body: 'This is post three'
            })

            getPost();
}

init()