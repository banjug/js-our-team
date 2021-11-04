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

// seleziona il contenitore team dove inserire l'html
const teamCont = document.querySelector('.team-container');
// console.log(teamCont);

// array di oggetti, un oggetto per menbro del team 
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

// richiama la funzione che aggiunge le card dei dipendenti
baseTeam(employees, teamCont);

// seleziona il pulsante per inviare il form 
const formBtn = document.getElementById('addMemberButton');
// variabile oggetto dove salvare il nuovo dipendente aggiunto nel form 
let newEmployee;

// al click richiama la funzione che salva i dati del form e li usa per generare la card 
formBtn.addEventListener('click',

    function() {
        userAddForm(newEmployee)
    }
);


// -----------------------------------------------------
// funzioni---------------------------------------------


// funzione che aggiunge in pagina le card dei dipendenti
function baseTeam(objectsArray, htmlContainer) {
    
    // scorro l'array di oggetti
    for (let i = 0; i < objectsArray.length; i++) {
    
        // variabili per ogni chiave, dati del dipendente
        let nameData = '';
        let titleData = '';
        let photoData = '';
    
        // scorro l'oggetto in posizione [i] per salvarmi i valori delle chiavi nelle variabili
        for (var key in objectsArray) {
            nameData = objectsArray[i].emplName;
            titleData = objectsArray[i].emplTitle;
            photoData = objectsArray[i].emplPhoto;
        }
    
        // inserisco l'html in pagina utilizzando i dati salvati nel ciclo for in
        htmlContainer.innerHTML += `
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

}

// funzione al click aggiunge la card dell'utente inserito nel form
function userAddForm(newObject) {
    
    // salvare i dati del form 
    var formName = document.getElementById('name').value;
    var formRole = document.getElementById('role').value;
    var formImg = document.getElementById('image').value;

    // al click creo un oggetto per il nuovo dipendente aggiunto
    newObject = {
        'emplName' : formName,
        'emplTitle' : formRole,
        'emplPhoto' : formImg
    };

    console.log(newObject);

    employees.push(newObject);
    console.log(employees);
    
        // inserisco l'html in pagina utilizzando i dati salvati nel ciclo for in
        teamCont.innerHTML += `
            <div class="team-card">
                <div class="card-image">
                    <img
                        src="${newObject.emplPhoto}"
                        alt="${newObject.emplName}"
                    />
                </div>
                <div class="card-text">
                    <h3>${newObject.emplName}</h3>
                    <p>${newObject.emplTitle}</p>
                </div>
            </div>
        `   
}