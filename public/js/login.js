const handleLogin = (event) => {
  event.preventDefault();
  const userInfo = event.target.user.value;
  const password = event.target.pass.value;

  fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ userInfo, password }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(async (response) => {
      // FIND A BETTER ERROR HANDLING MESSAGE/MEANS
      const resMsg = await response.json();
      if (response.ok) {
        document.location.replace('/profile');
      } else if (resMsg.message === 'user') {
        alert('No User with those credentials');
      } else if (resMsg.message === 'password') {
        alert('incorrect password');
      } else {
        alert('Error Unknown');
      }
    })
    .catch((err) => console.log(err));
};

document.getElementById('login-form').addEventListener('submit', handleLogin);
