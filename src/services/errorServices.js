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

export function sendNewError({ title, errCode, description, solution, tags }) {
  return fetch(`http://${API_HOST}/api/v1/error`, {
    method: 'POST',
    body: JSON.stringify(title, errCode, description, solution, tags),
    headers:{
      'Content-Type': 'application/json'
    } })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
}
