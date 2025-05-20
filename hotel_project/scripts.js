// Власна функція «Діалог з користувачем»
function userDialog() {
    alert("Починаємо діалог!");

    let userName = prompt("Як вас звати?", "Гість");
    if (userName === null || userName.trim() === "") {
        userName = "Анонім";
        alert("Що ж, будете Анонімом!");
    } else {
        alert(`Привіт, ${userName}!`);
    }

    let userAge;
    let isValidAge = false;
    while (!isValidAge) {
        userAge = prompt(`Скільки вам років, ${userName}?`);
        if (userAge === null) {
            alert("Ви не захотіли вказати вік.");
            break; // Вихід з циклу, якщо користувач натиснув "Скасувати"
        }
        userAge = parseInt(userAge);
        if (!isNaN(userAge) && userAge > 0 && userAge < 120) {
            isValidAge = true;
        } else {
            alert("Будь ласка, введіть коректний вік (число від 1 до 119).");
        }
    }

    if (isValidAge) {
        if (userAge < 18) {
            alert(`Юний ${userName}, вам ще немає 18.`);
        } else if (userAge >= 18 && userAge < 60) {
            alert(`${userName}, ви у розквіті сил!`);
        } else {
            alert(`Поважний ${userName}, мудрості вам не позичати!`);
        }
    }

    const knowsJS = confirm(`${userName}, ви знайомі з JavaScript?`);
    if (knowsJS) {
        alert("Чудово! Тоді вам буде цікаво.");
        console.log(`${userName} знає JavaScript.`);
    } else {
        alert("Не біда, JavaScript - це цікаво і не так складно, як здається!");
        console.log(`${userName} не знає JavaScript (або так сказав).`);
    }

    // Цикл для прикладу
    let好きなФрукт = ""; // Улюблений фрукт
    const fruits = ["яблуко", "банан", "апельсин"];
    while (true) {
        好きなФрукт = prompt(`Який ваш улюблений фрукт з цього списку: ${fruits.join(', ')}? (або напишіть "немає")`).toLowerCase();
        if (好きなФрукт === null) break; // Користувач натиснув "Скасувати"
        if (fruits.includes(好きなФрукт)) {
            alert(`Чудовий вибір, ${好きなФрукт} - це смачно!`);
            break;
        } else if (好きなФрукт === "немає") {
            alert("Шкода, що нічого не сподобалось.");
            break;
        }
        alert("Будь ласка, виберіть зі списку або напишіть 'немає'.");
    }
    console.log("Діалог завершено.");
}

// Власна функція виводу інформації про розробника сторінки
function displayDeveloperInfo(lastName, firstName, position = "Розробник") {
    const devInfoString = `Розробник: ${lastName} ${firstName}, Посада: ${position}`;
    console.log(devInfoString);
    alert(devInfoString); // Також виведемо через alert для наочності
}

// Функція порівняння двох рядків
function compareAndShowLongerString(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        alert("Будь ласка, передайте два рядки для порівняння.");
        return;
    }
    if (str1.length > str2.length) {
        alert(`Перший рядок довший: "${str1}"`);
    } else if (str2.length > str1.length) {
        alert(`Другий рядок довший: "${str2}"`);
    } else {
        alert(`Рядки однакової довжини: "${str1}" та "${str2}"`);
    }
}
// Зміна фону сторінки на 30 секунд
function changeBackgroundFor30Seconds() {
    const originalBgColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "lightblue";
    console.log("Фон змінено на lightblue");

    setTimeout(function() {
        document.body.style.backgroundColor = originalBgColor;
        console.log("Фон повернуто до оригінального.");
        alert("30 секунд минуло, фон повернуто!");
    }, 30000); 
}

// Перенаправлення браузера на іншу сторінку
function redirectToPage(url) {
    if (confirm(`Ви дійсно хочете перейти на сторінку ${url}?`)) {
        window.location.href = url;
    } else {
        alert("Перенаправлення скасовано.");
    }
}

