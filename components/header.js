class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    fetch('/components/Header.html')
      .then( r => r.text() )
      .then( t => this.innerHTML = t )
      $('html').addClass('hidden');
      $(document).ready(function() {    // EDIT: From Adam Zerner's comment below: Rather use load: $(window).on('load', function () {...});
        $('html').show();  // EDIT: Can also use $('html').removeClass('hidden'); 
       }); 
    }
  }
  
  customElements.define('header-component', Header);