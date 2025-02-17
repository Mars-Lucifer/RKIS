function task1() {
  const block = document.getElementById("task1");
  if (true) {
    block.children[1].style.display = "block";
  }
  if (false) {
    block.children[2].style.display = "block";
  }
}

function task2(m, block) {
  console.log(m);
  let n;
  if (Number(m) > 50) {
    n = "Big m";
  } else {
    n = "Small m";
  }
  block.children[2].innerText = n;
}

function task3(block) {
  let n = 0;
  let i = 2;
  while (i < 9) {
    n++;
    i++;
  }

  block.children[1].innerText = `Ответ: ${n}`;
}

function task4(block) {
  let start = 45;
  let end = 67;
  while (start < end) {
    start++;
    console.log(start);
    block.children[1].innerText = block.children[1].innerText + " " + start;
  }
}

function task5(block) {
  let start = 45;
  let end = 670;
  while (start < end) {
    start++;
    if (start % 10 == 0) {
      console.log(start);
      block.children[1].innerText = block.children[1].innerText + " " + start;
    }
  }
}

function task6(block) {
  task4(block.children[1]);
  task5(block.children[2]);
}

function task7(block, value) {
  const textEl = block.children[2];
  let text;
  switch (value) {
    case 0:
      text = "Ноль";
      break;
    case 1:
      text = "Один";
      break;
    case 2:
      text = "Два";
      break;
    case 3:
      text = "Три";
      break;
    case 4:
      text = "Четыре";
      break;
    case 5:
      text = "Пять";
      break;
    case 6:
      text = "Шесть";
      break;
    case 7:
      text = "Семь";
      break;
    case 8:
      text = "Восемь";
      break;
    case 9:
      text = "Девять";
      break;
    default:
      text = "Ты что такое ввел";
  }
  textEl.innerText = text;
}

function task8(block, url) {
  for (let i = 0; i <= 10; i++) {
    // Не прикольный вариант
    // document.write(`<img src="${url}" alt="">`);

    // Прикольный
    let img = document.createElement("img");
    img.src = url;
    img.alt = "Alt";
    img.style.borderRadius = "24px";
    block.children[1].append(img);
  }
}

function task9() {
  const block = document.getElementById("task9");
  const size = Number(block.children[1].value);
  const unit = block.children[2].value;
  let bytes;

  switch (unit) {
    case "Кб":
      bytes = size * 1024;
      break;
    case "Мб":
      bytes = size * 1024 ** 2;
      break;
    case "Гб":
      bytes = size * 1024 ** 3;
      break;
    default:
      bytes = "Ошибка: неизвестная единица измерения";
  }

  block.children[4].textContent = bytes;
}

document.addEventListener("DOMContentLoaded", () => {
  // Task 1
  task1();

  //   Task 2
  const block2 = document.getElementById("task2");
  block2.children[1].addEventListener("input", (event) => {
    task2(Number(block2.children[1].value), block2);
  });

  //   Task 3
  const block3 = document.getElementById("task3");
  task3(block3);

  //   Task 4
  const block4 = document.getElementById("task4");
  task4(block4);

  //   Task 5
  const block5 = document.getElementById("task5");
  task5(block5);

  //   Task 6
  const block6 = document.getElementById("task6");
  task6(block6);

  //   Task 7
  const block7 = document.getElementById("task7");
  block7.children[1].addEventListener("input", (event) => {
    task7(block7, Number(block7.children[1].value));
  });

  //   Task8
  const block8 = document.getElementById("task8");
  task8(
    block8,
    "https://cloud.appwrite.io/v1/storage/buckets/67a09f38001759efc274/files/67b0aabc00389c7cb0da/view?project=678e9fec0037ef69e479"
  );
});
