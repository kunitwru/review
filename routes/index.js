var express = require('express');
var router = express.Router();

// start include models
const CompanyModel = require('../models/company.model');
// end include models

/* GET home page. */
router.get('/', async function(req, res, next) {
      var pageCurrent = 1;
      if (req.query.page)  {
          pageCurrent = req.query.page;
      }
      await CompanyModel.paginate({}, {page: pageCurrent, limit:10})
      .then(response => {
              res.render('companies/index', {
                  title: '{ Dev kiếm một chỗ đứng và cứng chỗ đó! }' ,
                  companies : response.docs,
                  pageInfo : {prevp : parseInt(response.page) - 1, nextp : parseInt(response.page) + 1 , pageCount: response.pages},
              });
      })
      .catch(error => console.log(error));
});


router.get('/company/:id', function (req, res, next) {
    var companyId = req.params.id;
    CompanyModel.findById(companyId, (error, company) => {
        if (error) {
            return res.send('404 Not found');
        }
        res.render('companies/company', {
            title: company.name + ' { Dev kiếm một chỗ đứng và cứng chỗ đó! }' ,
            comapany : company
        });
    })
});

module.exports = router;
