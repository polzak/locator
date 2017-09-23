const index = function(req, res, next) {
  res.render('index', { title: 'Hello' });
}

module.exports = {
    index
};
