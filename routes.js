let express = require('express');

let router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Addacom0906',
    database: 'imc'

});

connection.connect(function(error) { if (error)  console.log(error); });


router.get('/', (req, res) => {
    //res.send("Hiiiiiiiiiiiiiiiiii     iiiiiiiiiiiiiii <br /> Houlouuuuuuu");
    res.redirect('/user');

});

router.get('/user', (req, res) => {
    connection.query('select * from history;', function (error, result) {
        if (error) console.log(error);
        res.render("userList.ejs", {imc: result});
    });
});

router.get('/user/hist', (req, res) => {
    connection.query('select * from history;', function (error, result) {
        if (error) console.log(error);
        res.render("userHist.ejs", {imc: result});
    });
});


router.get('/user/add', (req, res) => {
    res.render("userAdd.ejs");

});

router.post('/user', (req, res) => {
    let history = {"height": parseFloat(req.body.height), "weight": parseInt(req.body.weight),"date": req.body.date};
    connection.query('INSERT INTO history SET ?', history, function (error, result) {
        if (error) console.log(error);
        res.redirect('/user');
    });
});

router.get('/user/update/:i', (req, res) => {
    let i = req.params.i;
    connection.query("select * from history WHERE idhistory =?", i, function (error, result) {
        if (error) console.log(error);
        res.render("userUpdate.ejs", {"idhistory": result[0].idhistory, "height": result[0].height, "weight": result[0].weight});
    });
});
router.get('/user/delete/:i', (req, res) => {
    let i = req.params.i;
    connection.query("DELETE from history WHERE idhistory =?", i, function (error, result) {
        if (error) console.log(error);
        res.redirect("/user"); 
    });
});

router.post('/user/update', (req, res) => {
    let i = req.body.idhistory;
    let history = {"height": req.body.height, "weight": req.body.weight};
    connection.query("UPDATE history SET ? WHERE idhistory = ?", [history, i], function (error, result) {
        if (error) console.log(error);
        res.redirect("/user");
    });
});





module.exports = router;