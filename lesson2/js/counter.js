function odlicz(x){
  if(x % 3 ===0 || x%5 ===0)
    console.log(x);
  if(x>0){
    odlicz(x-1);
  }

}
odlicz (25)
