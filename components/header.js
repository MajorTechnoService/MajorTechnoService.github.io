class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    fetch('/components/Header.html')
      .then( r => r.text() )
      .then( t => this.innerHTML = t )
      .then( (r) => {
        $('.header').removeClass('loading');
        $(document).ready(function() { 
            $('.container').removeClass('loading');
            $('.loader-container').hide();
         }); 


      })
    }
  }
  
  customElements.define('header-component', Header);