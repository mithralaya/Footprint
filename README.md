Footprint
=========

User Behaviour Analytics

An Urchin inspired user analytics collector and recorder. 
fp.js is written in core javascript which can collect DOM and user events and send it to a server using ajax.


Websites who like to record there user behaviour can install the below piece of code just after the body.

```
<script type="text/javascript">
      var __setAccountNumberFP="FP-1234560-1"; // asign a unique account number to identify the account.
      var __setDomainNameFP="www.example.com"; // one of the websites in the account
      var __pageType="normal"; // can be set normal, 404, 500, 503 etc.
      (function ()
      {
          var fp = document.createElement( 'script' );
          fp.type = 'text/javascript';
          fp.async = true;
          fp.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.yourCDN.com/path/to/fp.min.js';
          var s = document.getElementsByTagName( 'script' )[0];
          s.parentNode.insertBefore( fp, s );
      })();
      
</script>

```


Please feel free to use and contribute.

Let me know if I can improve my coding anywhere.
