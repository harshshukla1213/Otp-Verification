const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Replace these values with your actual Twilio Account SID and Auth Token
const accountSid = 'AC91816693a0d09cc20d7da267e37fe85b';
const authToken = 'AC91816693a0d09cc20d7da267e37fe85b';
const twilioClient = new twilio(accountSid, authToken);
const twilioPhoneNumber = +12565489096;

const otps = {};

app.post('/api/generate-otp', async (req, res) => {
  const {value} = req.body;
  try {
    const otp = Math.floor(100000 + Math.random() * 900000);

    await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      to: value,
      from: twilioPhoneNumber,
    });

    otps[value] = otp;

    res.json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
});

app.post('/api/verify-otp', (req, res) => {
  const { value, enteredOTP } = req.body;

  if (otps[value] && otps[value] == enteredOTP) {
    delete otps[value];
    res.json({ success: true, message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid OTP' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
