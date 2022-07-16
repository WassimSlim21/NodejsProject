const category = require("../models/category");
const Category = require("../models/category");

exports.addCategory= (req, res, next) => {
    var category = new Category(req.body);
    category.save().then(data => {
        return res.status(201).json({ success: true, msg: 'Successful created new category', data:data });  //creation successfull
      }).catch(err => {
        return res.status(403).json({ err: err });
      });
  }
  

  exports.getAllCategory = (req, res, next) => {
	Category.find().populate('category').then(cat => {
		res.send(cat);
	}).catch(err => {
		console.log('ERROR', err)
		res.status(401).json({
			error: err
		});
	})
  };


    

  exports.addMultipleCat = (req, res, next) => {

    Category.insertMany(req.body.categories).then(function(){
        return res.status(201).json({ success: true, msg: 'Successful created multiple categories'});  //creation successfull
    }).catch(function(error){
        console.log(error)      // Failure
    });

}

exports.updateCat = (req, res, next) => {
	var category = new Object();
	console.log(req.body);

	if (req.body.category)
		{category.category = req.body.category;}
	console.log("new Account is :", category);
	Category.updateOne({ _id: req.params.id }, category).then(
		() => {
			res.status(201).json({
				message: 'category updated !'
			});
		}
	).catch(
		(error) => {
			res.status(400).json({
				error: error
			});
		}
	);
}




  exports.assignedCateg= (req, res, next) => {
    var category = new Category(req.body);
    category.save().then(data => {
        console.log(data._id);
    //     var cat = new Object();
    //    cat.category.array.push(data._id);
    //     console.log("cat", cat);
        
        Category.updateOne({ _id: req.params.id },{$push:{category:data._id}}).then(c => {
            console.log(c);
            res.send(c);
          }).catch(err => {
            console.log('ERROR', err)
            res.status(401).json({
              error: err
            });
          });
        //creation successfull
      }).catch(err => {
        return res.status(403).json({ err: err });
      });
  }
  