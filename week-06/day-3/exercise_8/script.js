let partyButton = document.querySelector('button');
let partyDiv = document.querySelector('div');

partyButton.onclick = () => {
  partyDiv.classList.toggle('party');
}