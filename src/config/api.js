// API Configuration
// Change the BASE_URL here if your backend moves to a different location

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://mycustomapi.com/";

export const API_ENDPOINTS = {
  SEND_CONTACT: `${API_BASE_URL}/api/email/send_web_contact`,
  SEND_CAREERS: `${API_BASE_URL}/api/email/send_web_careers`,
  // Add more endpoints here as needed
};

export default API_BASE_URL;
