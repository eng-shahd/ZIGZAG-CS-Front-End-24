async function fetch(apiUrl, timeoutMs) {
    try {
      const controller = new AbortController();
      const timeout = new Promise((_, reject) => {
        setTimeout(() => {
          controller.abort();
          reject(new Error(`Request timed out after ${timeoutMs}ms.`));
        }, timeoutMs);
      });
  
      const responses = fetch(apiUrl, { signal: controller.signal });
      const response = await Promise.race([responses, timeout]);
  
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to fetch data from ${apiUrl}. Status: ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  }
  const apiUrlToFetch = 'https://api.example.com/data';
  const requestTimeoutMs = 5000;
  
  fetch(apiUrlToFetch, requestTimeoutMs)
    .then((fetchedData) => {
      console.log('Fetched data:', fetchedData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  