export const BASE_URL = 'http://localhost:5000/api';
export const titleApp = "CiNEMA";
export const createYearList =() => {
	let arrayYear = [];
	for (let year = 1900; year < (new Date().getFullYear()-10); year++) {
		arrayYear.push(year)
	}
	return arrayYear
};
export const posters =[
	{ id: 1, url: "https://pluggedin.ru/images/upload/1655926482.jpg", alt: 'poster' },
	{	id: 2, url: "https://www.combook.ru/imgrab/0068/9785041165246.jpg", alt: 'poster' },
	{ id: 3, url: "https://www.themoviedb.org/t/p/original/9AhKm1JP67ZvuUTCmYs3SVlHm0c.jpg", alt: 'poster' },
	{	id: 4, url: "https://xage.ru/media/uploads/2017/08/thor_ragnarok_04_01.jpg", alt: 'poster' },
	{	id: 5, url: "https://poster4.me/wp-content/uploads/2020/01/mstiteli_9.jpg", alt: 'poster' },
	{	id: 6, url: "https://xage.ru/media/uploads/2008/2/posteryi-luchshih-filmov-poluchivshih-oskar/posteryi-luchshih-filmov-poluchivshih-oskar_1.jpg", alt: 'poster' },
	{	id: 7, url: "https://megaobzor.com/uploads/stories/66059/poster40933_1.jpg", alt: 'poster' },
];
export const emptyMovie = {
	title: '',
	release_year: '',
	genre: '',
	studios: '',
	poster: '',
	actors: [''],
	directors: [''],
}
export const emptyActor = {
	movies: [''],
	full_name: '',
	birth_year: '',
	death_year: '',
	nationality: '',
	foto:''
}
export const emptyDirector = {
	movies: [''],
	full_name: '',
	birth_year: '',
	nationality: '',
	foto:''
}
export const emptyStudio = {
	title: '',
	location: '',
	foundationYear: '',
	movies: [''],
	logo: ''
}
export const nationalities = [
	'United States of America',
	'Great Britain',
	'Ukraine',
	'Deutschland',
	'France',
	'Australia',
	'Belgium',
	'Brazil',
	'Georgia',
	'Denmark',
	'Israel',
	'India',
	'Ireland',
	'Italy',
	'Canada',
	'China',
	'Korea, Republic of',
	'Latvia',
	'Lithuania',
	'Netherlands',
	'Norway',
	'Poland',
	'Portugal',
	'Turkey',
	'Czech Republic',
	'Switzerland',
	'Estonia',
	'Japan',
	'New Zealand',
	'Puerto Rico',
	'Malta',
	'Benin',
	'Sweden',
	'Finland',
	'Russian',
	'Iceland'
]
export const locations = [
	'San Francisco',
	'Los Angeles',
	'Culver City',
	'Universal City',
	'London',
	'Burbank',
	'Toronto',
]

export const genres = [
	'Fantazy',
	'Action',
	'Drama',
	'Western',
	'Horror',
	'Documentary',
	'Thriller',
	'Comedy',
	'Adventure',
	'Anime',
	'Science fiction',
	'Historic',
	'Serial',
	'Biopic',
	'Melodrama',
	'Music',
	'Peplum',
	'Crime film',
]

export const studios = [
	'Lucasfilm Ltd. LLC',
	'20th Century Studios, Inc.',
	'Columbia Pictures',
	'New Line Cinema',
	'Universal Studio',
	'Scott Free Productions',
	'Paramount Pictures Corporation',
	'Walt Disney Pictures',
	'Corus Entertainment',
]




