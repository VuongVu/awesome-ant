/* eslint-disable prefer-destructuring */
export const NODE_ENV = process.env.NODE_ENV;
export const IS_DEV = NODE_ENV !== 'production';
export const PORT = process.env.PORT;
export const SESSION_SECRET = process.env.SESSION_SECRET;
