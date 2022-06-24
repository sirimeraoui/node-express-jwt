module.exports.signup_get = (req, res) => {
    res.render('signup')
};
module.exports.login_get = (req, res) => {
    res.render('login')
};
module.exports.signup_post = (req, res) => {
    const { email, user } = req.body;
    console.log(email, user);
    res.send('new SignUp')
};
module.exports.login_post = (req, res) => {
    const { email, user } = req.body;
    console.log(email, user);
    res.send('User Login')
}; 