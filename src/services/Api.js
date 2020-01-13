const CHARACTERLIST = 'https://rickandmortyapi.com/api/character/';
const CHARACTERINFO = 'https://rickandmortyapi.com/api/character/'

const fetchCharacters = () => fetch(CHARACTERLIST).then(response => response.json());

const fetchDetail = (id) => fetch(CHARACTERINFO + id).then(response => response.json());

export { fetchCharacters, fetchDetail };