// Робота з DOM елементами
function domManipulationsDemo() {
    // getElementById
    const welcomeHeader = document.getElementById('welcome');
    if (welcomeHeader) {
        welcomeHeader.style.color = 'purple';
        console.log("getElementById: Змінено колір заголовка 'welcome'");
        // innerHTML, outerHTML, textContent, nodeValue/data
        console.log("welcomeHeader.innerHTML:", welcomeHeader.innerHTML); // Вміст HTML всередині
        welcomeHeader.innerHTML += " <span>(JS Updated!)</span>";
        console.log("welcomeHeader.outerHTML:", welcomeHeader.outerHTML); // Весь HTML елемента
        console.log("welcomeHeader.textContent:", welcomeHeader.textContent); // Текстовий вміст

        // Для nodeValue/data потрібен текстовий вузол
        if (welcomeHeader.firstChild && welcomeHeader.firstChild.nodeType === Node.TEXT_NODE) {
            console.log("welcomeHeader.firstChild.nodeValue:", welcomeHeader.firstChild.nodeValue);
            welcomeHeader.firstChild.nodeValue = "Welcome to "; // Змінюємо лише текстовий вузол
        } else if (welcomeHeader.childNodes.length > 0) {
            // Спробуємо знайти текстовий вузол, якщо він не перший
            for (let node of welcomeHeader.childNodes) {
                if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
                    console.log("Found text node - nodeValue:", node.nodeValue);
                    // node.nodeValue = "Текст змінено через nodeValue "; // Може бути ризиковано, якщо структура складна
                    break;
                }
            }
        }

    } else {
        console.error("Елемент з ID 'welcome' не знайдено!");
    }

    // querySelectorAll
    const paragraphsInMain = document.querySelectorAll('main > p');
    console.log(`querySelectorAll: Знайдено ${paragraphsInMain.length} параграфів у main.`);
    paragraphsInMain.forEach((p, index) => {
        p.style.border = "1px dotted green";
        p.textContent += ` [P-${index + 1} styled by JS]`;
    });
    // document.createElement, createTextNode, append, prepend, after, replaceWith, remove
    const mainElement = document.querySelector('main');
    if (mainElement) {
        // createElement & createTextNode & append
        const newDiv = document.createElement('div');
        newDiv.id = "js-created-div";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "15px";
        newDiv.style.border = "2px solid orange";
        const newTextNode = document.createTextNode("Цей блок створено динамічно за допомогою JavaScript! ");
        newDiv.appendChild(newTextNode); // appendChild - старіший метод, але працює
        const newSpan = document.createElement('span');
        newSpan.textContent = "(І цей span теж!)";
        newSpan.style.fontWeight = "bold";
        newDiv.append(newSpan); // append може додавати і вузли, і рядки
        mainElement.append(newDiv); // Додаємо в кінець main
        console.log("createElement, createTextNode, append: Новий div додано в кінець main");

        // prepend
        const prependedText = document.createElement('p');
        prependedText.textContent = "Цей текст додано на початок main за допомогою prepend.";
        prependedText.style.fontStyle = "italic";
        prependedText.style.color = "blue";
        mainElement.prepend(prependedText);
        console.log("prepend: Текст додано на початок main");

        // after
        const firstParagraphInMain = mainElement.querySelector('p'); // Перший параграф
        if (firstParagraphInMain) {
            const afterText = document.createElement('h4');
            afterText.textContent = "Цей заголовок додано після першого параграфа за допомогою 'after'.";
            afterText.style.color = "teal";
            firstParagraphInMain.after(afterText);
            console.log("after: Заголовок додано після першого параграфа в main");
        }

        // replaceWith (замінимо щойно створений newDiv)
        const replacementElement = document.createElement('p');
        replacementElement.id = "replacement-for-div";
        replacementElement.textContent = "Створений div був замінений цим параграфом за допомогою 'replaceWith'.";
        replacementElement.style.color = "maroon";
        replacementElement.style.fontWeight = "bold";
        newDiv.replaceWith(replacementElement); // newDiv тепер не існує в DOM
        console.log("replaceWith: js-created-div замінено новим параграфом");


        // remove (видалимо елемент, який щойно замінив newDiv)
        // setTimeout для наочності, щоб побачити елемент перед видаленням
        setTimeout(() => {
            const elementToRemove = document.getElementById('replacement-for-div');
            if(elementToRemove) {
                elementToRemove.remove();
                console.log("remove: Елемент 'replacement-for-div' видалено.");
                alert("Елемент, що замінив динамічно створений div, було видалено.");
            }
        }, 5000); // Видалимо через 5 секунд
    }
}

// Запускаємо деякі функції при завантаженні для демонстрації, інші - через кнопки
window.onload = function() {
displayDeveloperInfo("Weis", "Богдан", "Студент-Програміст");
displayDeveloperInfo("Сухнов", "Богдан"); // Використає посаду за замовчуванням
};
