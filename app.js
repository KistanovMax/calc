const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const clearButton = document.querySelector('[data-clear]');
const decimalButton = document.querySelector('[data-decimal]');
const sumButton = document.querySelector('[data-sum]');
const outputBottom = document.querySelector('#display-output-bottom');
const outputTop = document.querySelector('#display-output-top');
let result = 0;
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
   let topNumber = Number(outputTop.value);
   let bottomNumber = Number(outputBottom.value);
   switch (operation) {
      case '+':
         result = topNumber + bottomNumber;
         break;

      case '-':
         result = topNumber - bottomNumber;
         break;

      case '*':
         result = topNumber * bottomNumber;
         break;

      case '/':
         let divider = bottomNumber;
         if (divider === 0) {
            divider = 1;
         }

         result = topNumber / divider;;
         break;
   }
   
   outputTop.value = '0';
   outputBottom.value = result;
};