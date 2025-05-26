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
            break;
        }
        let parsedAge = Number(userAge);
        if (!isNaN(parsedAge) && parsedAge > 0 && parsedAge < 120 && Number.isInteger(parsedAge)) {
            isValidAge = true;
            userAge = parsedAge;
        } else {
            alert("Будь ласка, введіть коректний вік (ціле число від 1 до 119).");
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

    let favoriteFruit = ""; // Улюблений фрукт
    const fruits = ["яблуко", "банан", "апельсин"];
    while (true) {
        let userInput = prompt(`Який ваш улюблений фрукт з цього списку: ${fruits.join(', ')}? (або напишіть "немає")`);
        if (userInput === null) break;

        favoriteFruit = userInput.toLowerCase().trim();

        if (fruits.includes(favoriteFruit)) {
            alert(`Чудовий вибір, ${favoriteFruit} - це смачно!`);
            break;
        } else if (favoriteFruit === "немає") {
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
    alert(devInfoString);
}

// Функція порівняння двох рядків
function compareAndShowLongerString(str1, str2) {
    if (str1 === null || str2 === null) {
        alert("Порівняння скасовано або не введено один з рядків.");
        return;
    }
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
    const originalBodyBgColor = document.body.style.backgroundColor || getComputedStyle(document.body).backgroundColor;
    document.body.style.backgroundColor = "lightblue";
    console.log("Фон тіла сторінки змінено на lightblue");

    const banner = document.querySelector('.special-offer-banner');
    let originalBannerColor;
    if (banner) {
        originalBannerColor = banner.style.backgroundColor || getComputedStyle(banner).backgroundColor;
        banner.style.backgroundColor = "darkblue"; // Змінити колір банера також
        console.log("Фон банера змінено на darkblue");
    }

    setTimeout(function () {
        document.body.style.backgroundColor = originalBodyBgColor;
        if (banner && originalBannerColor) {
            banner.style.backgroundColor = originalBannerColor;
            console.log("Фон банера повернуто до оригінального.");
        }
        console.log("Фон тіла сторінки повернуто до оригінального.");
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
    const welcomeHeader = document.getElementById('welcome');
    if (welcomeHeader) {
        welcomeHeader.style.color = 'purple';
        console.log("getElementById: Змінено колір заголовка 'welcome'");

        if (!welcomeHeader.querySelector('.js-updated-span')) {
            welcomeHeader.innerHTML += " <span class='js-updated-span' style='font-size:0.7em; color:darkmagenta;'>(Оновлено JS!)</span>";
        }
        console.log("welcomeHeader.innerHTML:", welcomeHeader.innerHTML);
        console.log("welcomeHeader.outerHTML:", welcomeHeader.outerHTML);
        console.log("welcomeHeader.textContent:", welcomeHeader.textContent);

        if (welcomeHeader.firstChild && welcomeHeader.firstChild.nodeType === Node.TEXT_NODE) {
            console.log("welcomeHeader.firstChild.nodeValue (до зміни):", welcomeHeader.firstChild.nodeValue);
            if (welcomeHeader.firstChild.nodeValue.trim().startsWith("Explore Our Hotels") || welcomeHeader.firstChild.nodeValue.trim().startsWith("Ласкаво просимо до Нашого Пошуку Готелів!")) {
                welcomeHeader.firstChild.nodeValue = "Ласкаво просимо до Нашого Пошуку Готелів! ";
            } else {
                welcomeHeader.firstChild.nodeValue = "Текстовий вузол змінено: " + welcomeHeader.firstChild.nodeValue.trim();
            }
            console.log("welcomeHeader.firstChild.nodeValue (після зміни):", welcomeHeader.firstChild.nodeValue);
        }
    } else {
        console.error("Елемент з ID 'welcome' не знайдено!");
    }

    const paragraphsInMain = document.querySelectorAll('main > p');
    console.log(`querySelectorAll: Знайдено ${paragraphsInMain.length} параграфів у main.`);
    paragraphsInMain.forEach((p, index) => {
        // Уникаємо стилізації параграфів всередині спеціальних блоків
        if (p.closest('.js-demo-controls') || p.closest('.info-box-container') || p.closest('.content-wrapper') || p.closest('.iframe-container') || p.closest('[data-behavior="toggle"]') || p.closest('#mouse-event-demo-area') || p.classList.contains('js-prepended-text')) return;

        p.style.borderBottom = "1px dotted darkgreen";
        if (!p.querySelector('.js-styled-em')) {
            p.innerHTML += ` <em class='js-styled-em' style='font-size:0.8em; color:green;'>[P-${index + 1} стилізовано JS]</em>`;
        }
    });

    const mainElement = document.querySelector('main');
    if (mainElement) {
        let dynamicDiv = document.getElementById('js-created-div');
        if (dynamicDiv) dynamicDiv.remove(); // Видаляємо, якщо вже існує, для чистоти демо

        dynamicDiv = document.createElement('div');
        dynamicDiv.id = "js-created-div";
        dynamicDiv.style.padding = "10px";
        dynamicDiv.style.marginTop = "15px";
        dynamicDiv.style.border = "2px solid orange";
        dynamicDiv.style.backgroundColor = "#fff9e6";
        const newTextNode = document.createTextNode("Цей блок створено динамічно за допомогою JavaScript! ");
        dynamicDiv.appendChild(newTextNode);
        const newSpan = document.createElement('span');
        newSpan.textContent = "(І цей span теж!)";
        newSpan.style.fontWeight = "bold";
        newSpan.style.color = "#d9534f";
        dynamicDiv.append(newSpan);
        mainElement.append(dynamicDiv);
        console.log("createElement, createTextNode, append: Новий div додано в кінець main");

        let prependedText = mainElement.querySelector('.js-prepended-text');
        if (prependedText) prependedText.remove();
        prependedText = document.createElement('p');
        prependedText.className = "js-prepended-text";
        prependedText.textContent = "Цей текст додано на початок main за допомогою prepend.";
        prependedText.style.fontStyle = "italic";
        prependedText.style.color = "darkblue";
        prependedText.style.textAlign = "center";
        prependedText.style.backgroundColor = "#e7f3fe";
        prependedText.style.padding = "5px";
        mainElement.prepend(prependedText);
        console.log("prepend: Текст додано на початок main");

        const firstParagraphInMainNotSpecial = Array.from(mainElement.querySelectorAll('main > p')).find(p =>
            !p.closest('.js-demo-controls') && !p.closest('.info-box-container') &&
            !p.closest('.content-wrapper') && !p.closest('.iframe-container') &&
            !p.closest('[data-behavior="toggle"]') && !p.closest('#mouse-event-demo-area') &&
            !p.classList.contains('js-prepended-text')
        );

        if (firstParagraphInMainNotSpecial) {
            let afterTextElement = firstParagraphInMainNotSpecial.nextElementSibling;
            if (afterTextElement && afterTextElement.classList.contains('js-after-text')) {
                afterTextElement.remove();
            }
            afterTextElement = document.createElement('h4');
            afterTextElement.className = "js-after-text";
            afterTextElement.textContent = "Цей заголовок додано після першого 'звичайного' параграфа за допомогою 'after'.";
            afterTextElement.style.color = "teal";
            afterTextElement.style.textAlign = "center";
            firstParagraphInMainNotSpecial.after(afterTextElement);
            console.log("after: Заголовок додано після першого 'звичайного' параграфа в main");
        }

        const divToReplace = document.getElementById('js-created-div');
        if (divToReplace) {
            const replacementElement = document.createElement('p');
            replacementElement.id = "replacement-for-div";
            replacementElement.textContent = "Створений div ('js-created-div') був замінений цим параграфом ('replacement-for-div') за допомогою 'replaceWith'.";
            replacementElement.style.color = "maroon";
            replacementElement.style.fontWeight = "bold";
            replacementElement.style.padding = "10px";
            replacementElement.style.border = "2px dashed maroon";
            replacementElement.style.backgroundColor = "#fceded";
            divToReplace.replaceWith(replacementElement);
            console.log("replaceWith: js-created-div замінено новим параграфом 'replacement-for-div'");

            setTimeout(() => {
                const elementToRemove = document.getElementById('replacement-for-div');
                if (elementToRemove) {
                    elementToRemove.remove();
                    console.log("remove: Елемент 'replacement-for-div' видалено.");
                    alert("Елемент 'replacement-for-div' (що замінив динамічно створений div) було видалено (після 5 сек).");
                }
            }, 5000);
        }
    }
}

// Події миші ---
function logMouseEvent(event, handlerType) {
    console.log(`Подія миші: ${event.type} на ${event.currentTarget.tagName}#${event.currentTarget.id || 'N/A'}. Спрацювало на ${event.target.tagName}. Обробник: ${handlerType}`);
}

// Обробник для призначення через властивість
function handleClickProperty(event) {
    logMouseEvent(event, 'Властивість (onclick)');
    event.currentTarget.style.backgroundColor = 'lightgreen';
    event.currentTarget.textContent = 'На елемент P клацнули (обробник через властивість)! Фон зелений.';
    setTimeout(() => {
        if (event.currentTarget) { // Перевірка, чи елемент ще існує
            event.currentTarget.style.backgroundColor = '';
            event.currentTarget.textContent = 'Наведіть сюди, клацніть!';
        }
    }, 2000);
}

// Обробники для addEventListener
function handleClickEventListener1(event) {
    logMouseEvent(event, 'addEventListener (Обробник 1 для click)');
    alert('addEventListener: Перший обробник кліку на ДЕМО-зоні DIV!');
}

function handleMouseOverEventListener(event) {
    logMouseEvent(event, 'addEventListener (MouseOver на ДЕМО-зоні DIV)');
    event.currentTarget.style.borderStyle = 'dotted';
}

function handleMouseOutEventListenerFromDemoArea(event) { // Перейменовано, щоб уникнути конфлікту
    logMouseEvent(event, 'addEventListener (MouseOut на ДЕМО-зоні DIV)');
    event.currentTarget.style.borderStyle = 'solid';
}

// Об'єкт-обробник
const mouseEventObjectHandler = {
    isAttached: false,
    handleEvent: function (event) {
        logMouseEvent(event, `Об'єкт-обробник (handleEvent) - ${event.type}`);
        const pElement = event.currentTarget.querySelector('p#mouse-demo-paragraph');
        if (!pElement) return;

        switch (event.type) {
            case 'click':
                pElement.textContent = 'Об\'єкт-обробник обробив КЛІК на демо-зоні!';
                pElement.style.color = 'red';
                break;
            case 'mouseover':
                pElement.style.fontWeight = 'bold';
                pElement.style.fontStyle = 'italic';
                break;
            case 'mouseout':
                pElement.style.fontWeight = 'normal';
                pElement.style.fontStyle = 'normal';
                pElement.style.color = ''; // Скинути колір
                break;
        }
        console.log('event.currentTarget в об\'єкті-обробнику:', event.currentTarget);
    },
    resetText: function (demoArea) { // Допоміжна функція для скидання тексту
        const pElement = demoArea.querySelector('p#mouse-demo-paragraph');
        if (pElement) {
            pElement.textContent = 'Наведіть сюди, клацніть!';
            pElement.style.fontWeight = 'normal';
            pElement.style.fontStyle = 'normal';
            pElement.style.color = '';
        }
    }
};

function setupMouseEventDemo() {
    const demoArea = document.getElementById('mouse-event-demo-area');
    if (!demoArea) return;
    const pInDemoArea = demoArea.querySelector('p#mouse-demo-paragraph');
    if (pInDemoArea) {
        pInDemoArea.onclick = handleClickProperty;
    }
    
    demoArea.addEventListener('click', handleClickEventListener1);
    demoArea.addEventListener('mouseover', handleMouseOverEventListener);
    demoArea.addEventListener('mouseout', handleMouseOutEventListenerFromDemoArea);

    if (!mouseEventObjectHandler.isAttached) {
        demoArea.addEventListener('click', mouseEventObjectHandler);
        demoArea.addEventListener('mouseover', mouseEventObjectHandler);
        demoArea.addEventListener('mouseout', mouseEventObjectHandler);
        mouseEventObjectHandler.isAttached = true;
        console.log("Об'єкт-обробник (mouseEventObjectHandler) додано для click, mouseover, mouseout на demoArea.");
    }
    const removeBtn = document.getElementById('remove-object-handler-btn');
    if (removeBtn) {
        removeBtn.onclick = function () {
            if (mouseEventObjectHandler.isAttached) {
                demoArea.removeEventListener('click', mouseEventObjectHandler);
                demoArea.removeEventListener('mouseover', mouseEventObjectHandler);
                demoArea.removeEventListener('mouseout', mouseEventObjectHandler);
                mouseEventObjectHandler.isAttached = false;
                console.log("Об'єкт-обробник (mouseEventObjectHandler) видалено з demoArea.");
                alert('Об\'єкт-обробник видалено. Його ефекти кліку/наведення на параграф припиняться.');
                mouseEventObjectHandler.resetText(demoArea);
                this.textContent = "Об'єкт-обробник Видалено";
                this.disabled = true;
            } else {
                alert('Об\'єкт-обробник вже було видалено або не приєднано.');
            }
        };
    }
}
function highlightListItem(event) {
    const listElement = event.currentTarget;
    const clickedElement = event.target;
    const listItem = clickedElement.closest('li');

    if (listItem && listElement.contains(listItem)) {
        const currentlyHighlighted = listElement.querySelector('.highlighted-li');
        if (currentlyHighlighted && currentlyHighlighted !== listItem) {
            currentlyHighlighted.classList.remove('highlighted-li');
        }
        listItem.classList.toggle('highlighted-li');
        if (listItem.classList.contains('highlighted-li')) {
            console.log(`Підсвічено: ${listItem.textContent.trim()} у списку ${listElement.id || listElement.className}`);
        } else {
            console.log(`Знято підсвічування: ${listItem.textContent.trim()} у списку ${listElement.id || listElement.className}`);
        }
    }
}

function setupListHighlighting() {
    const listsToSupportHighlight = [
        document.querySelector('ul.top-rated-list'), // about.html
        document.querySelector('main ul[type="A"]'),    // hotels.html категорії
        ...document.querySelectorAll('footer .contact-info ol') // футери
    ];

    listsToSupportHighlight.forEach((list, index) => {
        if (list) {
            if (!list.id) list.id = `highlightable-list-${index}`;
            list.addEventListener('click', highlightListItem);
            console.log(`Підсвічування списків увімкнено для: #${list.id}`);
        }
    });
}
const menuActions = {
    greet: function () {
        alert('Привіт з меню data-action!');
    },
    showTime: function () {
        alert(`Поточний час: ${new Date().toLocaleTimeString('uk-UA')}`);
    },
    changeWelcomeHeader: function () {
        const welcomeHeader = document.getElementById('welcome');
        if (welcomeHeader) {
            welcomeHeader.textContent = 'Заголовок "Ласкаво просимо" змінено дією меню!';
            welcomeHeader.style.color = 'darkorange';
        } else {
            alert('Заголовок "welcome" (id="welcome") не знайдено на цій сторінці.');
        }
    },
    default: function (actionName) {
        alert(`Невідома дія меню: ${actionName}`);
    }
};

function handleDataActionMenu(event) {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const action = button.dataset.action;
    if (menuActions[action]) {
        menuActions[action]();
    } else {
        menuActions.default(action);
    }
    console.log(`Дію меню '${action}' викликано.`);
}

function setupDataActionMenu() {
    const menu = document.getElementById('data-action-menu');
    if (menu) {
        menu.addEventListener('click', handleDataActionMenu);
        console.log("Обробник меню data-action увімкнено.");
    }
}
function toggleElementBehavior(event) {
    const button = event.currentTarget;
    const targetId = button.dataset.targetId;
    if (!targetId) {
        console.warn('Кнопка з data-behavior="toggle" не має data-target-id.', button);
        return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const isHidden = targetElement.style.display === 'none' || targetElement.style.display === '';
        const baseText = button.dataset.baseText || button.textContent.replace(/Показати|Сховати|Перемкнути/i, '').trim();
        button.dataset.baseText = baseText; // Зберігаємо базовий текст, якщо ще не збережено

        if (isHidden) {
            targetElement.style.display = 'block';
            button.textContent = `Сховати ${baseText}`;
        } else {
            targetElement.style.display = 'none';
            button.textContent = `Показати ${baseText}`;
        }
        console.log(`Перемкнено видимість для елемента #${targetId}. Зараз: ${targetElement.style.display}`);
    } else {
        console.warn(`Цільовий елемент з id="${targetId}" не знайдено для поведінки toggle.`, button);
    }
}

function initializeBehaviors() {
    const toggleButtons = document.querySelectorAll('[data-behavior="toggle"]');
    toggleButtons.forEach(button => {
        if (button.dataset.targetId) {
            button.addEventListener('click', toggleElementBehavior);
            const targetElement = document.getElementById(button.dataset.targetId);
            if (targetElement) {
                const isHidden = targetElement.style.display === 'none' || targetElement.style.display === '';
                const baseText = button.dataset.baseText || button.textContent.replace(/Показати|Сховати|Перемкнути/i, '').trim();
                button.dataset.baseText = baseText;
                button.textContent = isHidden ? `Показати ${baseText}` : `Сховати ${baseText}`;
            }
        } else {
            console.warn('Кнопка з data-behavior="toggle" не має data-target-id.', button);
        }
    });
    if (toggleButtons.length > 0) {
        console.log(`${toggleButtons.length} поведінок Toggle ініціалізовано.`);
    }
}

// --- DOMContentLoaded для налаштування всього ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM повністю завантажено та розібрано. Ініціалізація JS-покращень...");

    if (document.getElementById('mouse-event-demo-area')) {
        setupMouseEventDemo();
    }
    if (document.getElementById('data-action-menu')) {
        setupDataActionMenu();
    }

    setupListHighlighting();
    initializeBehaviors();

    console.log("Усі JS-покращення та слухачі подій ініціалізовано.");
});