function cashOut (money){
      if (typeof money != 'number' || money<0){
    return 'invalid'
      }
    const value = money;
    const cashOutCharge = money*1.75/100 ;
    const realAmmount = money - cashOutCharge;
    return realAmmount;
  }
  

  
  
  const enterValue = cashOut (-150);
  console.log (enterValue)