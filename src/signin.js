import userpool from './userpool';

const signin = function (e) {
  e.preventDefault();
  const val = new FormData(form);

  const email = val[0][1];
  const password = val[1][1];

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Email: email,
    Password: password,
  });

  var userData = {
    Email: email,
    Pool: userpool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => console.log(result),
    onFailure: (err) => console.log(err),
  });
};

const submitBtn = document.querySelector('form');
submitBtn.addEventListener('submit', signin(e));
