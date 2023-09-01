let express = require('express');

let app = express();
app.use(express.urlencoded({extended: true}));


let routes = require('./routes');
app.use('/', routes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});








/*
const check = (req, res,next) => {
    if (req.session && req.session.iduser>= 0) {
        next();
    }
    else {
        res.send('access denied');
    }

};*/

/*
app.get('/', (req, res) => {
    res.send("Hiiiiiiiiiiiiiiiiii     iiiiiiiiiiiiiii <br /> Houlouuuuuuu");
    //res.render("userAdd.ejs");

});

app.get('/user', (req, res) => {
    connection.query('select * from user;', function (error, result) {
        if (error) console.log(error);
        res.render("userList.ejs", {users: result});
    });
});


app.get('/user/add', (req, res) => {
    res.render("userAdd.ejs");

});

app.post('/user', (req, res) => {
    let user = {"lastname": req.body.lastname, "firstname": req.body.firstname};
    connection.query('INSERT INTO user SET ?', user, function (error, result) {
        if (error) console.log(error);
        res.redirect('/user');
    });
});

app.get('/user/update/:i', (req, res) => {
    let i = req.params.i;
    connection.query("select * from user WHERE iduser =?", i, function (error, result) {
        if (error) console.log(error);
        res.render("userUpdate.ejs", {"iduser": result[0].iduser, "lastname": result[0].lastname, "firstname": result[0].firstname});
    });
});
app.get('/user/delete/:i', (req, res) => {
    let i = req.params.i;
    connection.query("DELETE from user WHERE iduser =?", i, function (error, result) {
        if (error) console.log(error);
        res.redirect("/user"); 
    });
});

app.post('/user/update', (req, res) => {
    let i = req.body.iduser;
    let user = {"lastname": req.body.lastname, "firstname": req.body.firstname};
    connection.query("UPDATE user SET ? WHERE iduser = ?", [user, i], function (error, result) {
        if (error) console.log(error);
        res.redirect("/user");
    });
});
*/
