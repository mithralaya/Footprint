/**
 * @name        fp.js
 * @codeName    FootPrint
 * @version     0.1
 * @author      Karthik Vasudevan 
 */
var FPCookie = {
    
    __timeStamp: Math.round(+new Date()/1000),
    
    /*SET COOKIE DEFAULTS*/
    __longCookieName: "__fpC-L",
    __longCookieExpDays: 730,
    
    __endOfSessionCookieName: "__fpC-S",
    
    __windowCookieName: "__fpC-W",
    
    
    setCookie: function(cName, value, expDays)
    {
        var exp = '';
        if(expDays != null)
        {
            var expDate = new Date();
            expDate.setDate(expDate.getDate() + expDays);
            exp = "expires="+expDate.toGMTString();
        }
        var cValue = escape(value);
        if(cName != null)
        {
            document.cookie = cName + "=" + cValue + ';' + exp;
        }
        
    },
    getCookie: function(cName)
    {
        var i,x,y,currentCookies=document.cookie.split(";");
        for (i=0;i<currentCookies.length;i++)
        {
            x = currentCookies[i].substr(0,currentCookies[i].indexOf("="));
            y = currentCookies[i].substr(currentCookies[i].indexOf("=")+1);
            x = x.replace(/^\s+|\s+$/g,"");
            if(x==cName)
            {
                return unescape(y);
            }
        }
        return null;
    },
    checkCookie: function(cName, value, expDays)
    {
        var cookie = this.getCookie(cName);
        
        if(cookie != null)
        {            
            this.setCookie(cName, cookie, expDays);
        }
        else
        {
            this.setCookie(cName, value, expDays);
        }
    }
}
var FPDataCollection = {
    /*Data*/
    __data: {
        /*Screen & View Point Resolution*/
        'screenWidth'         : screen.width,
        'screenHeight'        : screen.height,
        'viewpointWidth'      : window.innerWidth,
        'viewpointHeight'     : window.innerHeight,
        'viewpointWidthIE6'   : document.documentElement.clientWidth,
        'viewpointHeightIE6'  : document.documentElement.clientHeight,
        'viewpointWidthIE'    : document.getElementsByTagName('body')[0].clientWidth,
        'viewpointHeightIE'   : document.getElementsByTagName('body')[0].clientHeight,
        'outerWidth'          : window.outerWidth,
        'outerHeight'         : window.outerHeight,      
        'pageXOffset'         : window.pageXOffset,
        'pageYOffset'         : window.pageYOffset,
        'screenX'             : window.screenX,
        'screenY'             : window.screenY,        
        /*Colour and Pixel depth*/
        'colorDepth'          : screen.colorDepth,
        'pixelDepth'          : screen.pixelDepth,
        /*Operating System & Browser*/
        'userAgent'           : navigator.userAgent,
        'appCodeName'         : navigator.appCodeName,
        'appName'             : navigator.appName,
        'appVersion'          : navigator.appVersion,
        'cookieEnabled'       : navigator.cookieEnabled,
        'online'              : navigator.onLine,
        'platform'            : navigator.platform,
        /*User Language*/
        'language'            : window.navigator.language,
        'languageIE'          : window.navigator.userLanguage,        
        /*Referrer*/
        'referer'             : document.referrer,
        /*URL*/
        'currentURL'          : document.URL,
        'locationHREF'        : window.location.href,
        'locationHash'        : window.location.hash,
        'locationHost'        : window.location.host,
        'locationHostName'    : window.location.hostname,
        'locationPathName'    : window.location.pathname,
        'locationPort'        : window.location.port,
        'locationProtocol'    : window.location.protocol,
        'locationSearch'      : window.location.search,        
        /*Document*/
        'documentMode'        : document.documentMode,
        'pageTitle'           : document.title,
        'readyState'          : document.readyState,
        'lastModified'        : document.lastModified,
        /*Cookie Information*/
        'longCookie'          : FPCookie.getCookie('__fpC-L'),
        'shortCookie'         : FPCookie.getCookie('__fpC-S'),
        'windowCookie'        : FPCookie.getCookie('__fpC-W'),
        /*Account Information*/
        'accountNumber'       : __setAccountNumberFP,
        'domainName'          : __setDomainNameFP,
        'pageType'            : __pageType,
        /*Timestamp*/
        'timestamp'           : Math.round(+new Date()/1000),
        'timezone'            : new Date().getTimezoneOffset()
    },
    
    createBinding: function() {
        var binding = "";
        for(var key in this.__data)
        {
            binding += key + "=" + encodeURIComponent(this.__data[key]) + "&";
        }
        return binding;
    }
}
var FPAjaxCall = {
    
    __postURL: ('https:' == document.location.protocol ? 'https://' : 'http://') + "axisyslabs.com",
    //__postURL: "http://localhost:8888",
    __postVars: "",
    __ajaxRequest: "",
    __response: "",
    
    createAjaxRequest: function()
    {
        try{
            
            this.__ajaxRequest = new XMLHttpRequest();
            
        } catch (e){
            
            try{
                
                this.__ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
                
            } catch (e) {
                
                try{
                    
                    this.__ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                    
                } catch (e){
                    
                    return true;
                    
                }
            }
        }
        return this.__ajaxRequest;
    },
    
    makeAjaxRequest: function(binding)
    {
        this.__postVars = FPDataCollection.createBinding();
        var ajaxRequest = this.createAjaxRequest();
        
        ajaxRequest.onreadystatechange = function() {
            if(ajaxRequest.readyState == 4 && ajaxRequest.status==200) {                
                return true;                
            }
            else {
                return true;
            }
	}
	if(binding != null)
        {
            this.__postVars = this.__postVars+binding;
        }
	ajaxRequest.open("GET", this.__postURL + '?' + this.__postVars, true);
        ajaxRequest.send();
    }
}

