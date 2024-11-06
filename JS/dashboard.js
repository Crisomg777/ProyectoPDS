document.addEventListener('DOMContentLoaded', () => {
    const username = sessionStorage.getItem('loggedInUser');
    if (username) {
        document.getElementById('usernameDisplay').textContent = username;
    } else {
        window.location.href = 'index.html';
    }
});


fetch('../JS/negocios.json')
    .then(response => response.json())
    .then(data => {
        /* const elem = document.getElementById('dashboard'); */

        mostrarNegocios(data);


      
    })

    function mostrarNegocios(data) {
        foreach (elem in data); {
            elem.innerHTML = `
            <div class="card">
                <h3>${data.nombre}</h3>
            </div>
        `;
        }
    }