function removeUrlAnchor(url){
    // TODO: complete
    url = url.split('#')
  return url[0]
  }

// regex
function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
  }