var FPEventListner = {
    
    callAjax: function(binding)
    {
        FPAjaxCall.makeAjaxRequest(binding);
    },
    anchorElements: function()
    {
        this.eventTrigger("onclick", "a");
    },
    formElements: function()
    {
        this.eventTrigger("onsubmit", "form");
    },
    eventTrigger: function(triggerEvent, tagName)
    {               
        var a = document.getElementsByTagName(tagName);
        var binding;
        for(var i in a)
        {           
            switch(triggerEvent)
            {
                case "onclick":                        
                    a[i].onclick = function()
                    {
                        binding = 'link=true&formSubmit=false&target=' + this.href + '&id=' + this.id + '&title=' + this.getAttribute('title') + '&targetWindow=' + this.getAttribute('target');
                        FPEventListner.callAjax(binding);
                    }
                    break;
                case "onsubmit":
                    a[i].onsubmit = function()
                    {
                        binding = 'link=false&formSubmit=false&target=' + this.action + '&id=' + this.id + '&title=' + this.name + '&targetWindow=' + this.getAttribute('target');
                        FPEventListner.callAjax(binding);
                    }
                    break;
                default:
                    return true;
                    break;
            }            
        }        
    }
}


FPCookie.checkCookie(FPCookie.__longCookieName, FPCookie.__timeStamp + '.' + Math.floor((Math.random()*10000000)+1000) + '.' + Math.floor((Math.random()*100)+1), FPCookie.__longCookieExpDays);
FPCookie.checkCookie(FPCookie.__endOfSessionCookieName, FPCookie.__timeStamp + '.' + Math.floor((Math.random()*10000000)+1000) + '.' + Math.floor((Math.random()*100)+1), null);
FPCookie.setCookie(FPCookie.__windowCookieName, FPCookie.__timeStamp + '.' + Math.floor((Math.random()*10000000)+1000) + '.' + Math.floor((Math.random()*100)+1), null);

var iframe = document.createElement( 'iframe' );
iframe.width = 0;
iframe.height = 0;
iframe.src = FPAjaxCall.__postURL + '?' + FPDataCollection.createBinding();
iframe.style.display="none";
iframe.style.visibility="hidden"
document.body.insertBefore(iframe, document.body.firstChild.append);
FPEventListner.anchorElements();
FPEventListner.formElements();