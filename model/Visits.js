var Visits = new global.mongoose.Schema({
	_id: global.mongoose.Schema.ObjectId,
	vId: String,
        VrId: String,
        sId: Number,
        aId: Number,
        colorDepth: String,
        pixelDepth: String,
        language: String,
        languageIE: String,
        timezone: String,
	dateCreated: Date,
	dateModified: Date,
	navigation:{}
});

Visits.index({ vId: 1, VrId: 1, sId: 1, aId: 1 }, { unique: true });
Visits.index({ navigation: 1 });

module.exports = global.mongoose.model('Visits', Visits);