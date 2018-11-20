exports.show = ( req, res ) => {
    console.log("View.show IS OPEND")
    console.log( arguments );
    res.render( `${this.curentView}.view.ejs` );
    console.log( `${this.curentView}.view.ejs IS OPEND`  );
    return this;
}

exports.page = ( viewName ) => {
    console.log("View.page IS OPEND")
    this.curentView = viewName;
    return this;
}