// Bank widow

type Tranction = {
  type: 'deposit' | 'withdraw';
  amount: number;
};
const prossesTranestion = (
  balance: number,
  trantion: Tranction,
): number | string => {
  if (trantion.type === 'deposit') {
    return balance + trantion.amount;
  }

  if (trantion.type === 'withdraw') {
    if (trantion.amount > balance) {
      return 'Infuction Balance';
    }

    return balance - trantion.amount;
  }

  throw new Error('Invalid transaction type');
};

// console.log(prossesTranestion(5000, { type: 'deposit', amount: 2000 }));
(prossesTranestion(5000, { type: 'withdraw', amount: 7000 }));
