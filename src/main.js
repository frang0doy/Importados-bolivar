window.addEventListener("resize", function () {
   toggleDropdown();
});

function toggleDropdown() {
   const selectElement = document.getElementById("HeadlineAct");
   const windowWidth = window.innerWidth;

   if (windowWidth <= 768) {
      // Cambia el valor 768 según tus necesidades de diseño responsivo
      selectElement.classList.remove("opacity-0");
   } else {
      selectElement.classList.add("opacity-0");
   }
}

// Llamar a toggleDropdown al cargar la página
toggleDropdown();
