// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

var maxProfit = function(prices) {
    let profit = 0;
    let buy=prices[0];
    let sell =0;
    let trade = false;
    for(let i=1; i<prices.length; i++){
      if(prices[i] < buy){
          buy = prices[i];
      } 
      else{
          sell = prices[i];
        if(prices[i] > prices[i+1] && i !== prices.length-1){
           profit += sell -buy;
           buy = prices[i+1];
           trade = true;
        }
        else{
           if(i === prices.length-1){
             sell = prices[i];
            }
           else{
            sell = prices[i+1];
           };
        }
      };
      if(trade){
        buy = prices[i+1];
        trade = false;
      };
      if(sell === prices[prices.length-1] && (i === prices.length-1 || i === prices.length-2)){
         profit += sell - buy;
         i = prices.length;
      };
    }
      return profit;
  };
