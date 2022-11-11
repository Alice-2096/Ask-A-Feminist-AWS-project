import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_FC5QaWvPR',
  ClientId: '31aj2hbagiej7h28fovqjrmfd1',
};

export default new CognitoUserPool(poolData);
