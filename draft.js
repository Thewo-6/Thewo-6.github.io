function search() {
    // Get the user input
    var keyword = document.getElementById('searchInput').value.toLowerCase();

    // Get the list of items
    var items = document.getElementById('itemList').getElementsByTagName('a');

    // Array to store matching results
    var results = [];

    // Loop through items to find matches
    for (var i = 0; i < items.length; i++) {
        var itemText = items[i].innerText.toLowerCase();

        // Check if the keyword is present in the item text
        if (itemText.includes(keyword)) {
            results.push(items[i].href);
        }
    }

    // Display the results
    displayResults(results);
}

function displayResults(results) {
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = 'No matching results found.';
    } else {
        for (var i = 0; i < results.length; i++) {
            var resultLink = document.createElement('a');
            resultLink.href = results[i];
            resultLink.textContent = results[i];
            resultLink.target = '_blank'; // Open link in a new tab

            resultsContainer.appendChild(resultLink);
            resultsContainer.appendChild(document.createElement('br'));
        }
    }
}

/* function search() {
    var keyword = document.getElementById('userInput').value.toLowerCase();
} */

/* var buttonToAboutUs = document.getElementById("aboutUs");

buttonToAboutUs.addEventListener("click", function() {
    window.location.href = "../about.html";
}); */