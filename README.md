# 🏋️‍♂️ Bitácora de Entrenamiento - PRO

Aplicación web frontend interactiva para el registro, seguimiento y control de rutinas de acondicionamiento físico semanal. Desarrollada bajo una arquitectura limpia en 3 capas (Datos, Lógica y UI) utilizando tecnologías web nativas.

## 👥 Integrantes
* **Xamuel Romero**
* **Alexis González**

## 🚀 Características Principales (Fase 1 y Fase 2)
* **Estructura Semanal Expandida:** Rutina organizada de Lunes a Sábado (incluyendo bloque especial de Cardio).
* **Control de Progreso Individual:** Contador dinámico por día que registra los ejercicios completados en tiempo real.
* **Panel de Resumen Semanal:** Barra de progreso global interactiva que calcula el porcentaje de avance de toda la semana.
* **Sistema de Metas (Mock):** Mensaje automatizado de logro al alcanzar el objetivo de 15 ejercicios completados.
* **Material Multimedia Integrado:** Enlaces directos a videos demostrativos individuales alojados en la nube para la correcta ejecución de cada ejercicio.
* **Controles Globales:** * Botón de reinicio completo de la semana con confirmación de seguridad.
  * Temporizador de descanso de 45 segundos con alertas visuales y asistencia por voz (Text-to-Speech).
* **Diseño e Interfaz Avanzada:** * Menú lateral de navegación tipo sándwich (*Sidebar*) con desplazamiento suave (*smooth scrolling*) hacia cada día.
  * Selector de tema (*Toggle Switch*) con soporte completo para **Modo Oscuro (Dark Mode)**.
  * Diseño 100% responsivo adaptable a dispositivos móviles y de escritorio.

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructura semántica avanzada y maquetación de componentes.
* **CSS3:** Diseño de cuadrícula responsivo (CSS Grid, Flexbox), animaciones y variables dinámicas para la gestión de temas.
* **Vanilla JavaScript (ES6+):** Manipulación eficiente del DOM, arquitectura basada en estados, delegación de eventos y API nativa de síntesis de voz.

## 📋 Instrucciones para Ampliar la Plantilla Semanal
El proyecto ha sido diseñado siguiendo el principio de modularidad, aislando por completo la capa de datos. Si se desea agregar nuevos días de entrenamiento, modificar las repeticiones o cambiar las rutas de los videos demostrativos, el proceso se realiza exclusivamente en el archivo `app.js`:

1. Abra el archivo `app.js`.
2. Ubique el arreglo principal de datos denominado `weeklyRoutine`.
3. Para añadir un nuevo día, inserte un nuevo objeto dentro del arreglo respetando la siguiente estructura técnica:

```javascript
{
    id: 7, // Identificador único secuencial del día
    name: "Domingo - Descanso Activo", // Nombre visible en la cabecera de la tarjeta
    exercises: [
        { 
            id: 701, // ID único para el ejercicio (Convención: ID_DIA + Secuencial)
            name: "Estiramientos Flexibilidad", 
            details: "20 minutos de movilidad", 
            completed: false, // Debe iniciar obligatoriamente en false
            videoUrl: "URL_DE_GOOGLE_DRIVE" // Opcional (si se omite, el enlace no se renderiza)
        }
    ]
}