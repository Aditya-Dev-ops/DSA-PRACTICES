var reverse = function(x) {
        let ans = String(+Math.abs(x)).split('').reverse().join('');
        if(ans>Math.pow(2,31)) ans = 0;
        return x < 0 ? -1 * ans : ans;
};
