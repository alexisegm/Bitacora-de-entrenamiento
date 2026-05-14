/* =========================================
   [JS-1] MODELO MOCK (Estado de la aplicación)
   ========================================= */
// Usamos una estructura de rutinas divididas (pecho, espalda, bíceps, etc.) para simular una semana real.
const weeklyRoutine = [
    {
        id: 1,
        name: "Lunes - Pecho",
        exercises: [
            { id: 101, name: "Press de Pecho Plano", details: "4 series x 10 reps", completed: false },
            { id: 102, name: "Aperturas con Mancuernas", details: "3 series x 12 reps", completed: false }
        ]
    },
    {
        id: 2,
        name: "Martes - Espalda",
        exercises: [
            { id: 201, name: "Dominadas", details: "4 series al fallo", completed: false },
            { id: 202, name: "Remo con Barra", details: "4 series x 10 reps", completed: false }
        ]
    },
    {
        id: 3,
        name: "Miércoles - Piernas",
        exercises: [
            { id: 301, name: "Sentadillas", details: "4 series x 12 reps", completed: false },
            { id: 302, name: "Prensa", details: "4 series x 15 reps", completed: false }
        ]
    },
    {
        id: 4,
        name: "Jueves - Hombros",
        exercises: [
            { id: 401, name: "Press Militar", details: "4 series x 10 reps", completed: false },
            { id: 402, name: "Elevaciones Laterales", details: "4 series x 15 reps", completed: false }
        ]
    },
    {
        id: 5,
        name: "Viernes - Bíceps y Tríceps",
        exercises: [
            { id: 501, name: "Curl de Bíceps", details: "4 series x 12 reps", completed: false },
            { id: 502, name: "Extensión de Tríceps", details: "4 series x 12 reps", completed: false }
        ]
    }
];

/* =========================================
   [JS-2] FUNCIÓN DE RENDERIZADO INICIAL
   ========================================= */
const appContainer = document.getElementById('app-container');

function renderApp() {
    // Vaciamos el contenedor (eliminando el HTML estático de prueba)
    appContainer.innerHTML = '';

    // Iteramos sobre los días
    weeklyRoutine.forEach(day => {
        // Calculamos cuántos están completados inicialmente
        const completedCount = day.exercises.filter(ex => ex.completed).length;
        
        // Creamos la tarjeta del día
        const dayCard = document.createElement('section');
        dayCard.className = 'day-card';
        dayCard.dataset.dayId = day.id; // Guardamos el ID en el DOM para uso futuro

        // Generamos el HTML interno de la tarjeta usando Template Literals
        dayCard.innerHTML = `
            <header class="day-card-header">
                <h2 class="day-title">${day.name}</h2>
                <p class="day-progress">${completedCount} de ${day.exercises.length} completados</p>
            </header>
            <ul class="exercise-list">
                ${day.exercises.map(exercise => `
                    <li class="exercise-item ${exercise.completed ? 'is-completed' : ''}" data-exercise-id="${exercise.id}">
                        <input type="checkbox" id="ex-${exercise.id}" class="exercise-checkbox" ${exercise.completed ? 'checked' : ''}>
                        <label for="ex-${exercise.id}" class="exercise-label">
                            <span class="exercise-name">${exercise.name}</span>
                            <span class="exercise-details">${exercise.details}</span>
                        </label>
                    </li>
                `).join('')}
            </ul>
        `;

        // Añadimos la tarjeta al contenedor principal
        appContainer.appendChild(dayCard);
    });
}

/* =========================================
   [JS-3] y [JS-4] EVENTOS Y LÓGICA DE ESTADO
   ========================================= */
// Delegación de eventos: Escuchamos clics en el contenedor padre, no en cada checkbox individual
appContainer.addEventListener('change', (event) => {
    // Verificamos si lo que disparó el evento fue un checkbox de ejercicio
    if (event.target.classList.contains('exercise-checkbox')) {
        
        // 1. Identificamos los elementos del DOM afectados
        const checkbox = event.target;
        const exerciseItem = checkbox.closest('.exercise-item');
        const dayCard = checkbox.closest('.day-card');
        
        // 2. Extraemos los IDs desde los data-attributes
        const exerciseId = parseInt(exerciseItem.dataset.exerciseId);
        const dayId = parseInt(dayCard.dataset.dayId);

        // 3. Actualizamos nuestro Modelo Mock (El Estado)
        const day = weeklyRoutine.find(d => d.id === dayId);
        const exercise = day.exercises.find(ex => ex.id === exerciseId);
        exercise.completed = checkbox.checked; // Sincronizamos el estado con el checkbox

        // 4. Actualizamos la Vista (DOM)
        // Hacemos "toggle" de la clase visual según el nuevo estado
        exerciseItem.classList.toggle('is-completed', exercise.completed);
        
        // Recalculamos y actualizamos el texto de progreso de ese día específico
        const newCompletedCount = day.exercises.filter(ex => ex.completed).length;
        const progressText = dayCard.querySelector('.day-progress');
        progressText.textContent = `${newCompletedCount} de ${day.exercises.length} completados`;
    }
});

// Inicializamos la aplicación
renderApp();