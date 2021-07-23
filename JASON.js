'use strict'
const name = document.getElementById('Name');
const birthDate = document.getElementById('birth_Date');
const height = document.getElementById('height');
const skinColor = document.getElementById('Skin_color');
const button = document.querySelector('.Rbutton');

button.addEventListener(
    'click',
    (event) => {
        event.preventDefault()
        Name.innerHTML = '<em>Loading...</em>';
        birthDate.innerHTML = '<em>Loading...</em>';
        height.innerHTML = '<em>Loading...</em>';
        skinColor.innerHTML = '<em>Loading...</em>';

        const randomNum = 
        Math.floor(Math.random() * 83);

        fetch(`https://swapi.dev/api/people/${randomNum}/`)
        .then((Response => Response.json()))
        .then((planets => {
            Name.innerHTML = planets['name'];
            birthDate.innerHTML = planets['birth_year'];
            height.innerHTML = planets['height'];
            skinColor.innerHTML = planets['skin_color'];

        }))
    }


)


