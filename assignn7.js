document.getElementById('story-box').style.display = 'none';

document.getElementById('tell-story').addEventListener('click', function () {

    let person = document.getElementById('person-field').value;
    let personList = document.getElementsByClassName('person');
    personList[0].innerHTML = person;
    personList[1].innerHTML = person;
    personList[2].innerHTML = person;


    let character = document.getElementById('character-field').value;
    let characterList = document.getElementsByClassName('character');
    characterList[0].innerHTML = character;
    characterList[1].innerHTML = character;

    let adverb = document.getElementById('adverb-field').value;
    document.getElementById('adverb').innerText = adverb;

    let adjective = document.getElementById('adjective-field').value;
    document.getElementById('adjective').innerText = adjective;
    document.getElementById('story-box').style.display = 'flex';


})