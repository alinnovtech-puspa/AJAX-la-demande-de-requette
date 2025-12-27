// --- 1) Charger avec FETCH ---
function loadWithFetch() {
    // fetch("https://swapi.dev/api/people/")
    fetch("https://swapi.py4e.com/api/people/")
        .then(response => response.json())
        .then(data => {
            displayPeople(data.results);
        })
        .catch(error => console.error("Erreur Fetch :", error));
}

// --- 2) Charger avec AXIOS ---
function loadWithAxios() {
    // axios.get("https://swapi.dev/api/people/")
    axios.get("https://swapi.py4e.com/api/people/")
        .then(response => {
            displayPeople(response.data.results);
        })
        .catch(error => console.error("Erreur Axios :", error));
}

// --- 3) Recherche ---
function searchCharacter() {
    let name = document.getElementById("searchInput").value.trim();

    // fetch("https://swapi.dev/api/people/?search=" + name)
    fetch("https://swapi.py4e.com/api/people/?search=" + name)
        .then(res => res.json())
        .then(data => {
            displayPeople(data.results);
        })
        .catch(error => console.error("Erreur recherche :", error));
}
// --- 4) Fonction d'affichage ---
function displayPeople(list) {
    let results = document.getElementById("results");
    results.innerHTML = ""; // vide les anciens résultats

    if (list.length === 0) {
        results.innerHTML = "<p>Aucun personnage trouvé.</p>";
        return;
    }
    
    list.forEach(person => {
        let div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.margin = "5px";
        div.style.padding = "10px";

        div.innerHTML = `
            <strong>Nom :</strong> ${person.name} <br>
            <strong>Taille :</strong> ${person.height} cm <br>
            <strong>Sexe :</strong> ${person.gender}
        `;

        results.appendChild(div);
    });
}

// --- LISTENERS ---
document.getElementById("btnFetch").addEventListener("click", loadWithFetch);
document.getElementById("btnAxios").addEventListener("click", loadWithAxios);
document.getElementById("btnSearch").addEventListener("click", searchCharacter);

