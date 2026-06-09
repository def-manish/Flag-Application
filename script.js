
jQuery('#loading').show();
//jQuery(document).ready(function() {
 //   jQuery('#loading').fadeOut(10000);

//});

const countriesContainer = document.querySelector('.countries-container')    

fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags')
    .then(response => response.json())
    .then(data => {
        const blockedCountries = ['Pakistan']
        data = data.filter(country => !blockedCountries.includes(country.name.common))
        data.forEach((country) => {
            //console.log(country.flags.svg);
            const countryCard = document.createElement('a')
            countryCard.classList.add('country-card')

            const cardHtML = `
            <a href="country.html?name=${country.name.common}" class="country-card">
                  <img src="${country.flags.svg}" alt="${country.name.common} Flag" >
        
                  <div class="country-info">
                       <h3 class="country-name">${country.name.official}</h3>
                       <p><strong>Population:</strong> ${country.population.toLocaleString('en-IN')}</p>
                       <p><strong>Region:</strong> ${country.region}</p>
                       <p><strong>Capital:</strong> ${country.capital}</p>
                  </div>
             </a>     
`
             countryCard.innerHTML = cardHtML
             countriesContainer.append(countryCard)
        })
        jQuery('#loading').fadeOut(500);
   })
   
   .catch(error => {
    console.log('Error:', error);
    jQuery('#loading').fadeOut(500);
   });

// Dark Mode Toggle
function myFunction() {
    document.body.classList.toggle('dark-mode');
}

//Loading Animation
