class Header extends HTMLElement {

  connectedCallback() {
    fetch('/components/Header.html')
      .then( r => r.text() )
      .then( t => this.innerHTML = t )
    }
  }
  
  customElements.define('header-component', Header);