let editProfile = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeEditProfile = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__profession')
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let formElemnt = document.querySelector('.popup__container')

nameInput.value = profileName.textContent
jobInput.value = profileJob.textContent


editProfile.addEventListener('click', function() {
    popup.classList.add('popup_opened');
})


closeEditProfile.addEventListener('click', function(){
    popup.classList.remove('popup_opened')
})

function handleForm(evt){
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popup.classList.remove('popup_opened')
}


formElemnt.addEventListener('submit', handleForm)

