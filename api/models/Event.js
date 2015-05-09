/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    startdate: {
      type: 'datetime',
      required: true
    },
    enddate: {
      type: 'datetime',
      required: true
    },
    pre_costs: {
      type: 'float'
    },
    post_costs: {
      type: 'float'
    },

    description: {
      type: 'text'
    },

    image: {
      type: 'string'
    },

    location_id:{
      model:'location',
      required: true
    },

    organizer_id:{
      model:'organizer',
      required: true
    }
  }
};

