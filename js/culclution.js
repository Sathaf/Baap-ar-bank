document.getElementById('deposit-button').addEventListener('click',  function(){
     const depositInput = document.getElementById('deposit-input');
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText);
    //  console.log(deposiAmount);
     const depositTotal = document.getElementById('deposit-total');
     const depositAmountTextT =  depositTotal.innerText;
     const PriviousAmountTotal = parseFloat(depositAmountTextT)
     depositTotal.innerText= PriviousAmountTotal + depositAmount;
    // balance update
     const balanceTotal = document.getElementById("balance-total");
     const balanceTotalText = balanceTotal.innerText;
     const PriviousBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = PriviousBalanceTotal + depositAmount;

   



   //set the clear
   depositInput.value = "";   
})

//withdrew update
document.getElementById('withdrew-button').addEventListener('click', function(){
     const withdrewInput = document.getElementById('withdrew-input');
     const withdrewInputText = withdrewInput.value
     const withdrawAmount = parseFloat(withdrewInputText);
      

      const withdrewTotal  = document.getElementById("withdraw-total");
      const withdrewAmountText = withdrewTotal.innerText
      const PriviousAmountTotal = parseFloat(withdrewAmountText);

      withdrewTotal.innerText = PriviousAmountTotal + withdrawAmount;
      

      const balanceTotal = document.getElementById("balance-total");
      const balanceTotalText = balanceTotal.innerText;
      const PriviousBalanceTotal = parseFloat(balanceTotalText);
      balanceTotal.innerText = PriviousBalanceTotal - withdrawAmount;

      withdrewInput.value = "";

       
})
