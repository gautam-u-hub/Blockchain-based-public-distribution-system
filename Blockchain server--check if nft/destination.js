const axios = require('axios');

const headers = {
  accept: "application/json",
  "x-api-key": "QN_98c91681f35f494f9de300ad4f225900",
};

const data = {
  name: "My Destination",
  to_url: "https://51f9-106-215-89-19.ngrok-free.app/webhook",
  webhook_type: "POST",
  service: "webhook",
  payload_type: 5,
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));