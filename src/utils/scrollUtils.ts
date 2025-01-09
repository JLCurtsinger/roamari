export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = 64; // Height of the fixed navigation bar
    const sectionPosition = section.offsetTop - navHeight;
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  }
};