/* 
    Необходимо создать объект bankAccount (дебет), представляющий собой банковский счёт со
    следующими свойствами:

    1. accountNumber: 123456789;
    2. accountHolderName: 'Alice';
    3. balance: 1000;
    4. deposit() для описания действия по добавлению денежных средств на счёт;
    5. withdraw() для описания действия по снятию денежных средств со счёта;
    6. checkBalance() для проверки баланса

*/
// Создаем объект bankAccount
const bankAccount = {
    accountNumber: 123456789,
    accountHolderName: 'Alice',
    balance: 1000,
  
    // Метод для добавления денег на счет (депозит)
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Добавлено $${amount} на счет. Новый баланс: $${this.balance}`);
      } else {
        console.log('Сумма депозита должна быть положительной.');
      }
    },
  
    // Метод для снятия денег со счета
    withdraw: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Снято $${amount} со счета. Новый баланс: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log('Недостаточно средств на счете.');
      } else {
        console.log('Сумма для снятия должна быть положительной.');
      }
    },
  
    // Метод для проверки баланса
    checkBalance: function() {
      console.log(`Баланс счета для ${this.accountHolderName}: $${this.balance}`);
    }
  };
  
  // Пример использования методов объекта bankAccount
  bankAccount.checkBalance(); // Проверка баланса
  bankAccount.deposit(500); // Добавление $500 на счет
  bankAccount.withdraw(200); // Снятие $200 со счета
  bankAccount.withdraw(1500); // Попытка снять больше, чем на счете