// Assuming you're passing the address as a query parameter

// properties.js - This file will contain the array of property objects.
const properties = [
    {
        id: 1,
        image: 'D:\MCA\DDU\SEM1\WEB DESIGNING\TermWork\HET\image\property1.jpg',
        fullAddress: '123 Main St, Cityville, State 12345',
        contact: 'John Doe | 123-456-7890 | johndoe@email.com',
        available: true,
        otherInfo: '4 bed, 3 bath, 2500 sqft, recently renovated kitchen, large backyard.'
    },
    {
        id: 2,
        image: 'D:\MCA\DDU\SEM1\WEB DESIGNING\TermWork\HET\image\property2.jpg',
        fullAddress: '456 Elm St, Townsville, State 67890',
        contact: 'Jane Smith | 987-654-3210 | janesmith@email.com',
        available: false,
        otherInfo: '3 bed, 2 bath, 1800 sqft, includes swimming pool and solar panels.'
    },
    // Add additional properties as needed
    // ...
];

// Export properties if using modules (for modern JS environments)
// export default properties;


document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const propertyId = params.get('id');
    const property = properties.find(p => p.id == propertyId); // Use == to coerce type as needed

    if (property) {
        document.getElementById('propertyInfo').innerHTML = `
            <div class="propertyItem">
                <img src="${property.image}" alt="Property Image" class="propertyInfoImage">
                <h2>Address: ${property.fullAddress}</h2>
                <p>Contact: ${property.contact}</p>
                <p>Details: ${property.otherInfo}</p>
                <p class="${property.available ? 'available' : 'not-available'}">${property.available ? 'Available' : 'Not Available'}</p>
            </div>`;
    } else {
        document.getElementById('propertyInfo').innerHTML = "<p>Property details not found.</p>";
    }
});
