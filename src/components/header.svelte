<script>
  import logo from '../assets/img/code-logo-2.png';
  
  let hamburgerActive = '';
  let navMenu = 'hidden';
  let clicked = false;
  
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
  
  let menus = ['beranda', 'tentangsaya', 'portofolio', 'clients', 'blog', 'contact'];
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
        
        <nav id="nav-menu" class="{navMenu} absolute py-5 bg-slate-50 shadow-lg rounded-lg max-w-[250px] w-full right-3 top-full lg:static lg:block lg:bg-transparent lg:rounded-none lg:shadow-none lg:max-w-full lg:backdrop-blur-xl hover:shadow-lg">
          <ul class="block lg:flex ">
            {#each menus as item}
            <li class="group">
              <a href="#{item}" class="text-base text-black lg:text-slate-300 lg:font-bold lg:text-sm mx-8 flex py-2 group-hover:text-sky-300 uppercase"> {item} </a>
            </li>
            {/each}            
          </ul>
        </nav>
      </div>
    </div>    
  </div>

  <div class="fixed right-3 z-10 bottom-10">
    <a href="#beranda" class="hover:text-indigo-600 ">
      <svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce fill-current transition duration-300" role="img" width="50" height="50" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm17-1h-4v8h-2v-8h-4l5-6 5 6z"/></svg>
    </a>
  </div>
</header>

