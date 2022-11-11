import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_FC5QaWvPR',
  ClientId: '5ek1l70e79skobvv74vk67hksn',
};

export default new CognitoUserPool(poolData);
