<script>
  // import profile from '../assets/img/guhkun-2.png';
  import profile from '../assets/img/sepeda-bareng-talia.jpg';
  import bgvideo from '../assets/vid/bg-lines.mp4';
  import timelapse from '../assets/vid/time_lapse.mp4';
  
</script>

<section id="home" class="pt-36">
  <div class="container">
    <div class="flex flex-wrap">
      <div class="w-full self-center px-4 lg:w-1/2">        
        <div class="hover:animate-none  bg-transparent rounded-lg pt-4 pb-2 pl-4 backdrop-blur-md mb-4" >
          <p class="text-primary lg:text-2xl animate-bounce transition duration-500  ease-in-out mb-3 "> Hi 👋 </p>
          <p>
            <span class="font-xs"> My name is </span> 
            <span class="pt-3 text-2xl lg:text-4xl font-mono font-semibold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text uppercase">
              Teguh Atma 
            </span>      
          </p>
          <div class="py-3 px-10 font-mono text-md lg:text-xl  uppercase font-bold text-white bg-gradient-to-r from-blue-500 to-green-300 mt-3 -skew-x-6"> 
            Software Engineer 
          </div>
          <div class="my-5 border-2 border-dashed p-5 border-slate-400 bg-green-100">
            <p class="leading-relaxed font-thin lg:text-xl text-sm"> 
              If life is just living, the pigs in the forest also live
              <br/>
              jika hidup sekedar hidup, babi di hutan juga hidup
              <br>
              <span class="text-red-500">- Buya Hamka (1908 - 1981) </span>  
            </p>
          </div>
        </div>
        
        <div class="hover:-translate-y-3 transition duration-300 ease-in-out m-3">
          <a href={'#contact'} class="text-base font-semibold text-white bg-teal-500 py-3 px-5 rounded-full hover:bg-white hover:text-primary hover:border-2 shadow-lg hover:animate-none animate-pulse"> Contact Me </a>
        </div>
      </div>
      
      <div class="w-full self-end px-4 lg:w-1/2">
        <div class="mt-5 relative lg:mt-9 lg:right-0">
          <img src="{profile}" alt="" class="w-1/2 mx-auto">
          <span class="absolute top-5 -z-10 -translate-x-1/2 left-1/2">            
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="350" height="400">
              <path fill="#14b8a6" d="M35.7,-65.9C45.9,-56,53.4,-45.6,63.5,-34.5C73.6,-23.5,86.2,-11.7,89.7,2C93.2,15.8,87.6,31.6,75.9,39.8C64.1,47.9,46.2,48.5,32.6,50.4C18.9,52.3,9.5,55.5,-3.6,61.7C-16.6,67.9,-33.2,77.1,-44.5,73.8C-55.7,70.5,-61.5,54.7,-65.2,40.3C-69,25.9,-70.6,13,-72.7,-1.2C-74.8,-15.4,-77.4,-30.8,-71.1,-40.7C-64.8,-50.6,-49.5,-55,-36.2,-63.1C-22.9,-71.1,-11.4,-82.9,0.7,-84C12.8,-85.2,25.5,-75.8,35.7,-65.9Z" transform="translate(100 100)" />
            </svg>
          </span>
          <span class="absolute top-5 -z-20 -translate-x-1/2 left-1/2 ">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="350" height="400">
              <path fill="#9EF0F0" d="M66.8,-22C76,6.6,65.6,41.3,41.9,58.8C18.1,76.3,-19,76.7,-42.9,59.3C-66.9,41.8,-77.7,6.5,-68.4,-22.2C-59.1,-51,-29.5,-73.1,-0.4,-73C28.8,-72.9,57.6,-50.5,66.8,-22Z" transform="translate(100 100)" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>