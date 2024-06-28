
async function fetchDataFromApis(apiUrls) {
    try {
      const promises = apiUrls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}. Status: ${response.status}`);
        }
        return response.json(); 
      });
  
      const combinedData = await Promise.all(promises);
      return combinedData;
    } catch (error) {
      console.error('Error fetching data from APIs:', error);
      throw error;
    }
  }

  
  fetchDataFromApis(  [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
  ]  )
    .then((combinedResult) => {
      console.log('Combined data:', combinedResult);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  