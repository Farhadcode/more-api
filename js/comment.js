const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}

//loadComments()

const displayComment = (comments) => {
    const setComment = document.getElementById('comment');
    // setComment.innerText = comments.id;
    for (const comment of comments) {
        //console.log(comment);

        const div = document.createElement('div');

        div.innerHTML = `
                <div class="card-body">
                <h5 class="card-title">ID: ${comment.id}</h5>
                <h6 class="card-subtitle mb-2 text-muted"> ${comment.email}</h6>
                <p class="card-text">${comment.body}</p>
               </div>
                `
        setComment.appendChild(div);
    }


}