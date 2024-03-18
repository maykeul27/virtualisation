const searchInput = document.getElementById('search-input'); // Get the search input field
const linksList = document.getElementById('links-list'); // Get the links list element

// Function to fetch data from the MySQL database
function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Parse the JSON response
                const data = JSON.parse(xhr.responseText);
                // Display the links
                displayLinks(data);
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
        }
    };
    xhr.open('GET', 'http://mysql:3306/fetch-links'); // Assuming the MySQL service is exposed on port 3306
    xhr.send();
}

// Function to display links on the webpage
function displayLinks(data) {
    linksList.innerHTML = ''; // Clear the links list
    data.forEach((link) => {
        const li = document.createElement('li'); // Create a new list item element
        const linkElement = document.createElement('a'); // Create a new link element
        linkElement.textContent = link.name; // Set the link text
        linkElement.href = link.link; // Set the link URL
        li.appendChild(linkElement); // Add the link to the list item
        linksList.appendChild(li); // Add the list item to the links list
    });
}

// Function to filter links based on search input
function filterLinks() {
    const searchTerm = searchInput.value.toLowerCase(); // Get the search term
    const filteredLinks = gitLinks.filter((link) => link.name.toLowerCase().includes(searchTerm)); // Filter links based on the search term
    displayLinks(filteredLinks); // Display the filtered links
}

// Event listener for search input
searchInput.addEventListener('input', filterLinks);

// Fetch data when the page loads
window.addEventListener('load', fetchData);