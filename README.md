# Where in the World?

A small, client-side country browser made with HTML, CSS, and JavaScript. The
pages fetch country data from [REST Countries](https://restcountries.com/) when
they load; there is no local country dataset.

## What currently works

- The home page renders a grid of countries with a flag, official name,
  population, region, and capital.
- Selecting a card opens `country.html?name=...`.
- The detail page shows the native name, population, region, subregion, capital,
  top-level domain, currencies, languages, and border countries.
- Border-country names link to their own detail pages.
- The button toggles the page between the two available color themes.
- The grid adapts to the available viewport width.

## Current limitations

These are limitations of the current implementation, not planned features:

- There is no search, region filter, pagination, caching, or offline support.
- `Pakistan` is deliberately removed from both listing and detail results.
- Data loading errors are only written to the browser console; the page does
  not show an error message or retry control.
- Country data, flag images, Font Awesome, and the Nunito Sans font all require
  network access.
- The project has no automated tests, build process, or package manager
  configuration.

## Run locally

The project is static, so no installation is needed. A local web server is
recommended because both pages make runtime API requests.

```bash
git clone https://github.com/def-manish/Flag-Application.git
cd Flag-Application
python3 -m http.server 8000
```

Open <http://localhost:8000> in a modern browser. Stop the server with
`Ctrl+C`.

## Files

```text
.
├── index.html       # Country listing page
├── country.html     # Country detail page
├── script.js        # Listing API request and theme toggle
├── country.js       # Detail and border-country rendering
├── style.css        # Shared and listing-page styles
├── country.css      # Country detail-page styles
└── img/
    └── wating.gif   # Loading asset
```

## REST Countries requests

The JavaScript makes these requests at runtime:

- `GET /v3.1/all?fields=name,capital,region,population,flags`
- `GET /v3.1/name/{country}?fullText=true`
- `GET /v3.1/alpha?codes={borders}&fields=name`

The API response is not bundled or modified beyond removing Pakistan from the
displayed results. The application expects a browser with `fetch`,
`URLSearchParams`, template literals, and CSS Grid/Flexbox support.

## License

This project is distributed under the terms of the [MIT License](LICENSE).
