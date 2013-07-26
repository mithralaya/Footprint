var User = new global.mongoose.Schema({
	_id: global.mongoose.Schema.ObjectId,
	uId: Number,
        firstName: String,
	lastName: String,
	email: String,
        countryCode: String,
	password: String,
        dateCreated: Date,
	dateModified: Date
});

User.index({ uId: 1 }, { unique: true });
User.index({ sites: 1 });
User.index({ users: 1 });

module.exports = global.mongoose.model('User', User);