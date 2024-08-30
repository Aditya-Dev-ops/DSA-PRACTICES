var isValidSudoku = function(board) {
    const isvalidGroup = (group)=>{
       const seen = new Set();
       for(let num of group){
         if(num !== '.'){
            if(seen.has(num)){
                return false;
            }
            seen.add(num);
         }
       };
       return true;
    }
    // Check rows
    for(let i=0; i<9; i++){
        if(!isvalidGroup(board[i])){
            return false;
        }
    };
    //Check column
    for(let i=0; i< 9; i++){
        let column = [];
        for(let j=0; j<9; j++){
            column.push(board[j][i]);
        }
        if(!isvalidGroup(column)){
            return false;
        }
    };
    // Check 3x3 sub-grids
    for(let i=0 ; i<9; i += 3){
        for(let j=0; j<9; j+=3){
            let grid = [];
            for(let k =0; k<3; k++){
            for(let l=0; l<3; l++){
               grid.push(board[k+i][l+j]);
            }
            }
            if(!isvalidGroup(grid)){
                return false;
            }
        }
    }
     return true;
};

console.log(isValidSudoku(
[
[".",".",".",".","5",".",".","1","."],
[".","4",".","3",".",".",".",".","."],
[".",".",".",".",".","3",".",".","1"],
["8",".",".",".",".",".",".","2","."],
[".",".","2",".","7",".",".",".","."],
[".","1","5",".",".",".",".",".","."],
[".",".",".",".",".","2",".",".","."],
[".","2",".","9",".",".",".",".","."],
[".",".","4",".",".",".",".",".","."]
]));

[
["00","01","02",  "03","04","05",  "06","07","08"],
["10","11","12",  "13","14","15",  "16","17","18"],
["20","21","22",  "23","24","25",  "26","27","28"],
["30","31","32",  "33","34","35",  "36","37","38"],
["40","41","42",  "43","44","45",  "46","47","48"],
["50","51","52",  "53","54","55",  "56","57","58"],
["60","61","62",  "63","64","65",  "66","67","68"],
["70","71","72",  "73","74","75",  "76","77","78"],
["80","81","82",  "83","84","85",  "86","87","88"],
]