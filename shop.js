// ----- DATA: Products List -----
var currentFilter = 'all';


// ----- FUNCTION: Show products on page -----
function showProducts(category) 
{
    var container = document.getElementById('productsGrid');
    var html = '';

    // Loop through all products
    for (var i = 0; i < products.length; i++) 
    {
        var product = products[i];

        // Check if we should show this product
        var show = false;
        if (category == 'all') 
        {
            show = true;
        }
        if (product.category == category) 
        {
            show = true;
        }

        // If yes, add it to the page
        if (show) 
        {
            html = html + '<div class="product-card">';
            html = html + '<img src="' + product.image + '">';
            html = html + '<div class="product-info">';
            html = html + '<p class="category-tag">' + product.category + '</p>';
            html = html + '<h4>' + product.name + '</h4>';
            html = html + '<p class="price">$' + product.price + '</p>';
            html = html + '</div>';
            html = html + '<button class="buy-now-btn" onclick="buyNow(' + product.id + ')">Buy Now</button>';
            html = html + '</div>';
        }
    }

    container.innerHTML = html;
}


// FUNCTION: Filter products by category
function filterProducts(category) 
{
    currentFilter = category;
    
    // Update button styles
    var buttons = document.getElementsByClassName('filter-btn');
    for (var i = 0; i < buttons.length; i++) 
    {
        buttons[i].className = 'filter-btn';
    }
    event.target.className = 'filter-btn active';
    
    // Show filtered products
    showProducts(category);
}


//Run when page loads
showProducts('all');

