"use strict";

const accounts: any[] = [
  { clientName: "Igor", accountNumber: 11234543, balance: 203004099.2 },
  { clientName: "Vladimir", accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: "Sergei", accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(accountNumber: number): any {
  let result: string[] = [];
  for (let i: number = 0; i <= 3; i++) {
    if (accountNumber === accounts[i]["accountNumber"]) {
      return accounts[i]["clientName"] + ", " + accounts[i]["balance"];
    }
  }
}

console.log(getNameAndBalance(43546731));

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//

// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

function moneyTransfer(
  accounts: object,
  fromAccount: number,
  toAccount: number,
  cash: number
) {
  let fromCash;
  let toCash;
  let updatedAccounts = accounts;
  let output;

  if (fromAccount || toAccount !== 11234543 || 43546731 || 23456311) {
    console.log("404 - account not found");
  } else {
    for (let i: number = 0; i < 3; i++) {
      if (fromAccount === updatedAccounts[i]["accountNumber"]) {
        fromCash = fromAccount = updatedAccounts[i]["balance"] =
          updatedAccounts[i]["balance"] - cash;
        output = updatedAccounts;
      } else if (toAccount === updatedAccounts[i]["accountNumber"]) {
        toCash = toAccount = updatedAccounts[i]["balance"] =
          updatedAccounts[i]["balance"] + cash;
        output = updatedAccounts;
      }
    }
    console.log(output);
  }
}

moneyTransfer(accounts, 11234543, 43546731, 10);
