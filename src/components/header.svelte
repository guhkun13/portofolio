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
  
  const menus = ['home', 'whoami', 'projects', 'work-experience', 'contact'];    
</script>

<header class="bg-transparent top-0 absolute left-0 w-full flex items-center z-10 {fixedHeader}">
  <div class="container">
    <div class="flex items-center justify-between relative">
      <div class="px-4">
        <a href="/" class="font-bold text-lg text-primary block py-6">
          <img src="{logo}" alt="" width="40px">
        </a>                
      </div>
      
      <div class="flex items-center px-4">
        <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 {hamburgerActive} lg:hidden" on:click="{toggleHamburger}">
          <span class="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
          <span class="hamburger-line transition duration-300 ease-in-out"></span>
          <span class="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
        </button>
        
        <nav id="nav-menu" class="{navMenu} absolute py-5  text-violet-500 shadow-md rounded-lg max-w-[250px] w-full right-3 top-full lg:static lg:block  lg:max-w-full lg:backdrop-blur-xl hover:shadow-xl lg:text-violet-400 transition duration-300 ease-in-out">
          <ul class="block lg:flex ">
            {#each menus as item}
            <li class="group">
              <a href="#{item}" class="link-underline text-base text-black lg:text-violet-400 lg:font-bold lg:text-sm mx-8 flex py-2 group-hover:text-violet-500 uppercase"> {item} </a>
            </li>
            {/each}            
          </ul>
        </nav>
      </div>
    </div>    
  </div>
</header>

