/**
 * @name        fp.js
 * @codeName    FootPrint
 * @version     0.1
 * @author      Karthik Vasudevan 
 * @copyright   Copyright 2012. All rights reserved.
 */
global.http = require("http");
global.fs = require('fs');
var url  = require('url');
global.mongoose = require('mongoose');
global.config = require('./../config/config.js');
global.db = require('./../library/mongo.js');

//mongodb models
global.db.init();
global.models = {
	account: require('./../model/Account.js'),
	sites: require('./../model/Sites.js'),
	visitor: require('./../model/Visitor.js'),
	visits: require('./../model/Visits.js'),
	navigation: require('./../model/Navigation.js')
}
  
global.http.createServer(function(request, response) {

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    if(query.accountNumber != null)
    {
        var accountNumber = query.accountNumber;
        var accountNumberSplit = accountNumber.split("-");
        console.log(query.longCookie+ ' - '+ query.userAgent + '' + new Date());

        var account = {};
        account[accountNumberSplit[1]]                                  = new global.models.account;
        account[accountNumberSplit[1]].aId                              = accountNumberSplit[1];
        account[accountNumberSplit[1]].dateModified                     = new Date();
        account[accountNumberSplit[1]].save();

        var sites                                                       = {};
        sites[accountNumberSplit[2]]                                    = new global.models.sites;
        sites[accountNumberSplit[2]].sId                                = accountNumberSplit[2];
        sites[accountNumberSplit[2]].aId                                = accountNumberSplit[1];
        sites[accountNumberSplit[2]].domainName                         = query.domainName;
        sites[accountNumberSplit[2]].dateModified                       = new Date();
        sites[accountNumberSplit[2]].save();

        var visitors                                                    = {};
        visitors[query.longCookie]                                      = new global.models.visitor;
        visitors[query.longCookie].VrId                                 = query.longCookie;
        visitors[query.longCookie].sId                                  = accountNumberSplit[2];
        visitors[query.longCookie].aId                                  = accountNumberSplit[1];
        visitors[query.longCookie].userAgent                            = query.userAgent;
        visitors[query.longCookie].appCodeName                          = query.appCodeName;
        visitors[query.longCookie].appName                              = query.appName;
        visitors[query.longCookie].appVersion                           = query.appVersion;
        visitors[query.longCookie].cookieEnabled                        = query.cookieEnabled;
        visitors[query.longCookie].online                               = query.online;
        visitors[query.longCookie].platform                             = query.platform;
        visitors[query.longCookie].dateCreated                          = new Date();
        visitors[query.longCookie].dateModified                         = new Date();
        visitors[query.longCookie].save();

        var visits                                                      = {};
        visits[query.shortCookie]                                       = new global.models.visits;
        visits[query.shortCookie].vId                                   = query.shortCookie;
        visits[query.shortCookie].VrId                                  = query.longCookie;
        visits[query.shortCookie].sId                                   = accountNumberSplit[2];
        visits[query.shortCookie].aId                                   = accountNumberSplit[1];
        visits[query.shortCookie].colorDepth                            = query.colorDepth;
        visits[query.shortCookie].pixelDepth                            = query.pixelDepth;
        visits[query.shortCookie].language                              = query.language;
        visits[query.shortCookie].languageIE                            = query.languageIE;
        visits[query.shortCookie].timezone                              = query.timezone;
        visits[query.shortCookie].dateCreated                           = new Date();
        visits[query.shortCookie].dateModified                          = new Date();
        visits[query.shortCookie].save();

        var navigation                                                  = {};
        navigation[query.windowCookie]                                  = new global.models.navigation;
        navigation[query.windowCookie].nId                              = query.windowCookie;
        navigation[query.windowCookie].vId                              = query.shortCookie;
        navigation[query.windowCookie].VrId                             = query.longCookie;
        navigation[query.windowCookie].sId                              = accountNumberSplit[2];
        navigation[query.windowCookie].aId                              = accountNumberSplit[1];
        navigation[query.windowCookie].screenWidth                      = query.screenWidth;
        navigation[query.windowCookie].screenHeight                     = query.screenHeight;
        navigation[query.windowCookie].viewpointWidth                   = query.viewpointWidth;
        navigation[query.windowCookie].viewpointHeight                  = query.viewpointHeight;
        navigation[query.windowCookie].viewpointWidthIE6                = query.viewpointWidthIE6;
        navigation[query.windowCookie].viewpointHeightIE6               = query.viewpointHeightIE6;
        navigation[query.windowCookie].viewpointWidthIE                 = query.viewpointWidthIE;
        navigation[query.windowCookie].viewpointHeightIE                = query.viewpointHeightIE;
        navigation[query.windowCookie].outerWidth                       = query.outerWidth;
        navigation[query.windowCookie].outerHeight                      = query.outerHeight;
        navigation[query.windowCookie].pageXOffset                      = query.pageXOffset;
        navigation[query.windowCookie].pageYOffset                      = query.pageYOffset;
        navigation[query.windowCookie].screenX                          = query.screenX;
        navigation[query.windowCookie].screenY                          = query.screenY;
        navigation[query.windowCookie].referer                          = query.referer;
        navigation[query.windowCookie].currentURL                       = query.currentURL;
        navigation[query.windowCookie].locationHREF                     = query.locationHREF;
        navigation[query.windowCookie].locationHash                     = query.locationHash;
        navigation[query.windowCookie].locationHost                     = query.locationHost;
        navigation[query.windowCookie].locationHostName                 = query.locationHostName;
        navigation[query.windowCookie].locationPathName                 = query.locationPathName;
        navigation[query.windowCookie].locationPort                     = query.locationPort;
        navigation[query.windowCookie].locationProtocol                 = query.locationProtocol;
        navigation[query.windowCookie].locationSearch                   = query.locationSearch;
        navigation[query.windowCookie].documentMode                     = query.documentMode;
        navigation[query.windowCookie].pageTitle                        = query.pageTitle;
        navigation[query.windowCookie].readyState                       = query.readyState;
        navigation[query.windowCookie].lastModified                     = query.lastModified;
        navigation[query.windowCookie].timestamp                        = query.timestamp;
        navigation[query.windowCookie].link                             = query.link;
        navigation[query.windowCookie].formSubmit                       = query.formSubmit;
        navigation[query.windowCookie].target                           = query.target;
        navigation[query.windowCookie].elementId                        = query.id;
        navigation[query.windowCookie].elementTitle                     = query.title;
        navigation[query.windowCookie].targetWindow                     = query.targetWindow;
        navigation[query.windowCookie].dateCreated                      = new Date();
        navigation[query.windowCookie].save();       

    }
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("success");
    response.end();

}).listen(8888);
