var Visitor = new global.mongoose.Schema({
	_id: global.mongoose.Schema.ObjectId,
	VrId: String,
        sId: Number,
        aId: Number,
        userAgent: String,
        appCodeName: String,
        appName: String,
        appVersion: String,
        cookieEnabled: String,
        online: String,
        platform: String,
	dateCreated: Date,
	dateModified: Date,
	visits:{}
});

Visitor.index({ VrId: 1, aId: 1, sId: 1 }, { unique: true });
Visitor.index({ userAgent: 1 });
Visitor.index({ visits: 1 });

module.exports = global.mongoose.model('Visitor', Visitor);