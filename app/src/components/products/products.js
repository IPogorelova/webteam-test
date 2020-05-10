const productsInteraction = () => {
  const productIconNodes = document.querySelectorAll('.js-product-icon')
  const productInfoNodes = document.querySelectorAll('.js-product-info')
  let windowWidth = window.innerWidth

  if (!productIconNodes || !productInfoNodes) {
    return
  }

  class ProductsInteraction {
    constructor(el) {
      this.element = el

      this.addListeners()
    }

    addListeners() {
      window.addEventListener('resize', () => {
        windowWidth = window.innerWidth
      })

      productIconNodes.forEach(icon => icon.addEventListener('mouseenter', (e) => {
        let target = e.target
        this.setActiveIcon(icon, target)
      }))

      productIconNodes.forEach(icon => icon.addEventListener('mouseout', (e) => {
        let target = e.target
        this.setInactiveIcon(icon, target)
      }))
    }

    setActiveIcon(icon, target) {
      if (icon.dataset.name === target.dataset.name) {
        let childNodes = [...icon.parentNode.children]
        childNodes.map(item => item.classList.add('products__icon_disabled'))
        icon.classList.remove('products__icon_disabled')
      }
      let activeInfo = [...productInfoNodes].filter(item => item.dataset.name === target.dataset.name)

      activeInfo.classList.add('products-item_active')
    }

    setInactiveIcon(icon, target) {
      if (icon.dataset.name !== target.dataset.name) {
        let childNodes = [...icon.parentNode.children]
        childNodes.map(item => item.classList.remove('products__icon_disabled'))
      }
      [...productInfoNodes].map(item => {if (item.dataset.name === target.dataset.name) item.classList.remove('products-item_active')})
    }

    setActiveInfo() {

    }

    setInactiveInfo() {

    }
  }

  window.productsList = []
  productIconNodes.forEach((node) => {
    window.productsList.push(new ProductsInteraction(node))
  })
  // productIconNodes.forEach((node) => {
  //   new ProductsInteraction(node)
  // })

}

export default productsInteraction