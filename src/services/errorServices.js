import tagify from '../functions/tagify';


// eslint-disable-next-line no-undef
const API_HOST = process.env.API_URL;

export function fetchErrors(searchTerm) {
  return fetch(`${API_HOST}/api/v1/error/${searchTerm}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
} 

export function fetchErrorDetail(errId) {
  return fetch(`${API_HOST}/api/v1/error/detail/${errId}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
} 

export function sendNewError({ title, description, solution, tags : tagList }) {
  const tags = tagify(tagList);
  return fetch(`${API_HOST}/api/v1/error`, {
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
  return fetch(`${API_HOST}/api/v1/error/allTags`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    })
    .then(stuff => {
      return stuff;
    });
}

export function updateQuality(goodOrBad, id) {
  return fetch(`${API_HOST}/api/v1/error/${goodOrBad}/${id}`, {
    method: 'PATCH',
    headers:{
      'Content-Type': 'application/json'
    } })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    })
    .then(stuff => {
      return stuff;
    });
}
