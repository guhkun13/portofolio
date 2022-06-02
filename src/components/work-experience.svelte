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

<section id="work-experience" class="pt-36 pb-36 bg-slate-700">
  <div class="container">
    <div class="w-full px-4">
      <div class="max-w-xl mx-auto text-center mb-16 ">
        <h4 class="font-semibold text-primary mb-2 uppercase text-lg underline  decoration-sky-500 decoration-wavy">Work Experience</h4>        
        <p class="text-white text-md font-mono mt-3"> I am looking for good working environment to improve myself, contribute, innovate and together build amazing and impactful things </p>
      </div>
    </div>
    
    <div class="w-full xl:w-10/12 px-4 flex flex-wrap justify-center items-center mx-auto">
      
      <!-- ITF  -->
      <div class="w-full mb-12 p-4 bg-slate-200">        
        <p class="text-xl font-semibold font-mono mt-2 mb-2"> Programmer
          <span class="text-purple-500"> | </span> 
          <span class="text-sm font-semibold mb-2">  ITF (Faculty of CS UI) </span>
          <span class="text-purple-500"> | </span> 
          <span class="text-sm font-semibold mb-2">  August 2016 - February 2018 </span> 
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="we1"> - </button>
        </p>           
        <div id="we1-item" class="">
          <p class="font-secondary font-thin "> Responsible for developing web application to further support the IT needs within Faculty              
          </p>
          <div class="text-xs mt-2"> Tech: 
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Python </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Django </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> REST API </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Networking </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Raspberryi Pi </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Smartcard </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Card Reader </span>          
          </div>
          
          <p class="font-base mt-5"> Some of my works: </p>
          
          <div class="bg-blue-200 p-5 m-5 rounded-md border-dashed border-2 border-indigo-500">
            <div class="w-full">
              <span class="uppercase font-bold font-2xl"> 1. siparkir </span>
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we1-1"> + </button>              
            </div>
            <div id="we1-1-item" class="{isHidden}">
              <p> Sistem Informasi Parkir (Parking Information System). </p>
              <hr class=" border-black mb-4">
              <p class="font-thin"> <b> As fullstack web developer</b>, using Django and DRF I was responsible to create web app to record, monitor and manage users on parking system. It is also to generate statistic and timely report </p>
              <p class="font-thin mt-2"> <b> As IoT Developer, </b> I was responsible to research and test the parking hardware such as barrier gate, loop induction and connect it to custom made controller built using Raspberry Pi then integrate it with web app as the auth and logging server. The identifier was using UI smartcard identifier (staff or student card) and also using e-KTP for some person </p>
            </div>
          </div>
          
          <div class="bg-indigo-200 p-5 m-5 rounded-md border-dashed border-2 border-blue-500">
            <div class="w-full">
              <span class="uppercase font-bold font-2xl"> 2. sipintu </span>
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we1-2"> + </button>                            
            </div>
            
            <div id="we1-2-item" class="{isHidden}">
              <p> Sistem Informasi Pintu (Door Information System). </p>
              <hr class=" border-black mb-4">
              <p class="font-thin"> Using the same image and concept as SIPARKIR (parking system), but the controller was connected to magnetic door lock that installed on the each door. It was installed on 5 roooms thorough the building and you can unlock it if you are authorized personnel registered on the door access or an admin </p>
            </div>
          </div>                    
          
          <div class="bg-purple-200 p-5 m-5 rounded-md border-dashed border-2 border-purple-500">
            <div class="w-full">              
              <span class="uppercase font-bold font-2xl"> 3. Pimon </span>                    
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we1-3"> + </button>                            
            </div>
            
            <div id="we1-3-item" class="{isHidden}">
              <p> Pi Monitor (video content management on monitor) </p>                    
              <hr class=" border-black mb-4">
              <p class="font-thin"> 
                <b> as fullstack web dev, </b> I war responsible to develop web app to upload and manage video that will displayed on screen/monitor that placed in the building. 
              </p>          
              <p class="font-thin mt-2"> 
                <b> as IoT Dev, </b> using Raspberry Pi as the controller that attached on each monitor as the controller, I was responsible to sync (using rsync command) the video uploaded via web app and played them.                         
              </p>          
            </div>
          </div>
        </div>
      </div>                    
      
      <!-- Pusilkom UI -->
      <div class="w-full mb-12 p-4 bg-slate-200">        
        <p class="text-xl font-semibold font-mono mt-2 mb-2"> Software Engineer
          <span class="text-purple-500"> | </span> 
          <span class="text-sm font-semibold mb-2">  Pusilkom UI  </span>
          <span class="text-purple-500"> | </span> 
          <span class="text-sm font-semibold mb-2">  February 2018 - June 2019 </span> 
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="we2"> - </button>
        </p>         
        <div id="we2-item" class="">
          <p class="font-secondary font-thin "> Responsible for maintaining and developing web application
          </p>
          <div class="text-xs mt-2"> Tech: 
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Python </span>                              
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Raspberry Pi </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Smartcard </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Card Reader </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> ZeroMQ </span>          
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Bash scripting </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Event Driven Arch </span>
          </div>        
          <p class="font-base mt-5"> Some of my works: </p>        
          
          <div class="bg-blue-200 p-5 m-5 rounded-md border-dashed border-2 border-indigo-500">
            <div class="w-full">              
              <span class="uppercase font-bold font-2xl"> 1. Presentronik </span>                    
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we2-1"> + </button>                            
            </div>
            <div id="we2-1-item" class="{isHidden}">                            
              <p> Online presence system </p>
              <hr class=" border-black mb-4">
              <p class="font-thin"> My role was as research assistant and was responsible to develop IoT device using Raspberry Pi as the controller, connected to card-reader to read smartcard UI as the identifier, using the same concept with siparkir. To further increase the response time, we implement Event Driven Architecture using ZeroMQ, by using pub/sub messaging between sensor controller actuator. </p>
            </div>
          </div>
          
          <div class="bg-indigo-200 p-5 m-5 rounded-md border-dashed border-2 border-indigo-500">
            <div class="w-full">
              <span class="uppercase font-bold font-2xl"> 2. Maintenance </span>                    
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we2-2"> + </button>                            
            </div>
            <div id="we2-2-item" class="{isHidden}">
              <p> Maintenance of SIPARKIR and SIPINTU </p>
              <hr class=" border-black mb-4">
              <p class="font-thin"> Maintain existing web-application implement research result from Presentronik which has improved response time, had better handling error response and less coupling components to SIPARKIR and SIPINTU </p>
            </div>
          </div>
        </div> 
      </div>  
      
      <!-- PT Makara Mas : Full Time -->
      <div class="w-full mb-12 p-4 bg-slate-200">        
        <p class="text-xl font-semibold font-mono mt-2 mb-2"> IT Manager
          <span class="text-purple-500"> | </span> 
          <span class="text-sm font-semibold mb-2">  PT Makara Mas </span>
          <span class="text-purple-500"> | </span> 
          <span class="text-sm font-semibold mb-2">  August 2019 - May 2020 </span> 
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="we3"> - </button>
        </p>           
        <div id="we3-item" class="">          
          <p class="font-secondary font-thin "> Responsible for planning, managing and executing IT activities within company
          </p>
          <div class="text-xs mt-2"> Tech: 
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> PHP </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Yii Framework </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Scrum </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Docker </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Server Maintenance </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> ISO 8583 </span>
          </div>        
          <p class="font-base mt-5"> Some of my works: </p>        
          
          <div class="bg-blue-200 p-5 m-5 rounded-md border-dashed border-2 border-indigo-500">
            <div class="w-full">
              <span class="uppercase font-bold font-2xl"> 1. Edupay </span>                    
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we3-1"> + </button>                                          
            </div>
            <div id="we3-1-item" class="{isHidden}">
              <p> Develop & Maintenance of Edupay </p>
              <hr class=" border-black mb-4">
              <p class="font-thin"> Web Application Edupay is one of the main product of PT Makara Mas. It is web app to store and manage invoices and check payment record. Some roles exists within the app are: BILLER (invoices owner), BANK and SWITCHER (PT Makara Mas as the mediator between clients and bank) </p>
            </div>
          </div>
          
          <div class="bg-indigo-200 p-5 m-5 rounded-md border-dashed border-2 border-indigo-500">
            <div class="w-full">
              <span class="uppercase font-bold font-2xl"> 2. Edupay & Pepipost </span>                    
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we3-2"> + </button>
            </div>
            <div id="we3-2-item" class="{isHidden}">
              <p> Integrating Edupay with Pepipost </p>
              <hr class=" border-black mb-4">
              <p class="font-thin"> Pepipost (netcore) is third party Email Delivery app that has many functions needed to send email. Especially for Edupay that sending many invoices or payments notification via emails, good and reliable Email Delivery was needed.             
              </p>
            </div>
          </div>
          
          <div class="bg-violet-200 p-5 m-5 rounded-md border-dashed border-2 border-indigo-500">
            <div class="w-full">
              <span class="uppercase font-bold font-2xl"> 3. BTNS Mobile Payment </span>                    
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we3-3"> + </button>
            </div>
            <div id="we3-3-item" class="{isHidden}">
              <p> Integrating with BTN Syariah </p>
              <hr class=" border-black mb-4">
              <p class="font-thin"> Integration between Bank BTN Syariah (BTNS) and PT Makara Mas as the switcher, using ISO8583 as the message format. One of the hardest task was creating and connecting the machine between two company was done by Mr. Gladhi Guarddin as Senior Consultant of PT Makara Mas. My responsible was to continue, implement needed service to connect them together end-to-end, and finally make a new duplicate of Edupay for BTNS  </p>
            </div>
          </div>
          
        </div>   
      </div>   
      
      <!-- PT Makara Mas : Part Time -->
      <div class="w-full mb-12 p-4 bg-slate-200">        
        <p class="text-xl font-semibold font-mono mt-2 mb-2"> Freelance & Part Time
          <span class="text-purple-500"> | </span> 
          <span class="text-sm font-semibold mb-2">  PT Makara Mas </span>
          <span class="text-purple-500"> | </span> 
          <span class="text-sm font-semibold mb-2">  May 2020 - Now </span> 
          <button class="float-right text-xl mb-2 px-7 rounded-lg bg-violet-400" on:click={toggleThis} id="we4"> - </button>
        </p>           
        <div id="we4-item">
          <p class="font-secondary font-thin "> Responsible for maintaining existing web app Edupay and bug fixing (main task) and involved in some app development
          </p>
          <div class="text-xs mt-2"> Tech: 
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> PHP </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Yii Framework </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Scrum </span>          
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Server Maintenance </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Kubernetes </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> AWS </span>
            <span class="bg-sky-200 text-blue-700 rounded px-1 py-1 mx-1"> Zabbix </span>
            
          </div>        
          <p class="font-base mt-5"> Some of my works: </p>        
          
          <div class="bg-blue-200 p-5 m-5 rounded-md border-dashed border-2 border-indigo-500">
            <div class="w-full">
              <span class="uppercase font-bold font-2xl"> 1. Edupay </span>                    
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we4-1"> + </button>              
            </div>
            <div id="we4-1-item" class="{isHidden}">
              <p> Develop & Maintenance of Edupay </p>
              <hr class=" border-black mb-4">
              <p class="font-thin"> Edupay as one of the main product still need some development and maintenance. I was also involved in migrating Edupay from VPS physical server to cloud server AWS. </p>
            </div>
          </div>
          
          <div class="bg-indigo-200 p-5 m-5 rounded-md border-dashed border-2 border-indigo-500">
            <div class="w-full">
              <span class="uppercase font-bold font-2xl"> 2. Network </span>
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we4-2"> + </button>              
            </div>
            <div id="we4-2-item" class="{isHidden}">
              <p> Maintenance of some existing network  </p>
              <hr class=" border-black mb-4">
              <p class="font-thin"> I am responsible to record/map existing network infra of PT Makara Mas and help in maintenance and also troubleshoot if there are any trouble in connectino/network. Network status can be monitored via Zabbix.
              </p>
            </div>
          </div>
          
          <div class="bg-violet-200 p-5 m-5 rounded-md border-dashed border-2 border-indigo-500">
            <div class="w-full">
              <span class="uppercase font-bold font-2xl"> 3. Bug Fixing </span>
              <button class="float-right text-xl mb-2 px-7 rounded-lg bg-blue-500" on:click={toggleThis} id="we4-3"> + </button>              
            </div>
            <div id="we4-3-item" class="{isHidden}">
              <p> Technical Support </p> 
              <hr class=" border-black mb-4">
              <p class="font-thin"> Giving help in bug fixing or code review if asked. 
              </p>
            </div>
          </div>
        </div>
      </div>   
      
    </section>
    