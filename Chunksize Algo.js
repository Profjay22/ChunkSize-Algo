function alternate (arr, chunkSize){
  
  let n = arr.length;
  const res =  [];
  let newArr = [];
  const odds = [];
  odds[0] = arr[0]
  
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
   
   for (let i = 1; i < arr.length; i += chunkSize) {
        const chunks = arr.slice(i, i + chunkSize);
        odds.push(chunks);
    }
  if(n%2 ==0 ){
    
  for(let i =0; i<res.length; i++){
   for(let j=0; j<res[i].length-1; j++) {
  
  newArr.push(res[i][j+1])
  newArr.push(res[i][j])
  
   }
   
  }
  
  }
  
   else if(n%2 !== 0 ){
     
   newArr[0] = odds[0]
  for(let i =1; i<=odds.length-1; i++){
    
   for(let j=0; j<1; j++) {
     
  newArr.push(odds[i][j+1])
  newArr.push(odds[i][j])
  
   }
   
  }
  
  }
  
  else {
    
    return arr;
  }

 
  return newArr;
}