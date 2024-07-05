// Basic front-end validation and local storage handling



document.addEventListener('DOMContentLoaded', function () {
    // Example properties
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginLogoutButton = document.getElementById('login-logout');
    const registerLink = document.getElementById('register-link');

    if (loggedInUser) {
        // If user data exists, change Login to Logout
        loginLogoutButton.textContent = 'Logout';
        registerLink.style.display = 'none'; // Hide the Register link
    } else {
        // If user data doesn't exist, keep Login button and show Register link
        loginLogoutButton.textContent = 'Login';
        registerLink.style.display = 'a';
    }

    // Add event listener for Login/Logout functionality
    loginLogoutButton.addEventListener('click', function() {
        if (loggedInUser) {
            // If logged in, clear localStorage (logout)
            localStorage.removeItem('loggedInUser');
            window.location.href = 'index.html'; // Redirect to homepage after logout
        } else {
            // Redirect to the login page if not logged in (optional)
            window.location.href = 'login.html';
        }
    });
    
    const properties = [
        { id:'1', address: '123 Main St', price: '$300,000', available: true, imageUrl: 'D:\MCA\DDU\SEM1\WEB DESIGNING\TermWork\HET\image\property1.jpg' },
        { id:'2', address: '456 Elm St', price: '$350,000', available: false, imageUrl: 'D:\MCA\DDU\SEM1\WEB DESIGNING\TermWork\HET\image\property2.jpg' },
        // Existing properties...
        // New properties...
        { id:'3', address: '789 Oak St', price: '$320,000', available: true, imageUrl: 'D:\MCA\DDU\SEM1\WEB DESIGNING\TermWork\HET\image\property1.jpg' },
        { id:'4', address: '101 Pine St', price: '$360,000', available: false, imageUrl: 'D:\MCA\DDU\SEM1\WEB DESIGNING\TermWork\HET\image\property2.jpg' },
        // Continues for 50 more entries...
    ];
    
    for (let i = 3; i <= 12; i++) {
        properties.push({
            id:`${i+2}`,
            address: `${i*100} Example St`,
            price: `$${300 + (i%20)*10},000`,
            available: i % 2 === 0,
            imageUrl: i % 2 === 0 ? 'D:\MCA\DDU\SEM1\WEB DESIGNING\TermWork\HET\image\property1.jpg' : 'D:\MCA\DDU\SEM1\WEB DESIGNING\TermWork\HET\image\property2.jpg'
        });
    }
    

    // Populate property listings
    const propertyListing = document.getElementById('propertyListing');
    properties.forEach(prop => {
        const div = document.createElement('div');
        div.className = 'propertyItem';
        div.innerHTML = `
            <a href="property_info.html?id=${encodeURIComponent(prop.id)}">
                <img src="${prop.imageUrl}" alt="Property" class="propertyImage">
                <h3>${prop.address}</h3>
                <p>${prop.price}</p>
                <p class="${prop.available ? 'available' : 'not-available'}">${prop.available ? 'Available' : 'Not Available'}</p>
            </a>`;
        propertyListing.appendChild(div);
    });
});

// Add more sophisticated login/register handling and local storage checks as needed
