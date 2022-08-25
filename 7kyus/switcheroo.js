const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")

function switchero(x){
let catcher = ''
x= x.split('')
  for(let i = 0;i < x.length; i++){
    if(x[i] == 'a'){
  catcher += 'b'
    }else if (x[i] == 'b'){
      catcher += 'a'
    }else{
      catcher += x[i]
         }
  }
  return catcher
}
switcheroo('abacb')
switchero('abacb')