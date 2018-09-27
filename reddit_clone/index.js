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
      console.log(posts[i]);

      let postContainer = document.createElement('div');
      postContainer.classList.add('post-container');
      postList.appendChild(postContainer);

      let vote = document.createElement('div');
      vote.classList.add('vote');
      postContainer.appendChild(vote);

      let arrowUpIcon = document.createElement('i');
      arrowUpIcon.classList.add('arrow', 'icofont-arrow-up');
      vote.appendChild(arrowUpIcon);

      let voteScore = document.createElement('p');
      voteScore.classList.add('vote-score');
      voteScore.textContent = posts[i].score;
      vote.appendChild(voteScore);

      let arrowDownIcon = document.createElement('i');
      arrowDownIcon.classList.add('arrow', 'icofont-arrow-down');
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
      postUrl.href = '#';
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

      let btnEdit = document.createElement('button');
      btnEdit.classList.add('btn-edit');
      btnEdit.innerHTML = 'modify';
      postData.appendChild(btnEdit);

      let btndelete = document.createElement('button');
      btndelete.classList.add('btn-delete');
      btndelete.innerHTML = 'delete';
      postData.appendChild(btndelete);
    }
  })

  .catch(error => {
    console.log(error);
  });
