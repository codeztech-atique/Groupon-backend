const wiki = require('../services/wikiSearch');

// Get All User
exports.getWikiSearch = async(req, res) => {
    try {
      const query = req.params.query;
      const result = await wiki.getSearchDetails(query);
      res.status(200).send(result);
    } catch(err) {
      res.status(400).send({
        error: err
      })
    }
}