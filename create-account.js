function createAccount(pin, amount) {
  let balance = amount || 0;
  let myPin = pin;

  const checkBalance = (pin) => {
    if (pin !== myPin) return "Invalid PIN.";
    return `$${balance}`;
  };
  const deposit = (pin, amt) => {
    if (pin !== myPin) return "Invalid PIN.";
    balance += amt;
    return `Succesfully deposited $${amt}. Current balance: $${balance}.`;
  };
  const withdraw = (pin, amt) => {
    if (pin !== myPin) return "Invalid PIN.";
    if (amt > balance)
      return "Withdrawal amount exceeds account balance. Transaction cancelled.";
    balance -= amt;
    return `Succesfully withdrew $${amt}. Current balance: $${balance}.`;
  };
  const changePin = (pin, newPin) => {
    if (pin !== myPin) return "Invalid PIN.";
    myPin = newPin;
    return "PIN successfully changed!";
  };

  return {
    checkBalance: checkBalance,
    deposit: deposit,
    withdraw: withdraw,
    changePin: changePin,
  };
}

module.exports = { createAccount };
