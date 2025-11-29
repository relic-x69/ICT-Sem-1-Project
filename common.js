// Product Data - Shared across all pages
const products = 
[
    { id: 1, name: "Naruto Shippuden Hoodie", category: "apparel", price: 59.99, image: "https://th.bing.com/th/id/OIP.IqIT9jsJZZE0FdqaUwBkYgHaKV?w=137&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 2, name: "Black Clover Hoodie", category: "apparel", price: 29.99, image: "https://th.bing.com/th/id/OIP.-DBm6qGb2ihySGluYPPJegHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 3, name: "Demon Slayer Jacket", category: "apparel", price: 89.99, image: "https://th.bing.com/th/id/OIP.psSN-xPGTgo8k0hFMWi1ZwHaHa?w=195&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 4, name: "One Piece Cap", category: "apparel", price: 24.99, image: "https://th.bing.com/th/id/OIP.c0m_lxV53z9qOiov96Jx5QAAAA?w=171&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 6, name: "Goku Super Saiyan Statue", category: "figures", price: 199.99, image: "https://th.bing.com/th/id/OIP.36WlLhuv0njPtdCuO3IOVAHaJQ?w=173&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 7, name: "One Piece Figure", category: "figures", price: 129.99, image: "https://th.bing.com/th/id/OIP.S0NoRrrjOLZU-L-txFbfEQHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 8, name: "Eren Yeager Collectible", category: "figures", price: 179.99, image: "https://th.bing.com/th/id/OIP.w_vdUesAPnSUOZUuNoqpcwHaEK?w=328&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 9, name: "Jujutsu Kaisen Pins Set", category: "accessories", price: 19.99, image: "https://th.bing.com/th/id/OIP.jD1bAwX7Dw0TtKn1WHX32AHaGO?w=217&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 10, name: "Konoha Village Keychain", category: "accessories", price: 12.99, image: "https://th.bing.com/th/id/OIP.joL6XJw2KcgMmkEMTHR4TgHaHa?w=192&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 11, name: "Anime Phone Case", category: "accessories", price: 34.99, image: "https://th.bing.com/th/id/OIP.aziel2kr3QNfuEcmIFOQqAHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 12, name: "Naruto Poster Set", category: "accessories", price: 29.99, image: "https://th.bing.com/th/id/OIP.YtZwvstnCws9X47ENn_Q4wHaJ_?w=208&h=281&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
];

var selectedProduct = null;

// FUNCTION: BUY NOW - Shows confirmation popup

function buyNow(id) 
{
    
    // Find the product by id
    for (var i = 0; i < products.length; i++) 
    {
        if (products[i].id == id) 
        {
            selectedProduct = products[i];
        }
    }
    
    // Show the product name and price in popup
    document.getElementById('productName').innerHTML = selectedProduct.name;
    document.getElementById('productPrice').innerHTML = '$' + selectedProduct.price;
    
    // Open the confirmation popup
    document.getElementById('buyModal').style.display = 'flex';
}

// FUNCTION: CONFIRM PURCHASE

function confirmPurchase() 
{
    
    // Hide the buy popup
    document.getElementById('buyModal').style.display = 'none';
    
    // Show success popup
    document.getElementById('successModal').style.display = 'flex';
}

// FUNCTION: CANCEL PURCHASE

function cancelPurchase() 
{
    
    // Hide the buy popup
    document.getElementById('buyModal').style.display = 'none';
}

// FUNCTION: CLOSE SUCCESS POPUP

function closeSuccess() 
{
    
    // Hide success popup
    document.getElementById('successModal').style.display = 'none';
}
