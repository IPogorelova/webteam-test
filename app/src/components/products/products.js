const productsInteraction = () => {
  const productIconNodes = document.querySelectorAll('.js-product-icon')
  const productInfoNodes = document.querySelectorAll('.js-product-info')

  if (!productIconNodes || !productInfoNodes) {
    return
  }

  class ProductsInteraction {
    constructor(el) {
      this.element = el
      this.iconsWrapperNodes = document.querySelectorAll('.products__icons')
      this.infoWrapperNodes = document.querySelectorAll('.products__info')

      this.addListeners()
    }

    addListeners() {
      for (let i = 0, len = productIconNodes.length; i < len; i++) {
        productIconNodes[i].addEventListener('mouseenter', (e) => {
          let target = e.target
          this.setActiveIcon(productIconNodes[i], target)
        })
        productIconNodes[i].addEventListener('mouseleave', (e) => {
          let target = e.target
          this.setInactiveIcon(productIconNodes[i], target)
        })
      }

      for (let i = 0, len = productInfoNodes.length; i < len; i++) {
        productInfoNodes[i].addEventListener('mouseenter', (e) => {
          let target = e.target
          this.setActiveInfo(productInfoNodes[i], target)
        })
        productInfoNodes[i].addEventListener('mouseleave', (e) => {
          let target = e.target
          this.setInactiveInfo(productInfoNodes[i], target)
        })
      }

      for (let i = 0, len = this.iconsWrapperNodes.length; i < len; i++) {
        this.iconsWrapperNodes[i].addEventListener('mouseleave', (e) => {
          this.resetActiveInfos(e.target)
        })
      }

      for (let i = 0, len = this.infoWrapperNodes.length; i < len; i++) {
        this.infoWrapperNodes[i].addEventListener('mouseleave', (e) => {
          this.resetActiveInfos(e.target)
        })
      }
    }

    setActiveIcon(icon, target) {
      if (icon.dataset.name === target.dataset.name) {
        let childNodes = [...icon.parentNode.children]
        childNodes.map(item => item.classList.add('products__icon_disabled'))
        icon.classList.remove('products__icon_disabled')
      }
      [...productInfoNodes].map(item => {
        item.classList.remove('products-item_active')
        if (item.dataset.name === target.dataset.name) item.classList.add('products-item_active')
      })
    }

    setInactiveIcon(icon, target) {
      if (icon.dataset.name !== target.dataset.name) {
        let childNodes = [...icon.parentNode.children]
        childNodes.map(item => item.classList.remove('products__icon_disabled'))
      }
      [...productInfoNodes].map(item => {
        item.classList.remove('products-item_active')
      })
    }

    setActiveInfo(item, target) {
      if (item.dataset.name === target.dataset.name) {
        let childNodes = [...item.parentNode.children]
        childNodes.map(item => item.classList.remove('products-item_active'))
        target.classList.add('products-item_active');
      }
      [...productIconNodes].map(icon => {
        if (icon.dataset.name === target.dataset.name) {
          let childNodes = [...icon.parentNode.children]
          childNodes.map(icon => icon.classList.add('products__icon_disabled'))
          icon.classList.remove('products__icon_disabled')
        }
      })
    }

    setInactiveInfo(item, target) {
      target.classList.remove('products-item_active');
      [...productIconNodes].map(icon => {
        let childNodes = [...icon.parentNode.children]
        childNodes.map(icon => icon.classList.remove('products__icon_disabled'))
      })
    }

    resetActiveInfos(target) {
      let children = document.querySelector(`[data-products=${target.dataset.products}]`).children;
      [...children].map(item => {
        if (item.classList.contains('products__icon')) {
          item.classList.remove('products__icon_disabled')
        } else if (item.classList.contains('products-item')) {
          item.classList.remove('products-item_active')
        }
      })
    }
  }

  window.productsList = []
  for (let i = 0, len = productIconNodes.length; i < len; i++) {
    window.productsList.push(new ProductsInteraction(productIconNodes[i]))
  }
}

export default productsInteraction