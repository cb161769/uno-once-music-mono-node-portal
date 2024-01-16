import { registerAs } from '@nestjs/config';

export default registerAs('paypal', () => ({
  mode: process.env.PAYPAL_MODE,
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
}));
