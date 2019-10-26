// Environment variables

function get(
  name: string,
  required: boolean = false,
  alternateName: string = '',
): string {
  const val = process.env[name] || '';
  if (!val && required) {
    throw new Error(
      `${alternateName || name} environment variable is required.`,
    );
  }
  return val;
}

export const NODE_ENV = get('NODE_ENV') || 'development';
export const IS_DEV = NODE_ENV !== 'production';
export const PORT = +get('PORT') || 8080;

let sessionSecret: string = get('SESSION_SECRET');
if (!sessionSecret) {
  if (!IS_DEV) {
    throw new Error('SESSION_SECRET environment variable is required.');
  }
  sessionSecret = Math.random()
    .toString(36)
    .substring(2);
}
export const SESSION_SECRET: string = sessionSecret;

export const COMMON_ERROR = 'Unexpected Error';
export const UNAUTHORIZED_ERROR = 'Unauthorized Error';
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const PERSIST_STORE = 'persist:app';
