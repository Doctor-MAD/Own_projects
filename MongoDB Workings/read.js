db.movies.find({ rated: { $in: ["R", "PG-13"] } });

db.movies.find({ "genres": "Action", "runtime": { $gte: 80 } });


db.movies.find({$or:[{"year":"2007"},{"genres":"Action"}]})
db.movies.find({$or:[{year:"2007"},{genres:"Action"}]})

db.inventory.find({status:"A",qty:{$lte:50}});