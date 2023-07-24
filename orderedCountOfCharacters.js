const orderedCount = function (text) {
    // Implement me!
  //   will get the last array
    const result = [];
  //   will received the item that has been checked
    const checker = [];
  //   split text into arr
    text = text.split("");
  
    for (i = 0; i < text.length; i++) {
  //     get the length of item repetition 
      let filteredTxt = text.filter((el) => el === text[i]);
  //   will check if the item has been checked
      if (!checker.includes(text[i])) {
        checker.push(text[i]);
  //       if item has not been checked will push the item and item repetition length to result arr  
        result.push([text[i], filteredTxt.length]);
      }
    }
    return result;
  };