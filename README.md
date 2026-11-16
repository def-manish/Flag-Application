# Where in the World?

Where in the World? is a responsive country browser built with HTML, CSS, and JavaScript. It loads country data from the [REST Countries API](https://restcountries.com/) and lets users open a detailed view for each available country.

## Features

- Displays countries in a responsive card grid
- Shows each country's flag, official name, population, region, and capital
- Provides a detailed country page with native name, subregion, top-level domain, currencies, languages, and neighboring countries
- Links neighboring countries to their own detail pages
- Includes a light/dark theme toggle
- Uses responsive layouts for desktop and mobile screens
- Excludes Pakistan from the listing and country detail results

The application does not currently include search, filtering, sorting, or pagination controls.

## Getting started

This project has no build step or package-manager dependencies; it uses browser JavaScript and CDN-hosted libraries/assets.

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

Open a country detail page by selecting a country card, or directly use
`country.html?name=France` with a URL-encoded country name.

## Project structure

```text
.
├── index.html       # Country listing page
├── country.html     # Country detail page
├── script.js        # Country listing API request, loading state, and theme toggle
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

An internet connection is required to load country data, external fonts/icons, and jQuery from their CDNs.

## Browser support

Use a modern browser with support for `fetch`, `URLSearchParams`, template literals, and CSS Grid/Flexbox.

## License

This project is distributed under the terms of the [MIT License](LICENSE).
