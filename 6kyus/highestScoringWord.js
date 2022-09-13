// P => a str
// R => the word that has the max value in a str get by each letter
// E => high('man i need a taxi up to ubud'), 'taxi'
function high(x){
    //   set each letter a value
      let abc = {
        a:1, b:2, c:3, d:4, e:5, f:6, g:7,
        h:8, i:9, j:10, k:11, l:12, m:13,
        n:14, o:15, p:16, q:17, r:18, s:19,
        t:20, u:21, v:22, w:23, x:24, y:25,
        z:26
      }
    //   split into arr
    x = x.split(' ')
    //     get a recipient and a accumulator
    let catcher = {}
          let sum = 0
    //       iterate  into the obj and arr
      x.forEach( (w) => {
        for(let i = 0; i < w.length;i++){
          catcher[w] = sum += abc[w[i]]
        }
        // after placing the value set sum = 0 for the other word
          sum = 0
      })
    //   get object values and get the max from it
      let getTheMax = Math.max(...Object.values(catcher))
      catcher = Object.entries(catcher)
    //   filter and compare entries and return the key that have the value that matches getTheMax
    let filtered = catcher.filter(([k,v]) => {
      if(v == getTheMax){
        return k
      }
    })
    return filtered[0][0]
    }