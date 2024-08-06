import axios from 'axios';
import exampleResponse from '../data/exampleResponse.json';

export const postSourceScan = async (text: string): Promise<string> => {
  try {
    // Uncomment the below lines to use the actual API call
    // const response = await axios.post('/api/cite', { document: text });
    // const responseBody = response.data;

    // Temporary: Using mock response for development/testing
    const response = {
      data: exampleResponse,
      status: 200,
      statusText: 'OK',
    };

    if (response.status !== 200) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const responseBodyString = JSON.stringify(response.data, null, 2);
    return responseBodyString;
  } catch (error) {
    console.error("Error occurred during source scan:", error);
    throw error;
  }
};
