class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      fetch('/components/Footer.html')
        .then( r => r.text() )
        .then( t => this.innerHTML = t )
      
    }
  }
  
  customElements.define('footer-component', Footer);