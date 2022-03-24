const router = require('express').Router()

router.get('/', async (req, res) => {
   res.render('index', {
      title: 'AZ-Pharma'
   })
})

module.exports = {
   path: '/',
   router
}
