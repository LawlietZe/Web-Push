let push = require('web-push');
// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys)

let vapidKeys = {
    publicKey: 'BElcEs1_ivIFzqgwap3sxo7GQaG0TJmioMKWGS24KgxPxf62t_eL4HIkQAjRChjBe7qynUVbqkiGJRVI8bs6EwI',
    privateKey: '2SJRWcMH84rD2yxiEZo4qzVaTX3LnG1aDQhZUe7lVB8'
  }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');
