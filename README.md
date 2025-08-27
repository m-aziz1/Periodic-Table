# Interactive Chemistry 30 Data Booklet

This project is a dynamic, web-based version of the Alberta Chemistry 30 data booklet, created as a side project in high school at the request of my chemistry 30 teacher. It was designed to provide students with a convenient digital alternative to the physical booklet, ensuring they always have access to essential data for their coursework in case they lost or forgot their booklet at home.

**[View the Live Demo Here](https://m-aziz1.github.io/Periodic-Table/)**

## Features
The application features an interactive periodic table and a searchable viewer for all other data pages, built to match the specifications provided by my Chemistry 30 teacher.

* **Interactive Periodic Table:** A color-coded grid of all elements, generated dynamically with JavaScript.
* **Detailed Element Information:** Clicking on any element opens a detailed table with key information, such as atomic mass, density, melting/boiling points, and common charges.
* **Full Data Booklet Viewer:** Includes high-resolution images of every page from the official data booklet, such as the table of polyatomic ions, acid-base indicators, and standard electrode potentials.
* **Live Page Search:** A search bar allows students to instantly filter the data booklet pages by keyword or page number to find the information they need quickly.

## Screenshots

<p align="center">
  <img src="https://github.com/m-aziz1/Periodic-Table/blob/main/assets/element-data.gif" alt="Interactive Periodic Table" width="70%" />
</p>
<p align="center">
  <img src="https://github.com/m-aziz1/Periodic-Table/blob/main/assets/searchable-data-booklet.gif" alt="Searchable Data Booklet Pages" width="70%" />
</p>

## Technical Implementation

* **Core Technologies:** HTML5, CSS3, and Vanilla JavaScript (ES6). No external frameworks or libraries were used.
* **Data Handling:** Element data is fetched asynchronously from a local `data.json` file using the browser's `Fetch API`. The JavaScript then parses this data to build the table.
* **Dynamic DOM Manipulation:** The entire periodic table grid, element tiles, and the detailed information pop-ups are generated programmatically using JavaScript. This allows the table to be constructed directly from the source data file.
* **Interactive UI & Search:** The live search functionality for the data booklet pages is powered by an event listener that filters the displayed pages in real-time by toggling a CSS class, providing instant feedback without reloading the page.
* **Styling and Layout:** The application uses modern CSS for its structure and appearance, including CSS Grid for the periodic table layout, hover effects for interactivity and media queries for basic responsiveness on different screen sizes.

While my coding practices have evolved considerably since I created this project, I was quite happy with the small impact it had in improving classes for students at my school
