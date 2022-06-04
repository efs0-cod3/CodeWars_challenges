function domainName(url){
      url = url.replace("https://", '');
      url = url.replace("http://", '');
      url = url.replace("www.", '');
      return url.split('.')[0];
    }
    domainName('www.google.com')


    function domainName(url){
        return url.match(/^(?:[a-z]{2,}\:\/\/)?(?:www\.)?([a-z0-9_-]*)/)[1]
      
        }
        domainName('www.google.com')