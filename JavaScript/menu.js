// Super Delicious Menu 
// API
async function tampilkanKotak(){
    const res = await fetch("https://arya-teal.vercel.app/api/food-arrya-segara ");
    const datas = await res.json();
    console.log(datas)
    datas.forEach((data ,index) => {

        let gridList = document.querySelector('.grid-list');
        // create Element
        let liMenu = document.createElement('li');
        let menuCard = document.createElement('div')
        let cardBanner = document.createElement('figure')
        let imgMenu = document.createElement('img')
        let desc = document.createElement('div')
        let titleWrapper = document.createElement('div')
        let title3 = document.createElement('h3')
        let cardTitle = document.createElement('a')
        let spanTitle2 = document.createElement('span')
        let cardText = document.createElement('p')

        // add class
        // div
        menuCard.classList.add('menu-card-wrapper');
        menuCard.classList.add('hover-card-wrapper')
        
        // figure
        cardBanner.classList.add('card-banner')
        cardBanner.classList.add('img-holder')

        // img
        imgMenu.classList.add('img-cover')

        // div ke 2
        titleWrapper.classList.add('title-wrapper')

        // h3
        title3.classList.add('title-3')

        // a
        cardTitle.classList.add('card-title');

        // span
        spanTitle2.classList.add('span')
        spanTitle2.classList.add('title-2')

        // p
        cardText.classList.add('card-text')
        cardText.classList.add('label-1')

        // fetch data from api
        imgMenu.src = data.image
        cardTitle.textContent = data.title
        spanTitle2.textContent = data.price
        cardText.textContent = data.description

        // Display the data to the class
        title3.appendChild(cardTitle)
        titleWrapper.appendChild(title3)
        titleWrapper.appendChild(spanTitle2)
        desc.appendChild(titleWrapper)
        desc.appendChild(cardText)
        cardBanner.appendChild(imgMenu)
        menuCard.appendChild(cardBanner)
        menuCard.appendChild(desc)
        liMenu.appendChild(menuCard)
        gridList.appendChild(liMenu)
        });
}

tampilkanKotak();