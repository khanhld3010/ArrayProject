let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
let indexMax = 0;

for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i]
        indexMax = i;
    }

}
console.log("Ở vị trí "+indexMax+" có giá trị lớn nhất là "+max)