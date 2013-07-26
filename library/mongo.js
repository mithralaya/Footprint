var mongoose = global.mongoose;

module.exports = {
	_db: null,
	init: function(){
		if (!module.exports._db){
			var path = 'mongodb://'+ global.config.database.USER +':'+ global.config.database.PASS +'@' + global.config.database.SERVER+ '/' + global.config.database.DB;
			console.log('connecting to MONGO via ' + path);
			module.exports._db = mongoose.connect(path);
		}
		return module.exports._db;
	}

}