# steevidz

A Steeple technical test to search movies on TMDB API by title and release year.

## Made with
<img src="https://cdn.iconscout.com/icon/free/png-256/vuejs-3-1175070.png" width="100" size="auto" alt="Vue2">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1200px-Nuxt_logo.svg.png" width="100" size="auto" alt="Nuxt2">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" width="100" height="100" size="auto" alt="Tailwind">
<img src="https://axios-http.com/assets/logo.svg" width="100" height="100" size="auto" alt="Axios">

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Environment variables
Copy as follow in a `.env` file
```
TMDB_URL=https://api.themoviedb.org/3/
TMDB_IMG_BASE_PATH=https://image.tmdb.org/t/p/
TMDB_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWUxNjFjM2Q2YTczYzFiYWRmNjRiODAxN2RkODBlNCIsInN1YiI6IjYyZjIyNzIwMTUxMWFhMDA3ZDQyODRjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KLXn1jHj49w417T36NxE0NENwVQ3Htaqz-5awc_NnkI
```

## Must have
* An infinite scroll rather than pagination
* An input validation logic (as vee-validate):
  * set up error message on validation
  * ensure date value is in valid range
* Manage TMDB API error code
* CSS animation and skeleton in order to replace spinner loader