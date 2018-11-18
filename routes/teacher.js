const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('teacher',{
    teacher:
    [
      {
        name: 'tatang',
        mapel: 'olahraga'
      },
      {
        name: 'jajang',
        mapel: 'kesenian'
      },
      {
        name: 'wagiman',
        mapel: 'biologi'
      },
      {
        name: 'bambang',
        mapel: 'matematika'
      },
    ]
  })
});

module.exports = routes;