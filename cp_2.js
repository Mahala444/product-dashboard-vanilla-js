function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        console.log(product.fields.name);
      });
    })
    .catch(error => {
      console.error('Fetch using .then() failed:', error);
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = ''; 
  products.slice(0, 5).forEach(product => {
    const { name, price, image } = product.fields;

    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${image[0].url}" alt="${name}" />
      <h2>${name}</h2>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(card);
  });
}

function handleError(error) {
  console.error('An error occurred:', error.message);
}

fetchProductsThen();
fetchProductsAsync();