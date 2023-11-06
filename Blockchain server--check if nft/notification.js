//75ba19df-f16a-478b-b34a-d01055698868
const axios = require("axios");

const headers = {
  accept: "application/json",
  "x-api-key": "QN_98c91681f35f494f9de300ad4f225900",
};

const data = {
  name: "NFT Transfer",
  expression:
    "KHR4X2xvZ3NfdG9waWMxID1+ICcyNTc4NTI1MDcyY0VEMkU3QzcwQzkwNTM5Rjk1OTZkRUFBYzA0QzJkJykgJiYNCih0eF9sb2dzX2FkZHJlc3MgPT0gJzB4MWE4YTVkZjdEM0E0NkEwMDE0Qjg1YTE1RDc3OGMwOGNBOTJBQkZBYicpICYmDQoodHhfbG9nc190b3BpYzAgPT0gJzB4ZGRmMjUyYWQxYmUyYzg5YjY5YzJiMDY4ZmMzNzhkYWE5NTJiYTdmMTYzYzRhMTE2MjhmNTVhNGRmNTIzYjNlZicpDQo=",
  network: "ethereum-sepolia",
  destinationIds: ["b5b7a373-6a74-45e4-bcd8-9513ba4be68c"],
};

axios
  .post("https://api.quicknode.com/quickalerts/rest/v1/notifications", data, {
    headers,
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log("error", error));

// (tx_logs_topic1 =~ '2578525072cED2E7C70C90539F9596dEAAc04C2d') &&
// (tx_logs_address == '0x1a8a5df7D3A46A0014B85a15D778c08cA92ABFAb') &&
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')
