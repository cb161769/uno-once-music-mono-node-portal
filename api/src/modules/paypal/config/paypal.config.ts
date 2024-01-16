import { registerAs } from '@nestjs/config';

export default registerAs('paypal', () => ({
  mode: process.env.PAYPAL_MODE,
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
  sandbox_url: process.env.PAYPAL_SANDBOX_URL,
  live_url: process.env.PAYPAL_LIVE_URL,
  api_version: process.env.PAYPAL_API_VERSION
  
}));
