import React from 'react';

function Contact() {
  return (
    <div className=' w-full'>
      <div>
        <div
          className="sm:h-[60vh] h-[50vh] w-full opacity-60 flex items-center"
          style={{
            backgroundImage: 'url("https://cdn.thecodehelp.in/wkfvfci9gp9rkay9a0se_0ec1b8bb3f.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className='absolute sm:top-1/3 top-1/4 left-0 p-10 w-full text-[#fff]'>
          <p class="sm:text-[52px] text-5xl font-bold">Get In Touch</p>
          <p class="sm:text-lg text-base">The Ultimate Guide To Ace SDE Interviews.</p>
        </div>
      </div>
      {/* <div className="mx-auto flex h-full w-[80%] max-w-maxScreen  flex-col shadow-md md:flex-row">
        <div className="lg:w-[70%] md:w-[60%] bg-neutral-2 dark:bg-[#181a1b]">
          <div className="bg-neutral-2 dark:bg-[#181a1b] px-10 py-12 rounded-xl">

          </div>
        </div>
        <div className="flex flex-col justify-center sm:items-start items-center gap-4 bg-[#333f90] px-5 py-8 text-[#fff] lg:w-[40%] md:w-[40%]">

        </div>
      </div> */}
      <div className=' lg:ml-40 bg-black text-white w-full lg:w-[80%] lg:-translate-y-16 flex-col flex shadow-lg rounded-lg  md:flex-row lg:flex-row'>
        <div className=' w-full lg:w-[60%] min-h-screen h-fit p-8'>
          <div className='flex items-center justify-between w-full h-11 p-5'>
            <h1 className=' text-5xl font-bold'>Send us a message</h1>
            <p className=' text-2xl'>✉</p>
          </div>
          <form className=' p-4 flex-col flex gap-10 w-full text-xl mt-20 lg:mt-3'>
            <div className=' w-full flex flex-col lg:flex-row items-center justify-between'>
              <div className=' flex-col flex gap-3'>
                <label>Name*</label>
                <input className="flex h-10 w-full border text-black border-input bg-background placeholder:text-sm px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]" id="name" placeholder="Enter your name" required type="name" name="name" />
              </div>
              <div className=' flex-col flex gap-3'>
                <label>Email*</label>
                <input className="flex h-10 w-full border text-black border-input bg-background placeholder:text-sm px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]" id="email" placeholder="Enter your email" required type="email" name="email" />
              </div>
            </div>
            <div className=' w-full flex flex-col lg:flex-row items-center justify-between'>
              <div className=' flex-col flex gap-3'>
                <label>Phone Number*</label>
                <input className="flex h-10 w-full border text-black border-input bg-background placeholder:text-sm px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]" id="phoneNumber" placeholder="Enter your Phone Number" required type="text" name="Phonenumber" />
              </div>
              <div className=' flex-col flex gap-3'>
                <label>Subject*</label>
                <input className="flex h-10 w-full border text-black border-input bg-background placeholder:text-sm px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]" id="subject" placeholder="Enter your subject" required type="text" name="Subject" />
              </div>
            </div>
            <div className=' flex-col flex w-full gap-3'>
              <label>Message*</label>
              <input className="flex h-10 w-full border text-black border-input bg-background placeholder:text-sm px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]" id="message" placeholder="Enter your message" required type="text" name="message" />
            </div>
            <button className='justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background px-6 h-12 py-2 flex items-center gap-3 xl:text-xl text-lg lg:h-[4rem] hover:text-white hover:bg-[radial-gradient(74%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_75%,transparent)] rounded-[0.4rem]'>
              Submit
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send ">
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </button>

          </form>
        </div>
        <div className=' overflow-hidden bg-[radial-gradient(74%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_75%,transparent)] w-full lg:w-[40%] gap-10 rounded-lg p-8 flex flex-col justify-between'>
          <h1 className=' text-3xl text-center'>Contact Information</h1>
          <div className=' text-center text-2xl w-full text-wrap'>
            <a href='#'><p className=' text-wrap'>Support@codevertex@gmail.com</p><p>✉</p></a>
          </div>
          <div>
            Icons
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
