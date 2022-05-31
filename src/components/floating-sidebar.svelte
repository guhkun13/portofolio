<script>
  const menus = ['home', 'whoami', 'projects', 'work-experience', 'contact'];    
  
  let show = true;
  function handleMouseOver(e) {
    console.log('SHOW TEXT!');
    console.log(e.data);
    show = !show;
  }
</script>

<section id="floating-sidebar">  
  <div class="max-h-full max-w-full">  
    <div class="fixed right-3 z-10 bottom-10">
      <a href="#beranda" class="text-violet-500 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce fill-current transition duration-300" role="img" width="50" height="50" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm17-1h-4v8h-2v-8h-4l5-6 5 6z"/></svg>
      </a>
    </div>
    
    <div class="fixed -right-5 z-20 bottom-40 h-1/2">
      <div class="bg-gradient-to-t from-yellow-300 to-emerald-300 rounded-full py-10 px-4 opacity-30 hover:opacity-90 hover:-translate-x-5 transition duration-500 ease-in-out">
        <div class="flex flex-1">
          <ul>
            {#each menus as item}          
            <li> 
              <a href="#{item}" name={item} on:mouseover={handleMouseOver} on:focus={handleMouseOver} data={item}> 
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="32.25px" viewBox="0 0 32.25 32.25" style="enable-background:new 0 0 32.25 32.25;" xml:space="preserve">
                  <path d="M16.125,0C7.233,0,0,7.232,0,16.125C0,25.018,7.233,32.25,16.125,32.25c8.893,0,16.125-7.232,16.125-16.125
                  C32.25,7.232,25.016,0,16.125,0z M16.125,28.25C9.439,28.25,4,22.811,4,16.125C4,9.439,9.439,4,16.125,4
                  C22.811,4,28.25,9.439,28.25,16.125C28.25,22.811,22.811,28.25,16.125,28.25z M21.25,16.125c0,2.83-2.295,5.125-5.125,5.125
                  S11,18.955,11,16.125S13.295,11,16.125,11S21.25,13.295,21.25,16.125z"> </path> 
                </svg>
              </a>            
            </li>          
            {/each}          
          </ul>
        </div>
      </div>
    </div>  
  </div>
</section>
