const loadFriend = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displayFriend(data));
}

loadFriend()

const displayFriend = (data) => {
    const randomFriend = document.getElementById('friend');
    const friends = data.results;
    //console.log(friend);

    for (const friend of friends) {
        //console.log(friend);

        const div = document.createElement('div');

        div.innerHTML = `
         <div class="card" style="width: 18rem;">
            <img src="${friend.picture.thumbnail}" class=" p-3 img-fluid rounded-circle" alt="...">
            <div class="card-body">
           <h5 class="card-title">${friend.name.title} ${friend.name.first} ${friend.name.last}</h5>
           <p class="card-text">${friend.phone}</p >
           <p class="card-text">${friend.nat}</p>
        </div>
         
        `
        randomFriend.appendChild(div);
    }

}