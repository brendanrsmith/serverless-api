'use strict';

const dynamoose = require('dynamoose');
const PeopleModel = require('./people.schema.js');


exports.handler = async (event) => {
  try {
    // the && here is 'short circuiting'
    const id = event.queryStringParameters && event.queryStringParameters.id;

    let data;

    if (id) {
      // grab the item `id`
      const list = await PeopleModel.query('_id').eq(id).exec(); 
      // `scan` looks at all the things
      // `exec` gives those things back to you
      // equivalent to `find({})` in mongoose
      data = list[0];
    } else {
      // grab all items
      data = await PeopleModel.scan().exec();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      response: e.message
    }
  }
}