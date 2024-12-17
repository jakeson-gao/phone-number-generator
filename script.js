document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const countrySelect = document.getElementById('country-select');
    const quantityInput = document.getElementById('quantity');
    const resultDiv = document.getElementById('result');
    const languageSelect = document.getElementById('language-select');

    generateBtn.addEventListener('click', generatePhoneNumbers);
    languageSelect.addEventListener('change', changeLanguage);

    function generatePhoneNumbers() {
        const country = countrySelect.value;
        const quantity = parseInt(quantityInput.value);

        if (quantity < 1 || quantity > 100) {
            alert('Please enter a quantity between 1 and 100.');
            return;
        }

        const phoneNumbers = [];
        for (let i = 0; i < quantity; i++) {
            phoneNumbers.push(generatePhoneNumber(country));
        }

        displayPhoneNumbers(phoneNumbers);
    }

    function generatePhoneNumber(country) {
        let phoneNumber = '';
        switch (country) {
            case 'us':
                phoneNumber = '+1 ' + Math.floor(Math.random() * 900 + 100) + '-' + 
                              Math.floor(Math.random() * 900 + 100) + '-' + 
                              Math.floor(Math.random() * 9000 + 1000);
                break;
            case 'uk':
                phoneNumber = '+44 ' + Math.floor(Math.random() * 900 + 100) + ' ' + 
                              Math.floor(Math.random() * 9000 + 1000) + ' ' + 
                              Math.floor(Math.random() * 9000 + 1000);
                break;
            case 'ca':
                phoneNumber = '+1 ' + Math.floor(Math.random() * 900 + 100) + '-' + 
                              Math.floor(Math.random() * 900 + 100) + '-' + 
                              Math.floor(Math.random() * 9000 + 1000);
                break;
            case 'au':
                phoneNumber = '+61 ' + Math.floor(Math.random() * 9 + 2) + ' ' + 
                              Math.floor(Math.random() * 9000 + 1000) + ' ' + 
                              Math.floor(Math.random() * 9000 + 1000);
                break;
        }
        return phoneNumber;
    }

    function displayPhoneNumbers(phoneNumbers) {
        resultDiv.innerHTML = '<h3>Generated Phone Numbers:</h3>';
        const ul = document.createElement('ul');
        phoneNumbers.forEach(number => {
            const li = document.createElement('li');
            li.textContent = number;
            ul.appendChild(li);
        });
        resultDiv.appendChild(ul);
    }

    function changeLanguage() {
        const selectedLanguage = languageSelect.value;
        window.location.href = `../${selectedLanguage}/index.html`;
    }
});

