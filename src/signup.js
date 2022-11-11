import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { json } from 'body-parser';
import userpool from './userpool.js';

const signup = function (e) {
  e.preventDefault();
  const val = new FormData(form);
  //return 4 arrays: [name, data], [email, data], [password, data], [repeat-password, data]
  const email = val[1][1];
  console.log('🚀 ~ file: signup.js ~ line 10 ~ signup ~ email', email);
  const password = val[2][1];
  console.log('🚀 ~ file: signup.js ~ line 12 ~ signup ~ password', password);
  const username = val[0][1];

  var attributeList = [];
  var datausername = {
    Name: 'username',
    Value: username,
  };

  var newUsernameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(
    datausername
  );
  attributeList.push(newUsernameAttribute);

  userpool.signUp(email, password, attributeList, null, (err, result) => {
    if (!err) {
      console.log(result);
      window.location.href = 'signin.html';
    } else {
      console.log(err || json.stringfy(err));
    }
  });
  e.reset();
};

const form = document.getElementById('form');
form.addEventListener('submit', signup);
