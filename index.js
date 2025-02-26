// Задание 1
function hello1(block) {
    block.children[1].innerText = "Привет, JavaScript!";
}

// Задание 2
function hello2(name, block) {
    if (name) {
        block.children[2].innerText = `Привет, ${name}!`;
    } else {
        block.children[2].innerText = "Привет, гость!";
    }
}

function task2() {
    const block = document.getElementById("task2");
    const name = block.children[1].value;
    hello2(name, block);
}

// Задание 3
function mul(m, n) {
    return m * n;
}

function task3() {
    const block = document.getElementById("task3");
    const m = Number(block.children[1].value) || 0;
    const n = Number(block.children[2].value) || 0;
    const result = mul(m, n);
    block.children[4].innerText = `Произведение: ${result}`;
}

// Задание 4
function repeat(str, n) {
    return str.repeat(n);
}

function task4() {
    const block = document.getElementById("task4");
    const str = block.children[1].value || "";
    const n = Number(block.children[2].value) || 2;
    const result = repeat(str, n);
    block.children[4].innerText = `Результат: ${result}`;
}

// Задание 5
function rgb(r, g, b) {
    return `rbg(${r},${g},${b})`;
}

function task5() {
    const block = document.getElementById("task5");
    const r = Number(block.children[1].value) || 0;
    const g = Number(block.children[2].value) || 0;
    const b = Number(block.children[3].value) || 0;
    const result = rgb(r, g, b);
    block.children[5].innerText = `RGB: ${result}`;
}

// Задание 6
function avg(...args) {
    if (args.length === 0) return 0;
    const sum = args.reduce((acc, val) => acc + val, 0);
    return sum / args.length;
}

function task6() {
    const block = document.getElementById("task6");
    const num1 = Number(block.children[1].value) || 0;
    const num2 = Number(block.children[2].value) || 0;
    const num3 = Number(block.children[3].value) || 0;
    const result = avg(num1, num2, num3);
    block.children[5].innerText = `Среднее: ${result}`;
}

// Задание 7
function m(a, b) {
    return mul(a, b);
}

function task7() {
    const block = document.getElementById("task7");
    const a = Number(block.children[1].value) || 0;
    const b = Number(block.children[2].value) || 0;
    const result = m(a, b);
    block.children[4].innerText = `Результат: ${result}`;
}

// Задание 8
function operation(m, n, o) {
    return o(m, n);
}

function task8() {
    const block = document.getElementById("task8");
    const m = Number(block.children[1].value) || 0;
    const n = Number(block.children[2].value) || 0;
    const operationType = block.children[3].value;
    let op;
    switch (operationType) {
        case "add":
            op = (a, b) => a + b;
            break;
        case "subtract":
            op = (a, b) => a - b;
            break;
        case "multiply":
            op = (a, b) => a * b;
            break;
        case "divide":
            op = (a, b) => (b !== 0 ? a / b : "Деление на ноль");
            break;
    }
    const result = operation(m, n, op);
    block.children[5].innerText = `Результат: ${result}`;
}

// Задание 9
function addN(n) {
    return function (x) {
        return x + n;
    };
}

function task9() {
    const block = document.getElementById("task9");
    const n = Number(block.children[1].value) || 0;
    const addFunc = addN(n);
    const result = addFunc(5);
    block.children[3].innerText = `Резльтат сложения с 5: ${result}`;
}

// Задание 10
function words(n) {
    let word;
    if (n % 10 === 1 && n % 100 !== 11) {
        word = "товар";
    } else if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) {
        word = "товара";
    } else {
        word = "товаров";
    }
    return `${n} ${word}`;
}

function task10() {
    const block = document.getElementById("task10");
    const n = Number(block.children[1].value) || 0;
    const result = words(n);
    block.children[3].innerText = result;
}

// Вызов функции для задания 1 при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    const block1 = document.getElementById("task1");
    hello1(block1);
});
