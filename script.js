// ===== DATOS DE LAS SERIES - AQUÍ AGREGAS TUS SERIES =====
// OBJETO PRINCIPAL: Aquí guardamos TODAS las series
const seriesData = {
    // 📌 EJEMPLO 1: Serie con 1 temporada
    'losjuegosdelcalamar': {
        titulo: 'El Juego del Calamar',
        descripcion: 'Cientos de jugadores cortos de dinero aceptan una extraña invitación a competir en juegos infantiles. Adentro les espera un premio irresistible... con un riesgo mortal.',
        temporadas: {
            // SOLO 1 TEMPORADA (número 1)
            1: [
                // Cada capítulo es un objeto con: número, título y link de YouTube
                { capitulo: 1, titulo: 'Luz Roja, Luz Verde', link_yt: 'https://www.youtube.com/embed/tW9jm23xOJA?fs=1' },
                { capitulo: 2, titulo: 'Primer Contacto', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 3, titulo: 'Secretos Revelados', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 4, titulo: 'La Invasión', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 5, titulo: 'Resistencia Humana', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 6, titulo: 'Alianza Imposible', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 7, titulo: 'Batalla Final', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },             
                { capitulo: 8, titulo: 'Nuevo Comienzo', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 9, titulo: 'Nuevo Comienzo', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
            ],
            2: [
                { capitulo: 1, titulo: 'Capítulo 9: El Mariscal', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 2, titulo: 'Capítulo 10: El Pasajero', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 3, titulo: 'Capítulo 11: La Heredera', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 4, titulo: 'Capítulo 12: El Asedio', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 5, titulo: 'Capítulo 13: El Jedi', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 6, titulo: 'Capítulo 14: La Tragedia', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 7, titulo: 'Capítulo 15: La Creencia', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
            ],
            3: [
                { capitulo: 1, titulo: 'Capítulo 9: El Mariscal', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 2, titulo: 'Capítulo 10: El Pasajero', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 3, titulo: 'Capítulo 11: La Heredera', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 4, titulo: 'Capítulo 12: El Asedio', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 5, titulo: 'Capítulo 13: El Jedi', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 6, titulo: 'Capítulo 14: La Tragedia', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
            ]
        }
    },
    'loselegidos': {
        titulo: 'Alien Earth',
        descripcion: 'Una serie de ciencia ficción que explora la llegada de alienígenas a la Tierra y el impacto en la humanidad.',
        temporadas: {
            // SOLO 1 TEMPORADA (número 1)
            1: [
                // Cada capítulo es un objeto con: número, título y link de YouTube
                { capitulo: 1, titulo: 'La Llegada', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 2, titulo: 'Primer Contacto', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 3, titulo: 'Secretos Revelados', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 4, titulo: 'La Invasión', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 5, titulo: 'Resistencia Humana', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 6, titulo: 'Alianza Imposible', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 7, titulo: 'Batalla Final', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 8, titulo: 'Nuevo Comienzo', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' }
            ]
        }
    },
    
    // 📌 EJEMPLO 2: Serie con 1 temporada
    'arcane': {
        titulo: 'Love Death and Robots',
        descripcion: 'Una colección de cortos animados que exploran temas de ciencia ficción, fantasía y horror.',
        temporadas: {
            1: [
                { capitulo: 1, titulo: 'Sonnie\'s Edge', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 2, titulo: 'Three Robots', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 3, titulo: 'The Witness', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 4, titulo: 'Suits', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 5, titulo: 'Sucker of Souls', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 6, titulo: 'When the Yogurt Took Over', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 7, titulo: 'Beyond the Aquila Rift', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 8, titulo: 'Good Hunting', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' }
            ]
        }
    },
    'nuestroplaneta': {
        titulo: 'Love Death and Robots',
        descripcion: 'Una colección de cortos animados que exploran temas de ciencia ficción, fantasía y horror.',
        temporadas: {
            1: [
                { capitulo: 1, titulo: 'Sonnie\'s Edge', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 2, titulo: 'Three Robots', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 3, titulo: 'The Witness', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 4, titulo: 'Suits', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 5, titulo: 'Sucker of Souls', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 6, titulo: 'When the Yogurt Took Over', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 7, titulo: 'Beyond the Aquila Rift', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 8, titulo: 'Good Hunting', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' }
            ]
        }
    },
    'predadores': {
        titulo: 'Love Death and Robots',
        descripcion: 'Una colección de cortos animados que exploran temas de ciencia ficción, fantasía y horror.',
        temporadas: {
            1: [
                { capitulo: 1, titulo: 'Sonnie\'s Edge', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 2, titulo: 'Three Robots', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 3, titulo: 'The Witness', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 4, titulo: 'Suits', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 5, titulo: 'Sucker of Souls', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 6, titulo: 'When the Yogurt Took Over', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 7, titulo: 'Beyond the Aquila Rift', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 8, titulo: 'Good Hunting', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' }
            ]
        }
    },
    'alienearth': {
        titulo: 'Love Death and Robots',
        descripcion: 'Una colección de cortos animados que exploran temas de ciencia ficción, fantasía y horror.',
        temporadas: {
            1: [
                { capitulo: 1, titulo: 'Sonnie\'s Edge', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 2, titulo: 'Three Robots', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 3, titulo: 'The Witness', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 4, titulo: 'Suits', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 5, titulo: 'Sucker of Souls', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 6, titulo: 'When the Yogurt Took Over', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 7, titulo: 'Beyond the Aquila Rift', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 8, titulo: 'Good Hunting', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' }
            ]
        }
    },
    'lovedeathrobots': {
        titulo: 'Love Death and Robots',
        descripcion: 'Una colección de cortos animados que exploran temas de ciencia ficción, fantasía y horror.',
        temporadas: {
            1: [
                { capitulo: 1, titulo: 'Sonnie\'s Edge', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 2, titulo: 'Three Robots', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 3, titulo: 'The Witness', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 4, titulo: 'Suits', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 5, titulo: 'Sucker of Souls', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 6, titulo: 'When the Yogurt Took Over', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 7, titulo: 'Beyond the Aquila Rift', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
                { capitulo: 8, titulo: 'Good Hunting', link_yt: 'https://www.youtube.com/embed/oqxAJKy0ii4' }
            ]
        }
    },
    // 🎬 SERIE DE EJEMPLO 2: The Mandalorian (2 temporadas)
    'mandalorian': {
        titulo: 'The Mandalorian',
        descripcion: 'Las aventuras de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República.',
        temporadas: {
            // TEMPORADA 1 - 8 capítulos
            1: [
                { capitulo: 1, titulo: 'Capítulo 1: El Mandaloriano', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 2, titulo: 'Capítulo 2: El Niño', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 3, titulo: 'Capítulo 3: El Pecado', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 4, titulo: 'Capítulo 4: El Santuario', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 5, titulo: 'Capítulo 5: El Pistolero', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 6, titulo: 'Capítulo 6: El Prisionero', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 7, titulo: 'Capítulo 7: El Reembolso', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 8, titulo: 'Capítulo 8: Redención', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' }
            ],
            // TEMPORADA 2 - 8 capítulos
            2: [
                { capitulo: 1, titulo: 'Capítulo 9: El Mariscal', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 2, titulo: 'Capítulo 10: El Pasajero', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 3, titulo: 'Capítulo 11: La Heredera', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 4, titulo: 'Capítulo 12: El Asedio', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 5, titulo: 'Capítulo 13: El Jedi', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 6, titulo: 'Capítulo 14: La Tragedia', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 7, titulo: 'Capítulo 15: La Creencia', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
                { capitulo: 8, titulo: 'Capítulo 16: El Rescate', link_yt: 'https://www.youtube.com/embed/aOC8E8z_ifw' }
            ]
        }
    }
    
    // 📝 PARA AGREGAR MÁS SERIES: Copia y pega una de arriba, cambia el nombre y los datos
    // EJEMPLO:
    // 'miserie': {
    //     titulo: 'Mi Serie',
    //     descripcion: 'Descripción...',
    //     temporadas: {
    //         1: [
    //             { capitulo: 1, titulo: 'Capítulo 1', link_yt: 'link_youtube' },
    //             { capitulo: 2, titulo: 'Capítulo 2', link_yt: 'link_youtube' }
    //         ]
    //     }
    // }
};

// ===== VARIABLES GLOBALES =====
// Guarda qué serie estamos viendo actualmente en el modal
let serieActual = '';

// ===== SISTEMA DE FILTRADO ORIGINAL (TU CÓDIGO) =====
// Esto se ejecuta cuando la página termina de cargar
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Página cargada - Iniciando sistema de filtrado...');
    
    // 1. Seleccionar todos los botones de filtro y todas las tarjetas
    const botones = document.querySelectorAll('.filtro-btn');
    const peliculas = document.querySelectorAll('.movie-card, .serie-card');

    // 2. Función para filtrar películas/series por categoría
    function filtrarPeliculas(categoria) {
        console.log(`🎯 Filtrando por categoría: ${categoria}`);
        
        // Recorremos cada tarjeta
        peliculas.forEach(pelicula => {
            // Obtenemos la categoría de la tarjeta (ej: "accion", "series")
            const categoriasPeli = pelicula.getAttribute('data-categoria');
            
            // Mostrar si: categoria es "todas" O coincide con la categoría de la tarjeta
            const mostrar = categoria === 'todas' || categoriasPeli === categoria;
            
            // Aplicamos display block (mostrar) o none (ocultar)
            pelicula.style.display = mostrar ? 'block' : 'none';
        });
    }

    // 3. Agregar evento click a cada botón de filtro
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            console.log(`🔘 Botón clickeado: ${this.textContent}`);
            
            // Remover clase 'activo' de todos los botones
            botones.forEach(btn => btn.classList.remove('activo'));
                
            // Añadir clase 'activo' al botón clickeado
            this.classList.add('activo');
            
            // Obtener la categoría del botón (data-categoria)
            const categoria = this.getAttribute('data-categoria');
            
            // Filtrar las películas/series
            filtrarPeliculas(categoria);
        });
    });

    // 4. Al cargar la página, mostrar todas las películas/series
    console.log('📁 Mostrando todas las películas/series al cargar...');
    const btnTodas = document.querySelector('.filtro-btn[data-categoria="todas"]');
    if (btnTodas) {
        btnTodas.click(); // Simular click en "TODAS"
    }
});

// ===== SISTEMA DE SERIES =====

/**
 * 📖 ABRIR MODAL DE SERIE - Se ejecuta al hacer click en una serie
 * @param {string} serieId - ID de la serie (ej: 'strangerthings')
 */
function abrirModal(serieId) {
    console.log(`🎬 Abriendo modal para serie: ${serieId}`);
    
    // Guardar qué serie estamos viendo
    serieActual = serieId;
    
    // Obtener los datos de la serie desde nuestro objeto
    const serie = seriesData[serieId];
    
    // Actualizar título y descripción en el modal
    document.getElementById('modal-titulo').textContent = serie.titulo;
    document.getElementById('modal-desc').textContent = serie.descripcion;
    
    // GENERAR BOTONES DE TEMPORADAS
    const tempBotones = document.getElementById('temporadas-botones');
    tempBotones.innerHTML = ''; // Limpiar botones anteriores
    
    console.log(`📺 Generando botones para ${Object.keys(serie.temporadas).length} temporadas`);
    
    // Crear un botón por cada temporada
    Object.keys(serie.temporadas).forEach(tempNum => {
        const boton = document.createElement('button');
        boton.className = 'temp-btn';
        boton.textContent = `Temporada ${tempNum}`;
        
        // Cuando se hace click en el botón, cargar los capítulos de esa temporada
        boton.onclick = () => {
            console.log(`🔄 Cargando temporada ${tempNum}`);
            cargarCapitulos(parseInt(tempNum));
            
            // Remover clase 'activo' de todos los botones de temporada
            document.querySelectorAll('.temp-btn').forEach(btn => {
                btn.classList.remove('activo');
            });
            // Agregar clase 'activo' al botón clickeado
            boton.classList.add('activo');
        };
        
        tempBotones.appendChild(boton);
    });
    
    // Cargar la primera temporada por defecto
    console.log('🔄 Cargando primera temporada por defecto...');
    cargarCapitulos(1);
    
    // Activar el primer botón de temporada
    const primerBoton = tempBotones.querySelector('.temp-btn');
    if (primerBoton) {
        primerBoton.classList.add('activo');
    }
    
    // Mostrar el modal
    document.getElementById('serie-modal').style.display = 'block';
    console.log('✅ Modal abierto correctamente');
}

/**
 * 🎥 CARGAR CAPÍTULOS - Muestra los capítulos de una temporada en cuadrícula 4x4
 * @param {number} temporada - Número de temporada (1, 2, 3...)
 */
function cargarCapitulos(temporada) {
    console.log(`🎥 Cargando capítulos de temporada ${temporada}`);
    
    // Obtener la serie actual y sus temporadas
    const serie = seriesData[serieActual];
    const capitulos = serie.temporadas[temporada];
    const listaCapitulos = document.getElementById('capitulos-lista');
    
    // Limpiar lista anterior de capítulos
    listaCapitulos.innerHTML = '';
    
    console.log(`📊 Mostrando ${capitulos.length} capítulos en cuadrícula 4x4`);
    
    // Crear elemento por cada capítulo
    capitulos.forEach(cap => {
        const capItem = document.createElement('div');
        capItem.className = 'capitulo-item';
        
        // HTML de cada tarjeta de capítulo
        capItem.innerHTML = `
            <h4>Capítulo ${cap.capitulo}</h4>
            <p>${cap.titulo}</p>
            <p>Duración: 45 min</p>
            <a href="${cap.link_yt}?autoplay=1&fs=1&rel=0&modestbranding=1&controls=1&playsinline=0" 
            class="boton" target="_blank">
            VER CAPÍTULO <i class="fas fa-play"></i>
            </a>
        `;
        
        listaCapitulos.appendChild(capItem);
    });
    
    console.log('✅ Capítulos cargados correctamente en cuadrícula');
}

/**
 * ❌ CERRAR MODAL - Se ejecuta al hacer click en la X
 */
function cerrarModal() {
    console.log('❌ Cerrando modal de serie...');
    document.getElementById('serie-modal').style.display = 'none';
    serieActual = ''; // Limpiar serie actual
}

// Cerrar modal si se hace click fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('serie-modal');
    // Si el click fue directamente en el fondo del modal (no en el contenido)
    if (event.target === modal) {
        cerrarModal();
    }
}

// ===== INSTRUCCIONES PARA AGREGAR MÁS SERIES =====
/*
📝 CÓMO AGREGAR UNA NUEVA SERIE - PASO A PASO:

1. 🆔 CREAR UN ID ÚNICO: Elige un nombre sin espacios (ej: 'miserie')

2. 📁 AGREGAR AL OBJETO seriesData:

'miserie': {
    titulo: 'Mi Serie',
    descripcion: 'Descripción de la serie...',
    temporadas: {
        1: [ // TEMPORADA 1
            { capitulo: 1, titulo: 'Nombre capítulo 1', link_yt: 'link_youtube' },
            { capitulo: 2, titulo: 'Nombre capítulo 2', link_yt: 'link_youtube' }
        ],
        2: [ // TEMPORADA 2 (opcional)
            { capitulo: 1, titulo: 'Nombre capítulo 1', link_yt: 'link_youtube' }
        ]
    }
}

3. 🎴 AGREGAR TARJETA EN HTML:

<div class="serie-card" data-categoria="series" onclick="abrirModal('miserie')">
    <img src="url_portada" class="movie-poster">
    <h3 class="movie-title">Mi Serie</h3>
    <button class="boton-serie">VER SERIE <i class="fas fa-play"></i></button>
</div>

¡Y LISTO! La serie aparecerá automáticamente.
*/

// Mensaje de confirmación en la consola
console.log('✅ Sistema de series cargado correctamente');
console.log('📺 Series disponibles:', Object.keys(seriesData));
console.log('🎮 Funciones disponibles: abrirModal(), cerrarModal(), cargarCapitulos()');