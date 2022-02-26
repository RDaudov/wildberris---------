const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')
  
    const getData = function (value, category) {
        fetch('https://test-19797-default-rtdb.europe-west1.firebasedatabase.app/db.json')
        .then((res) => res.json())
        .then((data) => {
            const array = category ? data.filter((item) => item[category] === value) : data

            localStorage.setItem('goods', JSON.stringify(array))
        })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const linkValue = link.textContent
            const category = link.dataset.field

            getData(linkValue, category)
        })
    })
}
getGoods()