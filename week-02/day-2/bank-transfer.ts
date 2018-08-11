'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(accountNumber: number): any {
    let result: string[] = [];
    for (let i: number = 0; i <= 3; i++) {
        if (accountNumber === accounts[i]['accountNumber']){
           return accounts[i]['clientName'] + ', ' + accounts[i]['balance'];
        }
    }
}

console.log(getNameAndBalance(43546731));

/*

function moneyTransfer(accounts: object, fromAccount: number, toAccount: number, cash: number): any {
    
    let fromCash;
    let toCash;

    let updatedAccunts = accounts;

    if(fromAccount !== 11234543 && 43546731 && 23456311){
        console.log('404 - account not found');
    } else if (fromAccount === 11234543) {
        fromCash = fromAccount = updatedAccunts[0]['balance'] = updatedAccunts[0]['balance'] - cash;
    } else if (fromAccount === 43546731) {
        fromCash = fromAccount = updatedAccunts[1]['balance'] = updatedAccunts[1]['balance'] - cash;
    } else if (fromAccount === 23456311) {
        fromCash = fromAccount = updatedAccunts[2]['balance'] = updatedAccunts[2]['balance'] - cash;
    }

    if (toAccount === 11234543) {
        toCash = toAccount = updatedAccunts[0]['balance'] = updatedAccunts[0]['balance'] + cash;
    } else if (toAccount === 43546731) {
        toCash = toAccount = updatedAccunts[1]['balance'] = updatedAccunts[1]['balance'] + cash;
    } else if (toAccount === 23456311) {
        toCash = toAccount = updatedAccunts[2]['balance'] = updatedAccunts[2]['balance'] + cash;
    }

    console.log(updatedAccunts);

}

moneyTransfer(accounts, 1123223232324543, 43546731, 1);

*/

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