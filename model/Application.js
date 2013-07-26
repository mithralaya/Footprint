var Application = new global.mongoose.Schema({
	_id: global.mongoose.Schema.ObjectId,
	companName: String,
        web: String,
        saltSecurity: String,
        parentApp: String,
	dateCreated: Date,
	dateModified: Date,
	accounts:{}
});

Application.index({ accounts: 1 });

module.exports = global.mongoose.model('Application', Application);