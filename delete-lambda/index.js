'use strict';

const dynamoose = require('dynamoose');
const PeopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters.id;

    let data;
    // const { name, phone } = JSON.parse(event.body); // object destructuring syntax
 
    if (id) {
      // grab the item `id`
      const list = await PeopleModel.query('_id').eq(id).exec(); 
      // `scan` looks at all the things
      // `exec` gives those things back to you
      // equivalent to `find({})` in mongoose
      data = list[0];
      const record = await PeopleModel.get(data._id);
      // {"_id":"30d31f74-3c8e-4185-a662-f8f686920b05","name":"rowan","phone":"00000"}
      // const _id = data._id;
      // let record = new PeopleModel({ _id, name, phone });
      data = await record.delete(); 

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