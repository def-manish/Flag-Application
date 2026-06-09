
const countriesContainer = document.querySelector('.country-details')    

const params = new URLSearchParams(window.location.search);
const countryName = params.get('name')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(response => response.json())
    .then(data => {
        const blockedCountries = ['Pakistan']
        data = data.filter(country => !blockedCountries.includes(country.name.common));
        //const country = data.find((country) => country.name.common === countryName)
        const country = data[0]
        if (country.borders && country.borders.length > 0) {
          fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}&fields=name`)
              .then(response => response.json())
              .then(borderCountries => {
                   const borderCountryNames = borderCountries.map(c => c.name.common);
                   renderCountryDetails(country, borderCountryNames);
              });
      } else {
          renderCountryDetails(country, []);
      }
    })
    .catch(error => console.error('Error fetching country data:', error));         
    
  function renderCountryDetails(country, borderCountryNames) {


        if (!country) {
            console.error('Country not found')
            return
        }
        const countryCard = document.createElement('div')
        countryCard.classList.add('country-details')
        let bordersHTML = '<p>No Bordering Countries:</p>'
        if (borderCountryNames.length > 0) {
          const borderLinks = borderCountryNames.map(name => `<li><a href="country.html?name=${encodeURIComponent(name)}" class="border-country">${name}</a></li>`).join('')
          bordersHTML = `
            <ul>
              ${borderLinks}
            </ul>
          `
        }
        

            const cardHtML = `
                    <a href="index.html" class="back-button">&nbsp;Back</a>&nbsp;&nbsp;
                      <img src="${country.flags.svg}" alt="${country.name.common} Flag" class="country-flag">
                        <div class="country-info">
                          <h2 class="country-name">${country.name.common}</h2>
                            <p><strong>Native Name:</strong> ${country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A'}</p>
                            <p><strong>Population:</strong> ${country.population ? country.population.toLocaleString('en-IN') : 'N/A'}</p>
                            <p><strong>Region:</strong> ${country.region ? country.region : 'N/A'}</p>
                            <p><strong>Sub Region:</strong> ${country.subregion ? country.subregion : 'N/A'}</p>
                            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                            <p><strong>Top Level Domain:</strong> ${country.tld ? country.tld[0] : 'N/A'}</p>
                            <p><strong>Currencies:</strong> ${country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
                            <p><strong>Languages:</strong> ${country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                         </div>
                       <div class="border-countries">
                         <p><strong>Bordering Countries:</strong></p>
                         ${bordersHTML}
                    
                </div>
          
`
             countryCard.innerHTML = cardHtML
             countriesContainer.append(countryCard)
        }

// dark mode toggle
function myFunction() {
    document.body.classList.toggle('dark-mode');
}   

        