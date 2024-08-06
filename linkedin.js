const QRCode = require('qrcode');

const url = 'https://www.linkedin.com/in/david-hardy-boi-dev/';

QRCode.toDataURL(url, (err, url) => {
  if (err) {
    console.error(err);
  } else {
    console.log(url);
  }
});
QRCode.toFile('docs/linkedin.png', url, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('QR code saved!');
  }
});
