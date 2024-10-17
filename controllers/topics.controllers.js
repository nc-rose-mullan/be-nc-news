const fetchTopics = require("../models/topics.models");

const getTopics = (request, response, next) => { 
    fetchTopics().then((topics) => { 
        response.send({topics})
    })
};

module.exports = getTopics