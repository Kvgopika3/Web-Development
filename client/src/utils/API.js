// get logged in user's info 
const API_url = "https://web-development-1-h5yf.onrender.com"
export const getMe = (token) => {
  return fetch(API_url+ '/api/user/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch(API_url+ "/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch(API_url+"/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};

export const createCardio = (cardioData, token) => {
  return fetch(API_url+"/api/exercise/cardio", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardioData)
  })
}

export const createResistance = (resistanceData, token) => {
  return fetch(API_url+"/api/exercise/resistance", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(resistanceData)
  })
}

export const getCardioById = (cardioId, token) => {
  return fetch(API_url+ `/api/exercise/cardio/${cardioId}`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
}

export const getResistanceById = (resistanceId, token) => {
  return fetch(API_url+ `/api/exercise/resistance/${resistanceId}`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
}

export const deleteCardio = (cardioId, token) => {
  return fetch(API_url+ `/api/exercise/cardio/${cardioId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    }
  })
}

export const deleteResistance = (resistanceId, token) => {
  return fetch(API_url+ `/api/exercise/resistance/${resistanceId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    }
  })
}