import { OAuth2Client } from 'google-auth-library';
import createHttpError from 'http-errors';

const googleOAuth2Client = new OAuth2Client({
  clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_AUTH_REDIRECT_URL,
});

export const generateAuthUrl = () =>
  googleOAuth2Client.generateAuthUrl({
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  });

// export const validateCode = async (code) => {
//   try {
//     const response = await googleOAuth2Client.getToken(code);

//     const ticket = await googleOAuth2Client.verifyIdToken({
//       idToken: response.tokens.id_token,
//     });
//     return ticket;
//   } catch (error) {
//     console.error(
//       'Google OAuth2 Error:',
//       error.response?.data || error.message,
//     );
//     if (
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status <= 499
//     ) {
//       throw createHttpError(401, 'Unauthorized');
//     }
//     throw error;
//   }
// };

export const validateCode = async (code) => {
  try {
    console.log('Authorization Code:', code);

    // Attempt to exchange the code for tokens
    const response = await googleOAuth2Client.getToken(code);
    console.log('Token Response:', response.tokens);

    // Verify the ID token
    const ticket = await googleOAuth2Client.verifyIdToken({
      idToken: response.tokens.id_token,
    });
    console.log('Ticket:', ticket.getPayload());

    return ticket;
  } catch (error) {
    console.error('Google OAuth Error:', error.response?.data || error.message);
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 499
    ) {
      throw createHttpError(401, 'Unauthorized');
    }
    throw error;
  }
};
