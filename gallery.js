function toggleCategory(categoryId) {
    const sections = document.querySelectorAll(".gallery-section");
    sections.forEach((section) => {
        if (section.id === categoryId) {
            section.classList.toggle("show");
        } else {
            section.classList.remove("show");
        }
    });
}