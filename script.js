const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const nameList = document.getElementById('nameList');
const nameCount = document.getElementById('nameCount');

let totalNames = 1;

function switchtocase() {
    switch (totalNames) {
        case 1:
      document.querySelector(".passenger-player").style.backgroundColor = "#17a2b8"; //Player Enter
            break;
        case 2:
      document.querySelector(".passenger-player").style.backgroundColor = "#28a745"; //Player Enter
            document.querySelector(".center-player").style.backgroundColor = "#17a2b8"; //Passenger left the games
            break;
    case 3:
document.querySelector(".center-player").style.backgroundColor = "#28a745"; //Player Enter
            document.querySelector(".Right-player").style.backgroundColor = "#17a2b8"; //Player left the games
    break;
     case 4:
 document.querySelector(".Right-player").style.backgroundColor = "#28a745"; //Passengers Enter
            document.querySelector(".left-player").style.backgroundColor = "#17a2b8"; //Passenger left the games
    break;
     case 5:
document.querySelector(".left-player").style.backgroundColor = "#28a745"; //Passengers Enter
document.querySelector(".content-player").style.backgroundColor = "#17a2b8"; //Passengers Enter
    break;
     case 6:
document.querySelector(".content-player").style.backgroundColor = "#28a745"; //Passengers Enter

    break;
        default:
            alert("Warning: If you Players loads exceedes to car may causes difficults or lagging.");
            console.warn("WARNING: If you Players loads exceedes to car may causes difficults or lagging.");
            document.getElementById('message-seat-red').textContent = 'Not enough Seats in the Car chair Game. if car causing difficults and weightness.';
            break;
    }
}
// Function to update the name count
function updateNameCount() {
  nameCount.textContent = totalNames;
}
// Function to add a name to the list
addButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    const li = document.createElement('li');
    li.textContent = name;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
      nameList.removeChild(li);
      totalNames--;
      updateNameCount();
      //switch
      switchtocase();
    });

    li.appendChild(deleteButton);
    nameList.appendChild(li);

    totalNames++;
    updateNameCount();
    nameInput.value = '';
  }
});

alert("Use Phone to Floating App in a Game.");
// Get button and audio elements
    const hornBtn = document.getElementById('hornBtn');
    const hornSound = document.getElementById('hornSound');

   // Ensure the sound loops while pressed
    hornSound.loop = true;

    // Play sound when button is pressed
    function startHorn() {
        hornSound.currentTime = 0; // restart from beginning
        hornSound.play().catch(err => console.error("Audio play failed:", err));
    }

    // Stop sound when button is released
    function stopHorn() {
        hornSound.pause();
        hornSound.currentTime = 0;
    }

    // Mouse events
    hornBtn.addEventListener('mousedown', startHorn);
    hornBtn.addEventListener('mouseup', stopHorn);
    hornBtn.addEventListener('mouseleave', stopHorn);

    // Touch events (for mobile)
    hornBtn.addEventListener('touchstart', e => {
        e.preventDefault(); // prevent scrolling
        startHorn();
    });
    hornBtn.addEventListener('touchend', stopHorn);