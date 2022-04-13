let push = require('web-push');
// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys)

let vapidKeys = {
    publicKey: 'BElcEs1_ivIFzqgwap3sxo7GQaG0TJmioMKWGS24KgxPxf62t_eL4HIkQAjRChjBe7qynUVbqkiGJRVI8bs6EwI',
    privateKey: '2SJRWcMH84rD2yxiEZo4qzVaTX3LnG1aDQhZUe7lVB8'
  }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c637l7gtkaw:APA91bF5NNh4wJdvPIicB9222-MopvMEJVpfh1Dll3eUeZ_Ceb9PNvnLlrwIeVnZDm9oFNyYxvEki9dBV8_XhfiEWPEY8CPGQwugkvayIei_vn2f32HKqIuJX2_vDgZWF9UUihVfYbWu","expirationTime":null,"keys":{"p256dh":"BG-y__zTtXv_JP_PeguEsdAh036bhbeJfh4qaePm5t64f-uHrzxB6Qhq-9aQX5TmmIEQJ1XiRXmwtXw2S6EG6e8","auth":"fho6stMJxCn4Goe1c1J7Iw"}};

push.sendNotification(sub, 'test message');
