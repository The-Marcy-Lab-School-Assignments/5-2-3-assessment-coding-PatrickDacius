const bankAccountFactory = (initialBalance = 0) => {
  let balance = initialBalance;

  return {
    checkBalance() {
      return balance;
    },

    add(amount) {
      balance += amount;
      console.log(`$${amount} added.`);
      return `Successfully deposited $${amount}. Current balance is $${balance}.`;
    },

    subtract(amount) {
      if (balance <= amount) {
        balance -= amount;
        console.log(`$${amount} subtracted.`);
        return `Successfully withdrew $${amount}. your current balance is $${balance}.`;
      } else {
        return `Not enough funds. Your current balance is $${balance}.`;
      }
    }
  };
};

module.exports = {
  bankAccountFactory,
};
