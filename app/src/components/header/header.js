const mobileNav = () => {
  const navButton = document.querySelector('.js-nav-button')
  const navNode = document.querySelector('.js-nav')

  if (!navButton || !navNode) {
    return
  }

  class MobileNav {
    constructor(el) {
      this.element = el

      this.addListeners()
    }

    addListeners() {
      document.addEventListener('click', (e) => {
        const isNavShown = navNode.classList.contains('header__nav_opened')
        const isNavButton  = e.target.classList.contains('header__nav-button')

        if (!isNavButton && isNavShown) {
          this.closeNav()
        }
      })

      navButton.addEventListener('click', () => {
        const isNavShown = navNode.classList.contains('header__nav_opened')

        if (isNavShown) {
          this.closeNav()
        } else {
          this.openNav()
        }
      })
    }

    openNav() {
      this.element.classList.add('header__nav_opened')
      navButton.classList.add('header__nav-button_active')
    }

    closeNav() {
      this.element.classList.remove('header__nav_opened')
      navButton.classList.remove('header__nav-button_active')
    }
  }

  new MobileNav(navNode)
}

export default mobileNav