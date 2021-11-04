/*
RICREARE IL LAYOUT
1. creare un array con i dipendenti
    array di oggetti (dipendente1, dipendente2, ecc)
    ogni oggetto contiene nome, posizione e path dell'immagine (chiavi dell'oggetto)
2. inserire le card dei dipendenti riprendendo i valori per ogni dipendente dall'array
    una funzione che inserisce l'html nella pagina
    la funzione riprende i dati dall'array di oggetti
3. all'inserimento dei dati nel form salvarli come nuovo dipendente nell'array
    push nell'array di un nuovo oggetto (dipendenteN) contentente i dati salvati dal form
4. alla pressione del pulsante far apparire una nuova card con un nuovo dipendente
*/

const teamCont = document.querySelector('.team-container');
console.log(teamCont);

var employees = [
    {
        'emplName' : 'Wayne Barnett',
        'emplTitle' : 'Founder & CEO',
        'emplPhoto' : 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        'emplName' : 'Angela Caroll',
        'emplTitle' : 'Chief Editor',
        'emplPhoto' : 'img/angela-caroll-chief-editor.jpg'
    },

    {
        'emplName' : 'Walter Gordon',
        'emplTitle' : 'Office Manager',
        'emplPhoto' : 'img/walter-gordon-office-manager.jpg'
    },

    {
        'emplName' : 'Angela Lopez',
        'emplTitle' : 'Social Media Manager',
        'emplPhoto' : 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        'emplName' : 'Scott Estrada',
        'emplTitle' : 'Developer',
        'emplPhoto' : 'img/scott-estrada-developer.jpg'
    },

    {
        'emplName' : 'Barbara Ramos',
        'emplTitle' : 'Graphic Designer',
        'emplPhoto' : 'img/barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < employees.length; i++) {

    let nameData = '';
    let titleData = '';
    let photoData = '';

    for (var key in employees) {
        nameData = employees[i].emplName;
        titleData = employees[i].emplTitle;
        photoData = employees[i].emplPhoto;
    }

    console.log(nameData);
    console.log(titleData);
    console.log(photoData);

    teamCont.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${photoData}"
                    alt="${nameData}"
                />
            </div>
            <div class="card-text">
                <h3>${nameData}</h3>
                <p>${titleData}</p>
            </div>
        </div>
    `
};