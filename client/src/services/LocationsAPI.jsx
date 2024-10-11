// LocationsAPI.jsx

const API_URL_LOCATIONS = '/api/locations';

// Function to get all locations
export const getAllLocations = async () => {
  try {
    const response = await fetch(API_URL_LOCATIONS);
    if (!response.ok) {
      throw new Error('Failed to fetch locations');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching locations:', error);
  }
};

// Function to get a single location by ID
export const getLocationById = async (id) => {
  try {
    const response = await fetch(`${API_URL_LOCATIONS}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch location');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching location:', error);
  }
};