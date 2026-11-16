# Where in the World?

Where in the World? is a responsive country browser built with HTML, CSS, and vanilla JavaScript. It loads country data from the [REST Countries API](https://restcountries.com/) and lets users open a detailed view for each country.

## Features

- Displays countries in a responsive card grid
- Shows each country's flag, official name, population, region, and capital
- Provides a detailed country page with native name, subregion, domains, currencies, languages, and neighboring countries
- Links neighboring countries to their own detail pages
- Includes a light/dark theme toggle
- Uses responsive layouts for desktop and mobile screens

## Getting started

This project has no build step or package dependencies.

1. Clone the repository:

   ```bash
   git clone https://github.com/def-manish/Flag-Application.git
   cd Flag-Application
   ```

2. Serve the project with a local web server. For example, with Python:

   ```bash
   python3 -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in a browser.

Opening `index.html` directly may work in some browsers, but a local server is recommended for consistent API and asset loading.

## Project structure

```text
.
├── index.html       # Country listing page
├── country.html     # Country detail page
├── script.js        # Country listing API request and theme toggle
├── country.js       # Country detail and border-country rendering
├── style.css        # Shared and listing-page styles
├── country.css      # Country detail-page styles
└── img/
    └── wating.gif   # Loading image asset
```

## API usage

The application requests data from REST Countries at runtime:

- `https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags`
- `https://restcountries.com/v3.1/name/{country}?fullText=true`
- `https://restcountries.com/v3.1/alpha?codes={borders}&fields=name`

An internet connection is required to load country data and external fonts/icons.

## Browser support

Use a modern browser with support for `fetch`, `URLSearchParams`, template literals, and CSS Grid/Flexbox.

## License

This project is distributed under the terms of the [MIT License](LICENSE).
