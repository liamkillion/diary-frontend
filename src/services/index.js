const API_ROOT = "http://localhost:3000/api/v1";

const token = localStorage.getItem("token");
const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token
  };
};

const logIn = (email, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ email, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const getEntries = () => {
  return fetch(`${API_ROOT}/entries`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const getEntry = entryId => {
  return fetch(`${API_ROOT}/entries/${entryId}`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const createNewEntry = entry => {
  return fetch(`${API_ROOT}/entries`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ entry })
  }).then(res => res.json());
};

const getTags = () => {};

const createNewTag = () => {};

const deleteTag = () => {};

export const services = {
  entries: {
    getEntries,
    getEntry,
    createNewEntry
  },
  tags: {
    getTags,
    createNewTag,
    deleteTag
  },
  auth: {
    logIn,
    getCurrentUser
  }
};
