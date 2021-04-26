const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    console.log('email:', email);
    const password = document.querySelector('#password-login').value.trim();
    console.log('password:', password);

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ 
                email: email,
                password: password 
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log('response:', response);

        if (response.ok) {
            document.location.replace('/dashboard');
            console.log('form submitted');
            console.log('logged in: ', req.session.user_id);
        } else {
            alert(response.statusText);
            console.log('something went wrong!')
            console.log('logged in: ', req.session.user_id);
        }
    }
};


document.querySelector('.login-form').addEventListener('submit', loginFormHandler);