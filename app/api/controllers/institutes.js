const instituteModel = require('../models/institutes');

module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  instituteModel.findById(req.params.instituteId, function(err, instituteInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Institute found!!!", data:{institutes: instituteInfo}});
   }
  });
 },

getAll: function(req, res, next) {
  let institutesList = [];
instituteModel.find({}, function(err, institutes){
   if (err){
    next(err);
   } else{
    for (let institute of institutes) {
     institutesList.push({id: institute._id, name: institute.name, location: institute.location});
    }
    res.json({status:"success", message: "institutes list found!!!", data:{institutes: institutesList}});
       
   }
});
 },

updateById: function(req, res, next) {
  instituteModel.findByIdAndUpdate(req.params.instituteId,{name:req.body.name}, function(err, instituteInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Institute updated successfully!!!", data:null});
   }
  });
 },

deleteById: function(req, res, next) {
  instituteModel.findByIdAndRemove(req.params.instituteId, function(err, instituteInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Institute deleted successfully!!!", data:null});
   }
  });
 },

create: function(req, res, next) {
  instituteModel.create({ name: req.body.name, location: req.body.location }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Institute added successfully!!!", data: null});
      
    });
 },
}