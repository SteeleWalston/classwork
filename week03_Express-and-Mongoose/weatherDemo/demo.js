const request = require('superagent');
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.WU_API_KEY;
const zip = process.argv[2] || '97211';

if (!apiKey) {
  console.log('No API key present!');
  process.exit(1);
}

const locationurl = `http://api.wunderground.com/api/${apiKey}/conditions/q/${zip}.json`;
const weatherurl = `http://api.wunderground.com/api/${apiKey}/wu/astronomy/hourly/q/${zip}.json`;

function processWeatherData (data) {
  return {
    temperature:  data.hourly_forecast[0].temp.english,
    condition:    data.hourly_forecast[0].condition,
    windSpeed:    data.hourly_forecast[0].wspd.english,
    windDir:      data.hourly_forecast[0].wdir.dir,
    sunrise:      data.sun_phase.sunrise.hour +':'+ data.sun_phase.sunrise.minute,
    sunset:       data.sun_phase.sunset.hour +':'+ data.sun_phase.sunset.minute,
  };
}

function processLocationData (data) {
  return {
    city:       data.current_observation.display_location.city,
    state:      data.current_observation.display_location.state,
    country:    data.current_observation.display_location.country,
    elevation:  data.current_observation.display_location.elevation
  }
}

Promise.all([request.get(weatherurl), request.get(locationurl)])
  .then(results => {
    console.log(processWeatherData(results[0].body));
    console.log('-------');
    console.log(processLocationData(results[1].body));
  })
  .catch(err => {
    console.log(`Error: ${err}`);

  });


