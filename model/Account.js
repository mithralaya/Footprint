var Account = new global.mongoose.Schema({
	_id: global.mongoose.Schema.ObjectId,
	aId: Number,
        appId: Number,
	companName: String,
	dateCreated: Date,
	dateModified: Date,
	sites:{},
        users:{}
});

Account.index({ aId: 1 }, { unique: true });
Account.index({ sites: 1 });
Account.index({ users: 1 });

module.exports = global.mongoose.model('Account', Account);