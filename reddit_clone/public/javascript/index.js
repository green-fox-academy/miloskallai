'use strict';
let url = 'http://localhost:8080/posts';
let postList = document.querySelector('.post-list');

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let posts = data.posts;

    for (let i = 0; i < posts.length; i++) {

      let postContainer = document.createElement('div');
      postContainer.classList.add('post-container');
      postContainer.setAttribute('id', `${posts[i].id}`);
      postList.appendChild(postContainer);

      let vote = document.createElement('div');
      vote.classList.add('vote');
      postContainer.appendChild(vote);

      let arrowUpIcon = document.createElement('i');
      arrowUpIcon.classList.add('arrow', 'icofont-arrow-up');
      arrowUpIcon.addEventListener('click', () => {
        location.reload();
        fetch(`${url}/${posts[i].id}/upvote`, {
          method: 'PUT'
        }).then(response => response.json());
      })
      vote.appendChild(arrowUpIcon);

      let voteScore = document.createElement('p');
      voteScore.classList.add('vote-score');
      voteScore.textContent = posts[i].score;
      vote.appendChild(voteScore);

      let arrowDownIcon = document.createElement('i');
      arrowDownIcon.classList.add('arrow', 'icofont-arrow-down');
      arrowDownIcon.addEventListener('click', () => {
        location.reload();
        fetch(`${url}/${posts[i].id}/downvote`, {
          method: 'PUT'
        }).then(response => response.json());
      })
      vote.appendChild(arrowDownIcon);

      let postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postContainer.appendChild(postDiv);

      let headerThree = document.createElement('h3');
      headerThree.classList.add('post-title');
      headerThree.innerHTML = posts[i].title;
      postDiv.appendChild(headerThree);

      let postUrl = document.createElement('a');
      postUrl.classList.add('post-url');
      postUrl.innerHTML = posts[i].url;
      postUrl.href = posts[i].url;
      postUrl.target = '_blank';
      postDiv.appendChild(postUrl);

      let postData = document.createElement('div');
      postData.classList.add('post-data');
      postDiv.appendChild(postData);

      let dataSpan = document.createElement('span');
      dataSpan.classList.add('data-paragraph');
      dataSpan.innerHTML = `Posted by User at ${posts[i].timestamp}`;
      postData.appendChild(dataSpan);

      let distinctLine = document.createElement('span');
      distinctLine.classList.add('distinct-line');
      distinctLine.innerHTML = '|';
      postData.appendChild(distinctLine);

      let btnModify = document.createElement('a');
      btnModify.classList.add('btn-edit');
      btnModify.href = `http://localhost:8080/${posts[i].id}/modify`;
      btnModify.innerHTML = 'modify';
      postData.appendChild(btnModify);

      let btnDelete = document.createElement('button');
      btnDelete.classList.add('btn-delete');
      btnDelete.innerHTML = 'delete';
      btnDelete.addEventListener('click', ()=>{
         fetch(`${url}/${posts[i].id}`, {
          method: 'delete'
        }).then(response => response.json());
        
         let toDelete = document.getElementById(`${posts[i].id}`);
         console.log(posts[i].id);
         console.log(toDelete);
        postList.removeChild(toDelete);
      })
      postData.appendChild(btnDelete);
    }
  })

  .catch(error => {
    console.log(error);
  });
