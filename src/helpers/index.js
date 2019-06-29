import CryptoJS from 'crypto-js';

// constants
import {
  weatherUrl,
  appId,
  consumerKey,
  consumerSecret,
} from 'constants/index';

export const getAuthHeader = (query = {}, method = 'GET') => {
  const concat = '&';
  const timestamp = new Date().getTime() / 1000;
  const oauth = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: Math.random().toString(36).substring(2),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: parseInt(timestamp).toString(),
    oauth_version: '1.0',
  };

  const merged = { ...query, ...oauth };
  // Note the sorting here is required
  const mergedArr = Object.keys(merged).sort().map(k => ([`${k}=${encodeURIComponent(merged[k])}`]));
  const signatureBaseStr = method
    + concat + encodeURIComponent(weatherUrl)
    + concat + encodeURIComponent(mergedArr.join(concat));

  const compositeKey = encodeURIComponent(consumerSecret) + concat;
  const hash = CryptoJS.HmacSHA1(signatureBaseStr, compositeKey);
  oauth.oauth_signature = hash.toString(CryptoJS.enc.Base64);

  return `OAuth ${Object.keys(oauth).map(k => ([`${k}="${oauth[k]}"`])).join(',')}`;
};

export const getHeaders = (headers, query, method) => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  ...headers,
  Authorization: getAuthHeader(query, method),
  'X-Yahoo-App-Id': appId,
});

export const getQueryUrl = (url = '', payload = {}) => {
  const payloadKeys = Object.keys(payload);
  const query = payloadKeys.reduce((result, key, index) => (
    `${result}${index === 0 ? '?' : '&'}${key}=${payload[key]}`
  ), '');

  return url + query;
};

const requestFetch = async (url, params) => {
  const response = await fetch(url, params);
  const result = await response.json();

  if (response.status > 299) {
    let error;
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      error = result;
    } else {
      error = {
        status: response.status,
        error_text: response.statusText,
      };
    }

    error.code = response.status;

    throw error;
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return result;
  }

  return response.statusText;
};

export const onServerGet = async (url = '', query = {}, headers = {}) => {
  const params = {
    method: 'GET',
    headers: getHeaders(headers, query),
  };

  return requestFetch(getQueryUrl(url, query), params);
};

const sheetIndexes = {
  component: 100,
  container: 200,
};

export const getSheetIndex = componentType => {
  sheetIndexes[componentType] += 1;

  return sheetIndexes[componentType] || 1;
};

export const getProp = (object, keys, defaultVal) => {
  const keysArr = Array.isArray(keys) ? keys : keys.split('.');
  const objectItem = object[keysArr[0]];

  if (objectItem && keysArr.length > 1) {
    return getProp(objectItem, keysArr.slice(1), defaultVal);
  }

  return objectItem || defaultVal;
};
