const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const clearButton = document.querySelector('[data-clear]');
const decimalButton = document.querySelector('[data-decimal]');
const sumButton = document.querySelector('[data-sum]');
const outputBottom = document.querySelector('#display-output-bottom');
const outputTop = document.querySelector('#display-output-top');
let sum = 0;
let operation;



// Обработчики событий:

for (let numberButton of numberButtons) {
   numberButton.addEventListener('click', function() {
      pressNumber(numberButton);
   });
}

for (let operationButton of operationButtons) {
   operationButton.addEventListener('click', function () {
      pressOperation(operationButton);
   });
}

allClearButton.addEventListener('click', function() {
   pressAllClear(allClearButton);
});

clearButton.addEventListener('click', function() {
   pressClear(clearButton);
});

sumButton.addEventListener('click', function() {
   pressSum(sumButton);
});

decimalButton.addEventListener('click', function() {
   pressDecimal(decimalButton);
});



// Функции нажатия на кнопку:

function pressNumber(numberButton) {
   if (outputBottom.value === '0') {
      outputBottom.value = '';
      outputBottom.value += numberButton.textContent;
   } else {
      outputBottom.value += numberButton.textContent;
   };
};

function pressOperation(operationButton) {
   if (operationButton) {
      operation += operationButton.textContent;

      outputTop.value = outputBottom.value;
      outputBottom.value = '0';

      sum = Number(outputTop.value) + Number(outputBottom.value);
   }
};

function pressAllClear(allClearButton) {
   outputBottom.value = '0';
   outputTop.value = '0';
};

function pressClear(clearButton) {
   outputBottom.value = outputBottom.value.substring(0, outputBottom.value.length - 1);
   if (outputBottom.value === '') {
      outputBottom.value = '0';
   };
};

function pressDecimal(decimalButton) {
   if (!outputBottom.value.includes('.')) {
      outputBottom.value += '.';
   };
};

function pressSum(sumButton) {
   switch (operation) {
      case '+':
         sum = Number(outputTop.value) + Number(outputBottom.value);
         break;

      case '-':
         sum = Number(outputTop.value) - Number(outputBottom.value);
         break;

      case '*':
         sum = Number(outputTop.value) * Number(outputBottom.value);
         break;

      case '/':
         sum = Number(outputTop.value) / Number(outputBottom.value);
         break;
   }
   
   outputTop.value = '0';
   outputBottom.value = sum;
};