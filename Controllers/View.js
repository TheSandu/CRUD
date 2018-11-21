exports.homePage = ( req, res ) => {
    res.render( "home.view.ejs", { name: "Bacinschii Alexandru" } );
}

exports.loginPage = ( req, res ) => {
    res.render( "login.view.ejs" );
}

exports.registerPage = ( req, res ) => {
    res.render( "register.view.ejs" );
}

exports.usersPage = ( req, res ) => {
    res.render( "register.view.ejs" );
}