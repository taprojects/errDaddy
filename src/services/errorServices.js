import tagify from '../functions/tagify';

const API_HOST = 'localhost:7891';

export function fetchErrors(searchTerm) {
  return fetch(`http://${API_HOST}/api/v1/error/${searchTerm}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
} 

export function fetchErrorDetail(errId) {
  return fetch(`http://${API_HOST}/api/v1/error/detail/${errId}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
} 

export function sendNewError({ title, description, solution, tagList }) {
  const tags = tagify(tags);
  console.log(tagList);
  tags.toLowerCase();
  return fetch(`http://${API_HOST}/api/v1/error`, {
    method: 'POST',
    body: JSON.stringify({ title, description, solution, tags }),
    headers:{
      'Content-Type': 'application/json'
    } })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
}

export function fetchAllTags() {
  return fetch(`http://${API_HOST}/api/v1/error/allTags`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    })
    .then(stuff => {
      return stuff;
    });
}
