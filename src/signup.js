import { json } from 'body-parser';
import userpool from './userpool.js';

const signup = function (e) {
  e.preventDefault();
  const val = new FormData(form);
  //return 4 arrays: [name, data], [email, data], [password, data], [repeat-password, data]
  const email = val[1][1];
  const password = val[2][1];
  const username = val[0][1];

  var attributeList = [];
  var datausername = {
    Name: 'username',
    Value: username,
  };
  attributeList.push(datausername);

  userpool.signUp(email, password, attributeList, null, (err, result) => {
    if (!err) {
      console.log(result);
    } else {
      console.log(err || json.stringfy(err));
    }
  });
  e.reset();
};

const form = document.getElementById('form');
form.addEventListener('submit', signup);
