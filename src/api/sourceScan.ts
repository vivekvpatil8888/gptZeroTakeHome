import exampleResponse from '../data/exampleResponse.json';

export const postSourceScan = async (text: string): Promise<string> => {
  try {
    const response = {
      ok: true,
      json: async () => exampleResponse
    };

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseBody = await response.json();
    const responseBodyString = JSON.stringify(responseBody, null, 2);

    return responseBodyString;
  } catch (error) {
    console.error("Error occurred during source scan:", error);
    throw error;
  }
};
