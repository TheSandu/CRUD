exports.islogged = ( req, res ) => {
    if( req.session.user )
        { console.log( req.session.user ); return true;}
    else
        {return false;}
}

exports.isNotlogged = ( req, res ) => {
    return !this.islogged( req );
}