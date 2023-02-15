# `The WaterWitch Map`<br/><h2>Locate Potable Water in NYC!</h2>

## `Overview`

<h3>The most challenging part about living in a van in NYC? </h3>
<p>
Finding potable water to fill jugs and tanks that range from 1-20+ gallons.
<br/>
This app aims to solve that problem by vetting and mapping potable water sources.
<br/>
Written in React and Python as a Capstone Project at <a href='https://adadevelopersacademy.org/'>Ada Developers Academy.</a>
</h4>

<h2> App Link:
<a href='https://waterwitch.herokuapp.com/'>WaterWitch Map</a></h2>

</p>
<h3 align="left">Languages and Tools Used To Create This Project:</h3>
<p align="left"> <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://grafana.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" alt="grafana" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://leafletjs.com/" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/353991/leaflet.svg" alt="leaflet" width="60" height="60"/> </a></p>

## App Features

- **Interactive Map** The page will load with all water sources currently in the Database..
- [**Desktop Version Only**] This will run on both desktop and phone but is not optimized for phone... yet.
- Map will automatically load your current location with geo-coordinates, unless you have your web browsers location turned off.
- **Menu** to navigate between Map, Instructions, Filters, Search Address, Add Water Location Form.
- Though all water assets are in a private database, the address search bar is using the [**LocationIQ API**](https://locationiq.com/docs).
- The markers require latitude and longitude coordinates. Copy and paste them from either your current location marker's popup, or from the search bar results. Markers can not be plotted without geocoordinates.

## Installation/Environment Set-Up

- Clone this repository.
- Yarn - this is needed in order to access the Yarn Package Manager.
- run `yarn` in the terminal
- Install dependencies by running `yarn install -r requirements.txt`.
- My app has a backend DB which I am currently not listing here, so you will see an empty map, and just a black marker that represents your current location and geo-coordinates.
- To start the server run `yarn start`. To kill the server `control + C`
- Better and more thorough documentation to come as this app evolves.
