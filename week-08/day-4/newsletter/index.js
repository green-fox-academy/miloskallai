window.onload = () => {
  const url = 'http://localhost:3000/singup';

  let btn = document.querySelector('button');
  const form = document.querySelector('form');
  const resultContainer = document.querySelector('.result-container');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const { name, email } = event.target.elements;
    let body = { name: name.value, email: email.value };
  
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(body)
    }).then(response => {
      if (response.ok) {
        console.log(response);
        response.json().then(response => {
          const nameDisplay = document.createElement('p');
          nameDisplay.innerHTML = response.name;
          resultContainer.appendChild(nameDisplay);

          const emailDisplay = document.createElement('p');
          emailDisplay.innerHTML = response.email;
          resultContainer.appendChild(emailDisplay);

        })
      }
    });
  });
}

