'use strict';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const PeopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    console.log(event.body); // TESTING
    // first, we need data from req.body
    const bodyy = JSON.parse(event.body).body;
    const {name, phone } = (JSON.parse(bodyy));
    // create an ID for the user
    const _id = uuid();

    const record = new PeopleModel({ _id, name, phone }); // make record based on dynamoose schema
    const data = await record.save(); // save record to dynamoDB

    return {  // return newly saved record and 500
      statusCode: 500,
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
