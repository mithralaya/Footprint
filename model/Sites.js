var Sites = new global.mongoose.Schema({
	_id: global.mongoose.Schema.ObjectId,
	sId: Number,
        aId: Number,
	domainName: [String],
        dateCreated: Date,
	dateModified: Date,        
	visitors:{}
        
});

Sites.index({ sId: 1, aId: 1 }, { unique: true });
Sites.index({ domain: 1 });
Sites.index({ visitors: 1 });

module.exports = global.mongoose.model('Sites', Sites);