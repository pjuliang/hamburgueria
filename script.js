const showAllButton = document.querySelector('.show-all')
const discountAllButton = document.querySelector('.discount-all')
const sumAllButton = document.querySelector('.sum-all')
const veganButton = document.querySelector('.vegan-only')

const ul = document.querySelector('ul')

const formatNumber = (value) => {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

const showAll = (array) => {

    let myLi = ''

    array.forEach(item => {
        myLi += `
            <li>
                <img src=${item.src} class='imgs'>
                <h3>${item.name}</h3>
                <p>${formatNumber(item.price)}</p>
            </li>
        `
    })

    ul.innerHTML = myLi
}


const discountAll = () => {
    const newPrices = menuOptions.map((item) => ({
        ...item,
        price: item.price * 0.9
    }))

    showAll(newPrices)
}


const sumAll = () => {
    const allPrices = menuOptions.reduce((acc, currentValue) => {
        return acc + currentValue.price
    }, 0)

    ul.innerHTML = `
                    <li class='li' height: 102px>
                    <p>A soma total dos itens é ${formatNumber(allPrices)}</p>
                    </li>
    `
}

const veganOnly = () => {
    const veganBurguers = menuOptions.filter(item => item.vegan)

    showAll(veganBurguers)
}

showAllButton.addEventListener('click', () => showAll(menuOptions))
discountAllButton.addEventListener('click', discountAll)
sumAllButton.addEventListener('click', sumAll)
veganButton.addEventListener('click', veganOnly)