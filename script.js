var map = L.map('map').setView([-32.5, -56], 6.2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

const capas = {
    antecedentes: L.layerGroup(),
    constitucion: L.layerGroup(),
    repercusiones: L.layerGroup(),
    creditos: L.layerGroup()  
};

capas.creditos.addLayer(
    L.marker([-33.0, -58.5], { opacity: 0.7 })
    .bindPopup(`
        <b>Créditos</b><br>
        <u>Fuentes</u>:<br>
        - Biblioteca Nacional de Uruguay<br>
        - Constitución de 1918 (archivo PDF)<br>
        <u>Desarrollado por</u>:<br>
    `)
);
capas.creditos.addLayer(
    L.popup({ autoClose: false, closeOnClick: false })
    .setLatLng([-34.9, -56.1])
    .setContent("<b>© Proyecto Historia 2024</b>")
    .openOn(map)
);

function mostrarCapa(capaSeleccionada) {
    Object.keys(capas).forEach(capa => {
        map.removeLayer(capas[capa]);
    });
    
    capas[capaSeleccionada].addTo(map);
    capas.creditos.addTo(map);
}

function mostrarCapa(capaSeleccionada) {
    Object.keys(capas).forEach(capa => {
        map.removeLayer(capas[capa]);
    });
    capas[capaSeleccionada].addTo(map);
}

capas.antecedentes.addLayer(
    L.marker([-32.3833, -54.1833], {
        icon: L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/623/623483.png", // Ícono de batalla
            iconSize: [30, 30]
        })
    }).bindPopup(`
        <div style="font-family: Arial; max-width: 300px;">
            <h3 style="color: #c0392b; margin-top: 0;">Revolución de las Lanzas (1870-1872)</h3>
            <p><b> Ubicación:</b> Cerro Largo (frontera con Brasil)</p>
            <hr style="border-top: 1px solid #eee; margin: 10px 0;">
            <p><b>📜 Contexto:</b></p>
            <ul style="padding-left: 15px; margin: 5px 0;">
                <li>Uruguay post-Guerra Grande (1839-1851) con tensiones entre blancos (Timoteo Aparicio) y colorados (gobierno centralista).</li>
                <li>El interior rural vs. Montevideo urbano.</li>
            </ul>
            <p><b>💥 Hecho clave:</b></p>
            <ul style="padding-left: 15px; margin: 5px 0;">
                <li>Los blancos del interior exigieron <strong>mayor autonomía departamental</strong> y <strong>representación política</strong>, semilla del posterior sistema colegiado de 1918.</li>
            </ul>
            <img src="https://uuee.ejercito.mil.uy/eehh/wp-content/uploads/sites/6/2024/11/Aparicio_Timoteo.jpg" style="width: 100%; margin-top: 10px;" alt="Timoteo Aparicio">
        </div>
    `)
);

capas.antecedentes.addLayer(
    L.marker([-34.9066, -56.1856], {
        icon: L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png", // Ícono de documento
            iconSize: [30, 30]
        })
    }).bindPopup(`
        <div style="font-family: Arial; max-width: 300px;">
            <h3 style="color: #16a085; margin-top: 0;">Pacto de la Cruz (1872)</h3>
            <p><b> Ubicación:</b> Montevideo (Barrio de la Cruz)</p>
            <hr style="border-top: 1px solid #eee; margin: 10px 0;">
            <p><b>📜 Contexto:</b></p>
            <ul style="padding-left: 15px; margin: 5px 0;">
                <li>Acuerdo entre el gobierno colorado (Lorenzo Batlle) y los revolucionarios blancos (Timoteo Aparicio).</li>
                <li>Fin de la Revolución de las Lanzas.</li>
            </ul>
            <p><b>💥 Hecho clave:</b></p>
            <ul style="padding-left: 15px; margin: 5px 0;">
                <li>Por primera vez, se reconoció <strong>la coparticipación política de los blancos</strong> en gobiernos departamentales, antecedente directo del <strong>colegiado de 1918</strong>.</li>
                <li>Se evitó la división territorial del país.</li>
            </ul>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Lorenzo_Batlle_y_Grau_2.png" style="width: 100%; margin-top: 10px;" alt="Lorenzo Batlle">
        </div>
    `)
);

