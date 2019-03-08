var db = require("../models");

module.exports = function (app) {
  
  // Look up company
  app.get("/api/lookup", function (req, res) {

    console.log(req.body)

    db.ghostedCompany.findAll({
      where: {
        company_name: req.body.company_name
      }
    }).then(function (data) {

      console.log('data', data)

      // If a company is in the database. Bring back their data
      if (data.length > 0) {

        res.json(data);
      }

      // No company in the database
      else {
        res.send({ data: "Not in the database" });
      }
    });
  });

    // Create a new example
    app.post("/api/report", function (req, res) {

      // Check for duplate company name
      db.ghostedCompany.findAll({
        where: {
          company_name: req.body.company_name
        }
      }).then(function (data) {

        // If a company is a duplicate. Increment the ghostedCount by 1
        if (data.length > 0) {

          // Retreive the ghosted count id
          db.ghostedCount.findAll({
            where: {
              foreign_id: data[0].id
            }
          }).then(function (data) {

            // Increment the ghosted count by 1
            let count = data[0].ghosted_count + 1;

            // Update the ghosted count
            db.ghostedCount.update(
              { ghosted_count: count },
              {
                where: { foreign_id: data[0].foreign_id }
              }).then(function (data) {
                res.json(data);
              })
          });

          // If the entered company is not a duplicate. Add them to the database and add 1 to their ghosted count
        } else {

          // Add company info
          db.ghostedCompany.create({
            company_name: req.body.company_name,
            company_address: req.body.street_number + " " + req.body.route,
            company_city: req.body.locality,
            company_state: req.body.administrative_area_level_1,
            company_zipcode: req.body.postal_code

          }).then(function (data) {

            // Add company id with count
            db.ghostedCount.create({
              foreign_id: data.id,
              ghosted_count: 1

            }).then(function (data) {

              res.json(data);
            });
          });
        }
      });
    });
  };
