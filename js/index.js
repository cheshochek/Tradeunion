// DOM-элементы для header
const headerContentElement = document.querySelector('.header__content')
const allElement = Array.from(document.querySelector('.wrapper').children)
const headerDropDownItemElement = document.querySelector('.header__list')
const allItemsUlElement = Array.from(headerDropDownItemElement.children)

// Изменяем вид меню-бургера
function handleShowItemsBurgerMenu(event) {

    const target = event.target
    if (target.classList.contains('header__burger')) {

        allElement.forEach(element => {
            if (!element.classList.contains('header') && !element.classList.contains('title-secondary')) {
                element.classList.toggle('lock')
            }
        })

        target.classList.toggle('active')
        if (window.innerWidth <= 430) {
            document.querySelector('.title-secondary').classList.toggle('lock')
        } else {
            if (target.classList.contains('active')) {
                document.querySelector('.title-secondary').classList.add('active')
                document.querySelector('.header__logo').classList.add('active')
            } else {
                document.querySelector('.title-secondary').classList.remove('active')
                document.querySelector('.header__logo').classList.remove('active')
            }
        }
        headerContentElement.querySelector('.header__list').classList.toggle('active')
        allItemsUlElement.forEach(elem => {
            elem.style.marginTop = 0
        })
    }
}
// Показываем выпадающий меню для элемента меню
function handleShowDropDownMenu(event) {
    const target = event.target
    if (target.tagName == 'LI') {
        allItemsUlElement.forEach(elem => {
            elem.style.marginTop = 0
        })

        if (!target.parentElement.classList.contains('drop-down-menu')) {
            target.querySelector('a').classList.toggle('active')
            target.querySelector('.drop-down-menu').classList.toggle('active')
            if (!target.querySelector('.drop-down-menu').classList.contains('active')) {
                var styleElem = document.head.appendChild(document.createElement("style"));

                styleElem.innerHTML = `.header__list .drop-down:hover:after { border-top: 1px solid #0E3480; border-left: 1px solid #0E3480; transform: rotate(-135deg);}`
            } else {
                var styleElem = document.head.appendChild(document.createElement("style"));

                styleElem.innerHTML = `.header__list .drop-down:hover:after { border-top: 1px solid #FA9217; border-left: 1px solid #FA9217; transform: rotate(45deg);}`
            }
            const margin = target.querySelector('.drop-down-menu').offsetHeight
            target.nextElementSibling.style.marginTop = margin + 'px'
        }
    }
}

// Обработчики событий для меню
headerContentElement.addEventListener('click', handleShowItemsBurgerMenu)
headerDropDownItemElement.addEventListener('click', handleShowDropDownMenu)

$('.slider-main').slick({
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
})

$('.slider-banners').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
})

const formElement = document.querySelector('.form')
const checkboxElement = document.querySelector('.form-checkbox')

function submitForm(event) {
    const isValid = formElement.checkValidity()

    if (!isValid) {
        event.preventDefault()
        formElement.classList.add('need-validation')
    }
}

function handleCheckPolitics() {
    const submit = document.querySelector('.btn-submit')
    console.log(submit)
    if (checkboxElement.checked)
        submit.disabled = '';
    else
        submit.disabled = 'disabled';
}

function handleChangeStyleInput(event) {
    const target = event.target
    if (target.classList.contains('form-control')) {
        console.log(target.value)
        if (target.value == '' && target.parentElement.classList.contains('active')) {
            target.parentElement.classList.remove('active')
        } else {
            target.parentElement.classList.add('active')
        }
    }
}


// Обработчики событий для формы
formElement.addEventListener('submit', submitForm)
checkboxElement.addEventListener('change', handleCheckPolitics)
formElement.addEventListener('input', handleChangeStyleInput)

// Кнопка показать больше для списка членов профсоюза
const buttonShowMoreElement = document.querySelector('.button_show-more_list')
console.log(buttonShowMoreElement)
let elementsList = document.querySelectorAll('.structure-of-tradeunion__item')
// Функция для показа 10 элементов списка членов провсоюза при нажатии на кнопку Показать больше
function showMoreStructureOfTradeunion () {
    let lastIndexOfShownElement = -1
    let count = 0
    for (let i = 10; i < elementsList.length; i++) {
        if (elementsList[i].classList.contains('show')) {
            lastIndexOfShownElement = i
        } else {
            if (count != 10) {
                elementsList[i].classList.add('show')
                count++
            } else {
                break
            }
        }
        if (i == elementsList.length - 1) {
            buttonShowMoreElement.style.display = 'none'
        }
    }
}
if (buttonShowMoreElement !== null) {
    // Обработчик события при нажатии на кнопку Показать больше для членов профсоюза
    buttonShowMoreElement.addEventListener("click", showMoreStructureOfTradeunion)
}


// Кнопка показать больше для галереи
const buttonShowMoreImageElement = document.querySelector('.button_show-more_gallery')
console.log(buttonShowMoreImageElement)
let elementsImages = document.querySelectorAll('.gallery__item')
// Функция для показа 6 карточек при нажатии на кнопку Показать больше
function showMoreImagesInGallery () {
    let lastIndexOfShownElement = -1
    let count = 0
    for (let i = 6; i < elementsImages.length; i++) {
        if (elementsImages[i].classList.contains('show')) {
            lastIndexOfShownElement = i
        } else {
            if (count != 6) {
                elementsImages[i].classList.add('show')
                count++
            } else {
                break
            }
        }
        if (i == elementsImages.length - 1) {
            buttonShowMoreImageElement.style.display = 'none'
        }
    }
}

// Обработчик события при нажатии на кнопку Показать больше для членов профсоюза
buttonShowMoreImageElement.addEventListener("click", showMoreImagesInGallery)
