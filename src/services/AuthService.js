const REST_API_URL = "http://frontend-recruitment.one2tribe.pl:8080";
const AUTH_OPTIONS = {
  credentials: "include",
  mode: "cors"
};

let bearer = "";

export const authenticate = async () => {
  const body = JSON.stringify({
    username: "YNAPEyJk",
    password: "ylYJDgFmnAIs"
  });

  const response = await fetch(`${REST_API_URL}/api/authenticate`, {
    method: "post",
    ...AUTH_OPTIONS,
    body,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(resp => {
    resp.headers.forEach(header => {
      const bearerRegex = /Bearer/;

      if (bearerRegex.exec(header)) {
        bearer = header;
      } else {
        return;
      }
    });
  });
  console.log(bearer);
  return bearer;
};

export const retrieveItems = async bearer => {
  const response = await fetch(`${REST_API_URL}/api/v1/item`, {
    ...AUTH_OPTIONS,
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  return response.json();
};

export const addItem = async (item, bearer) => {
  const response = await fetch(`${REST_API_URL}/api/v1/item`, {
    method: "post",
    ...AUTH_OPTIONS,
    body: JSON.stringify(item),
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
  console.log(response);
  return response;
};

export const main = async () => {
  const token = await authenticate();
  const items = await retrieveItems(bearer);

  return { items, token };
};
