const axios = require('axios');
const wikiUrl = process.env.WIKI_API

exports.getSearchDetails = async(query) => {
    try {
        const response = await axios.get(wikiUrl, {
            params: {
                action: 'query',
                format: 'json',
                list: 'search',
                srsearch: query,
            },
        });

        return response.data;
    } catch(err) {
        console.error('Error in getSearchDetails:', error);
        throw new Error('Internal Server Error');
    }
}