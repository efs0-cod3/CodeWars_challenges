function hello(name) {
    if(name == null || name == ''){
      return `Hello, World!`
    }else{
    return `Hello, ${name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()}!`;
    }
  }
  console.log(hello('alice'));
  console.log(hello());
  console.log(hello(''));
  