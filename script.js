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

capas.antecedentes.addLayer(
    L.marker([-34.90, -56.16])
    .bindPopup("<b>Antecedente 1</b><br>Ley de Secularización (1907)")
);

capas.creditos.addLayer(
    L.marker([-33.0, -58.5], { opacity: 0.7 })
    .bindPopup(`
        <b>Créditos</b><br>
        <u>Fuentes</u>:<br>
        - Biblioteca Nacional de Uruguay<br>
        - Constitución de 1918 (archivo PDF)<br>
        <u>Desarrollado por</u>:<br>
        [Tu nombre o equipo]
    `)
);

capas.antecedentes.addLayer(
    L.marker([-32.31, -58.08])
    .bindPopup("<b>Revolución de 1897</b><br>Conflictos entre blancos y colorados.")
);

capas.constitucion.addLayer(
    L.marker([-34.85, -56.21])
    .bindPopup(`
        <b>Nueva Constitución</b><br>
        - Voto secreto<br>
        - Derechos sociales<br>
        <img src="palacio1918.jpg" width="150">
    `)
);

capas.repercusiones.addLayer(
    L.marker([-30.40, -56.47])
    .bindPopup("<b>Impacto en frontera</b><br>Tensiones con Brasil.")
);

capas.creditos.addLayer(
    L.marker([-33.0, -58.5], { opacity: 0.7 })
    .bindPopup(`
        <b>Créditos</b><br>
        <u>Fuentes</u>:<br>
        - Biblioteca Nacional de Uruguay<br>
        - Constitución de 1918 (archivo PDF)<br>
        <u>Desarrollado por</u>:<br>
        [Tu nombre o equipo]
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