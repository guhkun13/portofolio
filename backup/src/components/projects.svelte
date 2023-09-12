<script>  
  let clicked = false;
  let isHidden = "hidden";
  
  function toggleThis(event)  {    
    
    let idElm = event.target.id;
    let elmButton = document.getElementById(idElm).innerHTML;
    let idElmItem = idElm + "-item";
    
    if (elmButton == "-" && !clicked) {
      clicked = !clicked
    } else if (elmButton == "+" && clicked) {
      clicked = !clicked
    }
    
    clicked = !clicked;
    if (clicked) {
      document.getElementById(idElm).innerHTML = "-"
      document.getElementById(idElmItem).className = "";
    } else {
      document.getElementById(idElm).innerHTML = "+"
      document.getElementById(idElmItem).className = "hidden";
    }
  }
</script>

<section id="projects" class="pt-36 pb-36 bg-slate-100">
  <div class="container">
    <div class="w-full px-4">
      <div class="max-w-xl mx-auto text-center mb-16">
        <h4 class="font-semibold text-primary mb-2 uppercase text-lg underline  decoration-red-500 decoration-wavy">My Projects</h4>        
        <p class="text-secondary text-md font-mono">Sort by newest date</p>
      </div>
    </div>
    
    <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
      
      <!-- switching wsdl -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> WSDL REST API
          <span class="text-sm mb-2"> | 2022 / on-going </span> 
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj1"> + </button> 
        </p>
        <div id="pj1-item" class="{isHidden}">
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Solo | Backend Eng / API Developer </p>       
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Python </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Flask </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> WSDL </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> REST-API </span>
          </p>
          <p class="text-sm xl:text-base mt-5"> Create REST API to handle transaction request (inquiry, payment & reversal) for flagging tools that connect to MakaraMas WSDL Billing Service. </p>        
        </div>
      </div> 
      
      <!-- Andieni UI -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> Andieni UI  
          <span class="text-sm mb-2"> | 2020 - ongoing | Deployed </span>     
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj2"> + </button> 
        </p>   
        <div id="pj2-item" class="{isHidden}">
          
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Team | Fullstack Dev </p>       
          
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Python </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Django </span>          
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> DRF </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> PostgreSQL </span>
          </p>
          
          <p class="text-sm mt-5"> Andieni UI (Aplikasi Naskah Dinas Elektronik Universitas Indonesia) is web application for mail disposition and/or distribution. I am currently take part as one of the development team member. This project was forked from DISPOSUR BPOM and further modified to fulfill client's needs. It is also connected to UI internal app  </p>
        </div>      
      </div>      
      
      <!-- BNI QRIS & MAJAX -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> BNI QRIS & MAJA 
          <span class="text-sm mb-2"> | 2021 | deployed (dev) </span>        
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj3"> + </button> 
        </p>         
        <div id="pj3-item" class="{isHidden}">
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Solo | Backend Eng / API Developer </p>       
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> JavaScript </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> NestJS </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Microservices </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> RabbitMQ </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Maja </span>
          </p>
          
          <p class="text-sm mt-5"> I was responsible for connecting BNI QRIS Payment API as one of payment method in Maja. I was also add features for BNI QRIS merchant registration in separated web app (for internal use) </p>
        </div> 
      </div>
      <!-- DOKU WALLET & MAJAX -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> DOKU Wallet & MAJA  
          <span class="text-sm mb-2">| 2021 | Deployed </span>        
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj4"> + </button> 
        </p>
        <div id="pj4-item" class="{isHidden}">          
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Solo | Backend Eng / API Developer </p>                 
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> JavaScript </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> NestJS </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Microservices </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> RabbitMQ </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Maja </span>
          </p>
          
          <p class="text-sm mt-5"> I was responsible for connecting DOKU Wallet API and Maja to add more payment method choices in Maja. There are 3 banks that successfully connected via DOKU Wallet API; Bank BRI, Bank Permata and Bank Mandiri. It was quick and easy integration because DOKU has nice API documentation 💟 </p>
        </div> 
      </div> 
      
      <!-- BCA & MAJAX -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> BCA VA & MAJA 
          <span class="text-sm mb-2"> | 2020 - 2021 | Deployed </span> 
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj5"> + </button> 
        </p>    
        <div id="pj5-item" class="{isHidden}">
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Solo | Backend Eng / API Developer </p>       
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> JavaScript </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> NestJS </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Microservices </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> RabbitMQ </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Maja </span>
          </p>        
          <p class="text-sm mt-5"> I was responsible for connecting and add BCA Virtual Account as one of payment method in Maja  </p>
        </div> 
      </div> 
      
      <!-- TNDE UNHAN -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> TNDE UNHAN 
          <span class="text-sm mb-2">| 2020 - 2021 | Deployed </span>  
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj5"> + </button> 
        </p>       
        <div id="pj5-item" class="{isHidden}">
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Team | Fullstack Developer </p>               
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Python </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Django </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> DRF </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> PostgreSQL </span>
          </p>
          
          <p class="text-sm mt-5"> TNDE UNHAN (Tata Naskah Dinas Elektronik Universitas Pertahanan) is web application for mail disposition and/or distribution. My team are consist of 5 persons including myself as one of 2 programmers. This project was forked from DISPOSUR BPOM and further modified to fulfill client's needs. </p>
        </div> 
      </div> 
      
      <!-- TOOLS Makara Mas -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> TOOLS Makara Mas 
          <span class="text-sm mb-2"> | 2020 | Deployed </span> 
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj6"> + </button> 
        </p>         
        <div id="pj6-item" class="{isHidden}">
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Solo | Fullstack Developer </p>        
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Python </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Django </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Ajax Datatables </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> PostgreSQL </span>
          </p>
          
          <p class="text-sm mt-5"> This project was forked from Bianglala BANPT. It was to show log of transaction (inquiry, payment and response) and managing (CRUD) biller/merchant. Its to be used by operator/admin of PT Makara Mas operational teams. </p>
        </div> 
      </div> 
      
      <!-- BIANGLALA BANPT -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> BIANGLALA BANPT 
          <span class="text-sm mb-2"> | 2020 | Deployed </span> 
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj7"> + </button> 
        </p>        
        <div id="pj7-item" class="{isHidden}">          
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Team | Fullstack Developer </p>        
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Python </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Django </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Ajax Datatables </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> MySQL </span>
          </p>
          
          <p class="text-sm mt-5">  Bianglala BANPT is CRUD web app, built for managing existing database. This project was done by 2 persons, me and my mentor/lecturer from college, Mr Maman Sutarman. It was developed by combining lovable datatables.js and custom ajax request, to enable server side rendering (SSR) feature of datatables. </p>
        </div> 
      </div> 
      
      <!-- DISPOSUR BPOM -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> DISPOSUR BPOM  
          <span class="text-sm mb-2"> 2019 - 2020 | Deployed </span>        
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj8"> + </button> 
        </p>
        <div id="pj8-item" class="{isHidden}">          
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Team | Fullstack Developer </p>  
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Python </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Django </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> DRF </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> PostgreSQL </span>
          </p>
          
          <p class="text-sm mt-5"> DISPOSUR BPOM (Disposisi Surat Badan Pengawas Obat dan Makakan) is web application for mail disposition and/or distribution. My team are consist of 5 persons including myself as one of 2 programmers </p>
        </div>
      </div>
      
      <!-- SIRUSUN -->
      <div class="w-full mb-8 p-4 bg-slate-200 rounded-sm border-blue-500 border-b-2">        
        <p class="text-xl font-semibold font-mono mt-2"> SIRUSUN 
          <span class="text-sm mb-2"> | 2016 | not deployed </span>                
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="pj9"> + </button> 
        </p>
        <div id="pj9-item" class="{isHidden}">          
          <p class="text-sm mb-2 underline-offset-2 underline decoration-blue-800 decoration-dashed"> Team | Fullstack Developer </p>          
          <p class="text-xs font-semib old space-x-1 space-y-1"> 
            Tags: 
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> PHP </span>
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> Laravel </span>          
            <span class="bg-purple-200 text-purple-700 rounded px-2 py-1"> MySQL </span>
          </p>
          
          <p class="text-sm mt-5"> SIRUSUN or Sistem Informasi Rumah Susun was <span class="italic"> pro bono </span> project iniated by DKI Govt Staff when Mr Basuki Tjahaja Purnama or Pak Ahok was governor that time. The goal is to create information system to manage rusun (apartment) and people that lived on it. This is my first experience handling real client (before graduated) and the very first time my Web Developer carrerr starts. I love php artisan, laravel blade and laravel itself. I had so much joy when develop this app. Although the project was not deployed, but this is very good experience for me. </p>
        </div>
      </div>
      
    </div>
  </div>
</section>
