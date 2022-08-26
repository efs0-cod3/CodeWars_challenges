function getSize(width, height, depth){
    let vol = width * depth * height
    let sArea = 2*(width * height) + 2*(height * depth) + 2*(width*depth)
    return [ sArea, vol ]
  }
  getSize(4, 2, 6)