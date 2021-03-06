let data = require('./data/data.json');

const randomNum = () => {
	return Math.floor(Math.random() * data.length);
};

// Get a random country
const getRandomCountry = () => {
	let randNum = randomNum();
	return data[randNum].country;
};

// Get data of N countries
const getNRandomCountriesData = (count) => {
	let randomCountriesArray = [];
	let randomCountriesSet = new Set(); // to prevent duplicate countries
	while (randomCountriesArray.length < count) {
		let country = data[randomNum()];
		if (!randomCountriesSet.has(country)) {
			randomCountriesArray.push(country);
		}
	}
	return randomCountriesArray;
};

// Helper function
const getCountriesByObject = (value, obj) => {
	let resultArray = [];
	value = value.toLowerCase();
	object = obj;
	data.forEach((item) => {
		item[object] = item[object].toLowerCase();
		if (item[object] && item[object].includes(value)) {
			resultArray.push(item);
		}
	});

	return resultArray;
};

// Get details of a country by the capital name
const getCountryDetailsByCapital = (capital) => {
	return getCountriesByObject(capital, 'capital');
};

// Get details of a country by the country name
const getCountryDetailsByName = (country) => {
	return getCountriesByObject(country, 'country');
};

// Get country details by the language spoken
const getCountiesByLanguage = (languageSpoken) => {
	return getCountriesByObject(languageSpoken, 'native_language');
};

// Get details of all countries
const getAllCountryDetails = () => {
	return data;
};

// Get all countries Name
const getAllCountries = () => {
	return data.map(({ country }) => country);
};

module.exports = {
	getRandomCountry,
	getNRandomCountriesData,
	getCountryDetailsByCapital,
	getCountryDetailsByName,
	getAllCountryDetails,
	getAllCountries,
	getCountiesByLanguage,
};
