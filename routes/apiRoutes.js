var db = require("../models");

module.exports = function (app) {


app.get("/",function(req,res){
  // Collect top 5 companies
});

  // Look up company
  app.post("/api/lookup", function (req, res) {

    console.log(req.body)

    db.Company.findAll({
      where: {
        company_name: req.body.company_name
      }
    }).then(function (data) {

      // If a company is in the database. Bring back their data
      if (data.length > 0) {

        companyInfo = {
          id: data[0].company_name,
          company_name: data[0].company_name,
          company_address: data[0].company_address,
          company_city: data[0].company_city,
          company_state: data[0].company_state,
          company_zipcode: data[0].company_zipcode
        }

        res.json(companyInfo);
      }

      // No company in the database
      else {
        res.send({ companyInfo: "Not in the database" });
      }
    });
  });

  // Create a new example
  app.post("/api/report", function (req, res) {


// if(){
//   // POST new company and record if new
// }else if (true) {
//   // Post record only if exists
// }else {
//   // fail
// }

    // Check for duplate company name
    db.Company.findAll({
      where: {
        company_name: req.body.company_name
      }
    }).then(function (data) {

      // If a company is a duplicate. Increment the Records by 1
      if (data.length > 0) {

        // Retreive the ghosted count id
        db.Records.findAll({
          where: {
            CompanyId: data[0].id
          }
        }).then(function (data) {
          console.log("DATA: " + data[0].id)
          // Add company id with count
          db.Records.create({
            CompanyId: data[0].id,

          }).then(function (data) {

            res.json({ companyInfo: "Duplicated company, but added a ghosted count." });
          });
        });

        // If the entered company is not a duplicate. Add them to the database and add 1 to their ghosted count
      } else {

        // Add company info
        db.Company.create({
          company_name: req.body.company_name,
          company_address: req.body.street_number + " " + req.body.route,
          company_city: req.body.locality,
          company_state: req.body.administrative_area_level_1,
          company_zipcode: req.body.postal_code

        }).then(function (data) {

          // Add company id with count
          db.Records.create({
            CompanyId: data.id,
            ghosted_count: 1

          }).then(function (data) {

            res.json({ companyInfo: "Company has been added." });
          });
        });
      }
    });
  });
};
