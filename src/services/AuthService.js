const REST_API_URL = "http://frontend-recruitment.one2tribe.pl:8080";
// const REST_API_URL = 'http://localhost:3000';

const AUTH_OPTIONS = {
  credentials: "include",
  mode: "cors"
};

export const authenticate = async () => {
  const body = JSON.stringify({
    username: "YNAPEyJk",
    password: "ylYJDgFmnAIs"
  });

  let bearer = ''


  await fetch(`${REST_API_URL}/api/authenticate`, {
    method: "post",
    ...AUTH_OPTIONS,
    body,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(resp => {
    resp.headers.forEach((header) => {

      const bearerRegex = /Bearer/

      if (bearerRegex.exec(header)) {
 
        bearer = header
      } else { return }
    }

    )
  })


  return bearer;
};

export const retrieveItems = async () => {
  const response = await fetch(`${REST_API_URL}/api/v1/item`, {
    ...AUTH_OPTIONS,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IllOQVBFeUprIiwiZXhwIjoxNTY4MjA1NTMwLCJyb2wiOlsiVXNlciJdfQ.2wMBMUUb8FENFj2zOGKCyeYEQLpL1bVthoaGvgTFMYTzl12x9oEApk4hZC88h6Xma-SIC9D5rS09op-7R3RAGQ",
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  return response.json();
};

export const addItem = async item => {
  const response = await fetch(`${REST_API_URL}/api/v1/item`, {
    method: "post",
    ...AUTH_OPTIONS,
    body: JSON.stringify(item),
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IllOQVBFeUprIiwiZXhwIjoxNTY4MjA1NTMwLCJyb2wiOlsiVXNlciJdfQ.2wMBMUUb8FENFj2zOGKCyeYEQLpL1bVthoaGvgTFMYTzl12x9oEApk4hZC88h6Xma-SIC9D5rS09op-7R3RAGQ",
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  return response.json();
};

export const main = async () => {

  const token = await authenticate()
  const items = await retrieveItems();

  return { items, token }
};

// main().catch(error => console.error(error));

const button = document.createElement("button");

button.onclick = () => {
  console.log("click");

  const name = "abc";
  const item = { name };

  addItem(item).catch(error => console.error(error));
};

button.textContent = "Dodaj";

// document.body.appendChild(button);
