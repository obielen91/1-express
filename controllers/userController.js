const User = require('../models/UserModel');

module.exports = {
    index: (req,res) => {
        User.find({}).lean().exec((err, users) => {
            if(err) {
                res.send('Get users error');
            }

        // hbs zna ścieżke (kontekst lokalizacji plików z widokami), dlatego tak!
            res.render('personViews/person', {users: users} );
        })



    }
}