capas.antecedentes.addLayer(
    L.marker([-34.8917, -56.1867], {
        icon: L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1570/1570991.png", // Ícono de ley
            iconSize: [35, 35]
        })
    }).bindPopup(`
        <div style="font-family: Arial; max-width: 300px;">
            <h3 style="color: #9b59b6; margin-top: 0;">Reforma Constitucional (1917)</h3>
            <p><b> Ubicación:</b> Palacio Legislativo, Montevideo</p>
            <hr style="border-top: 1px solid #eee; margin: 10px 0;">
            <p><b>📜 Contexto:</b></p>
            <ul style="padding-left: 15px; margin: 5px 0;">
                <li>Presión de batllistas y nacionalistas para modernizar el Estado.</li>
                <li>Crisis política por el centralismo y la influencia de la Primera Guerra Mundial.</li>
            </ul>
            <p><b>💥 Hecho clave:</b></p>
            <ul style="padding-left: 15px; margin: 5px 0;">
                <li><strong>Introdujo el sistema colegiado</strong> (9 ministros, 6 del partido mayoritario y 3 del minoritario), ensayo del modelo de 1918.</li>
                <li>Separación <strong>Iglesia-Estado</strong> y primeros derechos laborales.</li>
            </ul>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmLpgWSNqwpwEzRyyic1GIHxa8tPHQwn2zA&s" style="width: 100%; margin-top: 10px;" alt="Palacio Legislativo">
        </div>
    `)
);

capas.constitucion.addLayer(
    L.marker([-34.9066, -56.1856], {  // Palacio Legislativo
        icon: L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png", // Ícono de documento
            iconSize: [30, 30]
        })
    }).bindPopup(`
        <div style="font-family: Arial; max-width: 300px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Promulgación (25 de octubre, 1918)</h3>
            <p><b> Palacio Legislativo, Montevideo</b></p>
            <hr style="border-top: 1px solid #eee; margin: 10px 0;">
            <p><b>📜 Hecho:</b> Se aprobó la nueva Constitución que estableció:</p>
            <ul style="padding-left: 15px; margin: 5px 0;">
                <li><strong>Ejecutivo colegiado</strong> (9 miembros: 6 del partido mayoritario, 3 del minoritario).</li>
                <li><strong>Separación Iglesia-Estado</strong> (Estado laico).</li>
                <li><strong>Voto secreto</strong> y derechos laborales.</li>
            </ul>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmLpgWSNqwpwEzRyyic1GIHxa8tPHQwn2zA&s" style="width: 100%; margin-top: 10px;" alt="Palacio Legislativo">
        </div>
    `)
);

capas.constitucion.addLayer(
    L.marker([-32.3171, -58.0807], {  // Paysandú
        icon: L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1029/1029166.png", // Ícono de región
            iconSize: [30, 30]
        })
    }).bindPopup(`
        <div style="font-family: Arial; max-width: 300px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Impacto en el Interior (1918)</h3>
            <p><b> Paysandú</b></p>
            <hr style="border-top: 1px solid #eee; margin: 10px 0;">
            <p><b>📜 Hecho:</b> La Constitución generó:</p>
            <ul style="padding-left: 15px; margin: 5px 0;">
                <li><strong>Mayor representación política</strong> para departamentos como Paysandú, Salto y Rivera.</li>
                <li><strong>Descontento en sectores conservadores</strong> por la secularización.</li>
            </ul>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Paysandu_-_Uruguay.jpg/280px-Paysandu_-_Uruguay.jpg" style="width: 100%; margin-top: 10px;" alt="Paysandú">
        </div>
    `)
);

capas.constitucion.addLayer(
    L.marker([-30.9053, -55.5508], {  // Rivera
        icon: L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1029/1029166.png", // Ícono de frontera
            iconSize: [30, 30]
        })
    }).bindPopup(`
        <div style="font-family: Arial; max-width: 300px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Cambios en la Frontera (1918)</h3>
            <p><b> Rivera</b></p>
            <hr style="border-top: 1px solid #eee; margin: 10px 0;">
            <p><b>📜 Hecho:</b> La nueva Constitución:</p>
            <ul style="padding-left: 15px; margin: 5px 0;">
                <li><strong>Fortalecimiento de la identidad nacional</strong> en zonas fronterizas.</li>
                <li><strong>Nuevas políticas migratorias</strong> para evitar conflictos con Brasil.</li>
            </ul>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Uruguay_location_map.svg/280px-Uruguay_location_map.svg.png" style="width: 100%; margin-top: 10px;" alt="Mapa de Rivera">
        </div>
    `)
);
