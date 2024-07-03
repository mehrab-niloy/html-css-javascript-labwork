document.getElementById('storybox').style.display='none';

document.getElementById('tell_story_id').addEventListener('click',function()
{
let person=document.getElementById('person_id').value;
let personList=document.getElementsByClassName('person');
personList[0].innerHTML=person;
personList[1].innerHTML=person;
personList[2].innerHTML=person;



let character=document.getElementById('character_id').value;
let characterList=document.getElementsByClassName('character');
characterList[0].innerHTML=character;
characterList[1].innerHTML=character;
characterList[2].innerHTML=character;

let adverb=document.getElementById('adverb_id').value;
document.getElementById('adverb').innerText=adverb;
let adjective=document.getElementById('adjective_id').value;
document.getElementById('adjective').innerText=adjective;
document.getElementById('storybox').style.display='flex';



})