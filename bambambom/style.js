
const nameSpan = document.getElementById('name');
const ageSpan = document.getElementById('age');
const emailSpan = document.getElementById('email');
const bioParagraph = document.getElementById('bio');


const newNameInput = document.getElementById('newName');
const newAgeInput = document.getElementById('newAge');
const newEmailInput = document.getElementById('newEmail');
const newBioTextarea = document.getElementById('newBio');
const updateButton = document.getElementById('updateButton');


updateButton.addEventListener('click', () => {
    
    const newName = newNameInput.value;
    const newAge = newAgeInput.value;
    const newEmail = newEmailInput.value;
    const newBio = newBioTextarea.value;

    
    if (newName) {
        nameSpan.textContent = newName;
    }
    if (newAge) {
        ageSpan.textContent = newAge;
    }
    if (newEmail) {
        emailSpan.textContent = newEmail;
    }
    if (newBio) {
        bioParagraph.textContent = newBio;
    }

    
    newNameInput.value = '';
    newAgeInput.value = '';
    newEmailInput.value = '';
    newBioTextarea.value = '';
});
