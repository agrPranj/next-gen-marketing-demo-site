/*
 * Banner Block
 * Turns raw authored HTML into a styled banner
 */

export default function decorate(block) {
  // Add a wrapper class for styling
  block.classList.add('banner');

  // Ensure heading is styled
  const heading = block.querySelector('h4');
  if (heading) {
    heading.classList.add('banner-heading');
  }

  // Style list
  const list = block.querySelector('ul');
  if (list) {
    list.classList.add('banner-list');
    list.querySelectorAll('li').forEach((li) => {
      li.classList.add('banner-item');
    });
  }
}
