const QRCode = require('qrcode');

const url = 'https://hard2737.github.io/resume/r%C3%A9sum%C3%A9.pdf';

QRCode.toDataURL(url, (err, url) => {
  if (err) {
    console.error(err);
  } else {
    console.log(url);
  }
});
QRCode.toFile('resume.png', url, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('QR code saved!');
  }
});
