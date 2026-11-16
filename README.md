# Banner promocional de la newsletter de Vueling

Ejercicio de JavaScript vanilla que plantea la creación dinámica de un banner emergente para promocionar la newsletter de Vueling. La práctica simula una tarea de optimización de la conversión (CRO), experimentación A/B o personalización web, sin modificar los archivos originales del sitio.

> **Proyecto educativo.** Esta práctica no está afiliada ni respaldada por Vueling. El formulario es una interfaz de demostración: la suscripción debe realizarse en la página oficial de la newsletter.

## Objetivo

Crear un único archivo JavaScript que genere el contenido y los estilos del *pop-up* directamente en el DOM. La propuesta debe integrarse visualmente con la identidad de Vueling y poder ejecutarse desde la consola de DevTools en la página principal.

## Requisitos de la práctica

- Mostrar una invitación a suscribirse, con un título y un texto breve sobre las ventajas de la newsletter.
- Incluir un campo para introducir el correo electrónico; se valora la validación básica de su formato.
- Incorporar una llamada a la acción hacia la [página oficial de la newsletter de Vueling](https://www.vueling.com/es/servicios-vueling/mas-servicios-vueling/newsletter-vuela).
- Permitir cerrar el banner mediante un botón visible.
- Crear el marcado y los estilos desde JavaScript, sin archivos HTML o CSS separados.
- Mostrar el banner **3 segundos** después de ejecutar el script y animarlo suavemente desde el lateral derecho. La transición CSS debe configurarse desde JavaScript.
- Evitar que el banner se duplique si el script se ejecuta más de una vez.
- Mantener una presentación legible y coherente con la identidad visual de Vueling, utilizando sus colores corporativos y bordes redondeados.

## Uso

1. Abre la [página principal de Vueling](https://www.vueling.com/es).
2. Abre las herramientas de desarrollador del navegador y selecciona la consola.
3. Revisa el contenido de `bannerVueling.js` antes de ejecutarlo y pega el código en la consola.
4. Espera 3 segundos para comprobar la aparición del banner.
5. Prueba el cierre, el campo de correo y el enlace de la llamada a la acción.

El proyecto no requiere dependencias ni herramientas de compilación: está planteado para ejecutarse como JavaScript en el navegador.

## Entregables

### Código

`bannerVueling.js`: archivo JavaScript independiente, listo para copiar y ejecutar en la consola de DevTools. No se deben entregar archivos `.html` ni `.css` por separado.

### Vídeo explicativo

Grabación de pantalla con voz, de **3 a 5 minutos**, que explique con palabras propias:

1. La estructura del código y cómo se inyectan los estilos y el contenido en el DOM.
2. El temporizador de 3 segundos y la animación de entrada desde la derecha.
3. Una demostración en vivo de la ejecución del script en la página de Vueling.

## Criterios de evaluación

- **Fidelidad visual:** colores, tipografía, espaciado y legibilidad.
- **Calidad del código:** uso claro de variables y funciones, y prevención de duplicados.
- **Cumplimiento técnico:** temporización, transición y destino correctos de la llamada a la acción.
- **Explicación:** claridad al justificar las decisiones y demostrar el funcionamiento.

## Alcance

El enlace de la llamada a la acción dirige al sitio oficial de Vueling. La práctica no implementa por sí misma el envío del correo ni una suscripción real.
