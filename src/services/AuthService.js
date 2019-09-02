const REST_API_URL = "http://frontend-recruitment.one2tribe.pl:8080";
const AUTH_OPTIONS = {
  credentials: "include",
  mode: "cors"
};

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
  });

  return response.text();
};

export const retrieveItems = async () => {
  const response = await fetch(`${REST_API_URL}/api/v1/item`, {
    ...AUTH_OPTIONS,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IllOQVBFeUprIiwiZXhwIjoxNTY4Mjg1MTE4LCJyb2wiOlsiVXNlciJdfQ.JP3fYRcp1afsl1Kj40qTyoo7FOzfWAyug7cV-YhynAF7Qr2CbdBIcYIsy6u89pDSBP2XdBk7yt_ScmiYPoRMmg",
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  return response.json();
};

export const addItem = async (item) => {
  const response = await fetch(`${REST_API_URL}/api/v1/item`, {
    method: "post",
    ...AUTH_OPTIONS,
    body: JSON.stringify(item),
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IllOQVBFeUprIiwiZXhwIjoxNTY4Mjg1MTE4LCJyb2wiOlsiVXNlciJdfQ.JP3fYRcp1afsl1Kj40qTyoo7FOzfWAyug7cV-YhynAF7Qr2CbdBIcYIsy6u89pDSBP2XdBk7yt_ScmiYPoRMmg",
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  return response
};

export const main = async () => {
  await authenticate();

  const items = await retrieveItems();
  
  return items
};