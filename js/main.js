let mainBox = document.getElementsByClassName('gallery')[0];

fetch('https://dummyjson.com/products')
    .then(value => value.json())
    .then(response => {
        let products = response.products;
        for (const product of products) {
            let productBox = document.createElement('div');
            let productImg = document.createElement('img');
            let productTitle = document.createElement('h2');
            let productDescription = document.createElement('p');
            let productPrice = document.createElement('span');
            let productButton = document.createElement('button');

            productImg.src = product.images[0];
            productTitle.innerText = product.title;
            productDescription.innerText = product.description;
            productPrice.innerText = 'price: $' + product.price;
            productButton.innerText = 'add';

            productBox.append(productImg);
            productBox.append(productTitle);
            productBox.append(productDescription);
            productBox.append(productPrice);
            productBox.append(productButton);
            mainBox.append(productBox);
        }
    })