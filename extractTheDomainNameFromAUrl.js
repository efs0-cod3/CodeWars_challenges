function domainName(url){
    //your code here
    url = url.replace('http://', "").replace('https://','').replace('www.','')
    return url.split('.')[0]
  }
  
  function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
  }