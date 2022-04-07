<script>
  import profile from '../assets/img/guhkun-2.png';
  import bgvideo from '../assets/vid/bg-lines.mp4';

</script>

<section id="home" class="pt-36">
  <div class="container">
    <div class="flex flex-wrap">
      <div class="w-full self-center px-4 lg:w-1/2">
        <video src="{bgvideo}" autoplay loop width="w-full" class="bg-cover"></video>
        <p class="text-primary lg:text-2xl"> Hi all 👋 I am 👨 </p>
        <p class="pt-3 text-4xl lg:text-5xl font-mono font-semibold text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text uppercase"> 
          Teguh Atma 
        </p>      
        <p class="font-mono font-thin text-transparent bg-gradient-to-r from-red-500 to-slate-100 bg-clip-text"> Web Developer & Freelancer </p>
        <p class="font-medium leading-relaxed pt-3 text-secondary mb-10"> Learn CSS is fun, not? <span class="text-red-500"> not </span>  
        </p>
        
        <a href={'#'} class="text-base font-semibold text-white bg-teal-500 py-3 px-5 rounded-full hover:bg-white hover:text-primary hover:border-2 shadow-lg transition duration-300 ease-in-out animate-bounce "> Contact Me </a>
      </div>
      <div class="w-full self-end px-4 lg:w-1/2">
        <div class="mt-5 relative lg:mt-9 lg:right-0">
          <img src="{profile}" alt="" class="max-w-full mx-auto">
          <span class="absolute top-5 -z-10 left-1/2 -translate-x-1/2 md:scale-125 lg:scale-150">
            
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="400" height="400">
              <path fill="#14b8a6" d="M35.7,-65.9C45.9,-56,53.4,-45.6,63.5,-34.5C73.6,-23.5,86.2,-11.7,89.7,2C93.2,15.8,87.6,31.6,75.9,39.8C64.1,47.9,46.2,48.5,32.6,50.4C18.9,52.3,9.5,55.5,-3.6,61.7C-16.6,67.9,-33.2,77.1,-44.5,73.8C-55.7,70.5,-61.5,54.7,-65.2,40.3C-69,25.9,-70.6,13,-72.7,-1.2C-74.8,-15.4,-77.4,-30.8,-71.1,-40.7C-64.8,-50.6,-49.5,-55,-36.2,-63.1C-22.9,-71.1,-11.4,-82.9,0.7,-84C12.8,-85.2,25.5,-75.8,35.7,-65.9Z" transform="translate(100 100)" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>