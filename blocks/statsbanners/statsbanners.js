export default function decorate(block) {
  // Add base class
  block.classList.add('stats-container');

  // Loop through each child (stat item)
  const rows = block.querySelectorAll(':scope > div');

  rows.forEach((row) => {
    row.classList.add('stat-item');

    // First child = value
    const valueEl = row.children[0];
    if (valueEl) {
      valueEl.classList.add('stat-number');
      valueEl.setAttribute('data-aue-prop', 'value');
      valueEl.setAttribute('data-aue-type', 'text');
    }

    // Second child = description
    const labelEl = row.children[1];
    if (labelEl) {
      labelEl.classList.add('stat-label');
      labelEl.setAttribute('data-aue-prop', 'description');
      labelEl.setAttribute('data-aue-type', 'text');
    }

    // Ensure Universal Editor resource binding
    if (!row.hasAttribute('data-aue-resource')) {
      row.setAttribute('data-aue-resource', 'urn:aemconnection:');
    }
  });

  // Block container metadata for Universal Editor

  block.setAttribute('data-aue-resource', 'urn:aemconnection:/content/insurance-poc/us/en/home-page/jcr:content/root/container_222319304/statsbanner');
  
  block.setAttribute('data-aue-type', 'container');
  