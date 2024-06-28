

async function downloadUrlsParallel(urls) {
    try {
    const promises = urls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
        }
        return response.text();
    });

    const downloadedContents = await Promise.all(promises);
    return downloadedContents;
    } catch (error) {
    console.error('Error downloading URLs:', error);
    throw error;
    }
    }

    const urlls = [
    'https://example.com/page1',
    'https://example.com/page2',
    'https://example.com/page3'
    ];

    downloadUrlsParallel(urlls)
    .then((contents) => {
    console.log('Downloaded contents:', contents);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
