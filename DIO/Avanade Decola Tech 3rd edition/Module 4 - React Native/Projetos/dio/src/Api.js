import fetch from 'node-fetch';
const BASE_URL = 'https://api.github.com/users/';

async function getUser(userName) {
  const endpoint = `https://api.github.com/users/${userName}`;
  const data = await fetch(endpoint);
  const json = await data.json();
  console.log(json);
}

getUser('knowther');
