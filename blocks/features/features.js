export default function decorate(block) {
  // Example: Fade in effect
  block.querySelectorAll('div').forEach((card) => {
    card.style.opacity = '0';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease';
      card.style.opacity = '1';
    }, 100);
  });
}