<script>
  import logo from '../assets/img/code-logo-2.png';
  let hamburgerActive = '';
  let navMenu = 'hidden';
  let clicked = false;
  
  // muncul erro : window is not defined! gatau kenapa
  // window.onscroll = function() {
  //   const header = document.querySelector('header');
  //   const fixedNav = header.offsetTop;
    
  //   if (window.pageYOffset > fixedNav) {
  //     fixedHeader = 'navbar-fixed';
  //   } else {
  //     fixedHeader = '';
  //   }
  // }

  function toggleHamburger()  {
    clicked = !clicked;
    if (clicked) {
      hamburgerActive ='hamburger-active';
      navMenu = '';
    } else {
      hamburgerActive = '';
      navMenu = 'hidden';      
    }    
  }
  
  let fixedHeader = '';
  
  
  
  let menus = ['home', 'about', 'skills', 'portofolio', 'contact'];
</script>

<header class="bg-transparent top-0 absolute left-0 w-full flex items-center z-10 {fixedHeader}">
  <div class="container">
    <div class="flex items-center justify-between relative">
      <div class="px-4">
        <a href={'#'} class="font-bold text-lg text-primary block py-6">
          <img src="{logo}" alt="" width="40px">
        </a>                
      </div>
      <div class="flex items-center px-4">
        <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 {hamburgerActive} lg:hidden" on:click="{toggleHamburger}">
          <span class="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
          <span class="hamburger-line transition duration-300 ease-in-out"></span>
          <span class="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
        </button>
        
        <nav id="nav-menu" class="{navMenu} absolute py-5 bg-slate-50 shadow-lg rounded-lg max-w-[250px] w-full right-3 top-full lg:static lg:block lg:bg-transparent lg:rounded-none lg:shadow-none lg:max-w-full">
          <ul class="block lg:flex ">
            {#each menus as item}
            <li class="group">
              <a href="#{item}" class="text-base text-black mx-8 flex py-2 group-hover:text-primary uppercase"> {item} </a>
            </li>
            {/each}
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>