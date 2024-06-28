async function fetch(apiUrl, maxRetries, retryDelayMs) {
    try {
      let retries = 0;
      while (retries < maxRetries) {
        const response = await fetch(apiUrl);
        if (response.ok) {
          return response.json();
        } else {
          await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
          retries++;
        }
      }
      throw new Error(`Failed to fetch data from ${apiUrl} after ${maxRetries} retries.`);
    } catch (error) {
      throw error;
    }
  }
  const apiUrlToFetch = 'https://api.example.com/data';
  const maxRetries = 3;
  const retryDelayMs = 1000;
  
  fetch(apiUrlToFetch, maxRetries, retryDelayMs)
    .then((fetchedData) => {
      console.log('Fetched data:', fetchedData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  