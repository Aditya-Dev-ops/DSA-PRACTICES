
var rotate = function(matrix) {
   for(let i=0; i<matrix.length; i++){
        for(let j=i; j<matrix.length; j++){
         [matrix[i][j] , matrix[j][i]] = [matrix[j][i] , matrix[i][j]];
         console.log(matrix);
        }
     }
   for(let i=0; i<matrix.length; i++){
    matrix[i].reverse();  
   }
   console.log(matrix);
 return matrix;
};

matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output =  [[7,4,1],[8,5,2],[9,6,3]]

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));

// 123  147
// 456  258
// 789  369