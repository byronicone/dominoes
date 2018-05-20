/**
 * @param {string} myDominoes
 * @return {string}
 */
var myDominoes = [];

var pushDominoes = function(dominoes) {
   myDominoes = dominoes; 
   let count=0; 
    let fallingIndices = new Set();
   for(let char of myDominoes){
       if(char=='L' || char=='R'){
           fallingIndices.add(count);
       }
       count++;
   }
    for(let i = 0; i<myDominoes.length; i++){
        fallingIndices = oneSecondOfDominoesFalling(fallingIndices);
    }
     
    return myDominoes;
};

function oneSecondOfDominoesFalling(fallingIndices){
   let nextIndices = new Set(); 
    fallingIndices.forEach( (index) => {
       let fall = false;
      let direction = myDominoes[index];
       let nextIndex = index;
      if(direction=='L' && index!=0){
              opposite = 'R';
          nextIndex = index-1;
          fall = myDominoes[nextIndex]=='.' && (nextIndex-1<0 || !fallingIndices.has(nextIndex-1) || myDominoes[nextIndex-1]!=opposite); 
          
      }  
       else if(direction=='R' && index!=myDominoes.length-1){
              opposite = 'L';
                nextIndex = index+1;
          fall = myDominoes[nextIndex]=='.' && (nextIndex+1>myDominoes.length  || !fallingIndices.has(nextIndex+1) || myDominoes[nextIndex+1]!=opposite); 
       }
       if(fall){
       if(myDominoes[nextIndex]=='.'){ 
           myDominoes = myDominoes.substr(0,nextIndex) + direction + myDominoes.substr(nextIndex+1, myDominoes.length-1);
           nextIndices.add(nextIndex);
       }}
   }); 
    return nextIndices;
}
