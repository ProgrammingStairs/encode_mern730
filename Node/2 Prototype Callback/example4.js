// example showing the concept of prototype
function Bank(actNo,userName,balance){
    this.actNo = actNo;
    this.userName = userName;
    this.balance = balance;
}
Bank.prototype.showDetails = function(){
    console.log("Account No. : "+this.actNo);
    console.log("Username : "+this.userName);
    console.log("Balance : "+this.balance);    
}
Bank.prototype.deposit = function(damt){
    this.balance = this.balance+damt;
    console.log("After Deposit Balance : "+this.balance);
}
Bank.prototype.withDraw = function(wamt){
    if(wamt>this.balance)
        console.log("Low Balance..!!");
    else{
        console.log("Withdraw amount : "+wamt);
        console.log("Remaining Balance : "+(this.balance-wamt));
    }
}
const bank = new Bank("USER123","Andrew Anderson",25000);
bank.showDetails();
bank.deposit(20000);
bank.withDraw(5000);