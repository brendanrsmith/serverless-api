'use strict';

const event = {
  version: '2.0',
  routeKey: 'POST /people',
  rawPath: '/people',
  rawQueryString: '',
  headers: {
    accept: '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9',
    'content-length': '96',
    'content-type': 'application/json',
    dnt: '1',
    host: 'c578qzkfed.execute-api.us-west-2.amazonaws.com',
    origin: 'chrome-extension://biemppheiopfggogojnfpkngdkchelik',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Microsoft Edge";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'none',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 Edg/90.0.818.56',
    'x-amzn-trace-id': 'Root=1-609c657f-23bbb044417c0c254cd96b32',
    'x-forwarded-for': '70.172.14.189',
    'x-forwarded-port': '443',
    'x-forwarded-proto': 'https'
  },
  requestContext: {
    accountId: '047507167948',
    apiId: 'c578qzkfed',
    domainName: 'c578qzkfed.execute-api.us-west-2.amazonaws.com',
    domainPrefix: 'c578qzkfed',
    http: {
      method: 'POST',
      path: '/people',
      protocol: 'HTTP/1.1',
      sourceIp: '70.172.14.189',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 Edg/90.0.818.56'
    },
    requestId: 'fPTL3hEavHcEJqw=',
    routeKey: 'POST /people',
    stage: '$default',
    time: '12/May/2021:23:32:15 +0000',
    timeEpoch: 1620862335060
  },
  body: '{\n' +
    '    "body": "{\\"_id\\": \\"123456789\\", \\"name\\": \\"test_user\\", \\"phone\\": \\"123 456 7890\\"}"\n' +
    '}',
  isBase64Encoded: false
}
// const { name, phone } = JSON.parse(event.body);
const bodyy = JSON.parse(event.body).body;
const {name, phone } = (JSON.parse(bodyy));
console.log(name, phone);