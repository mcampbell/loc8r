
module.exports.index = function(req, res, next) {
    res.render('index', { title: 'Express as separate controller', t2: "I'm a teapot, short and stout" });
};
