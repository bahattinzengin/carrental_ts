import { CarType, filterType } from "../types";
// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=911&make=Porsche';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4c7546fd62msh2dcd6b97d20729ep1318ffjsn4939354ba15c',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};



export async function fetchCars(
	filters: filterType

): Promise<CarType[]> {
	const {
		make = 'Porsche',
		model = '911',
		limit = '5',
		year = '',
		fuel_type = '',
	} = filters;


	const res = await fetch
		(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`, options);
	return await res.json();

}