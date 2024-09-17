import React from 'react';
import image from '../../assets/aboutimg.webp';
import img11 from '../../assets/abouts.webp'

const About = () => {
  return (
    <div className=' border-2 border-white w-full min-h-screen h-fit bg-[radial-gradient(74%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_75%,transparent)]'>
      <div className='  w-full lg:h-96 h-fit flex flex-col items-center justify-start gap-6 bg-[#282e35de] pt-14 pb-2'>
        <h1 className=' text-4xl text-center w-7/12 font-semibold'>Driving Innovation in Online Education for a <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>Brighter Future</span></h1>
        <p className=' text-center w-7/12 text-lg'>CodeVertex is leading the charge in revolutionizing online education. We're committed to shaping a brighter future by providing advanced courses, utilizing the latest technologies, and fostering a thriving learning community.</p>
      </div>
      <div className=' overflow-hidden rounded-md lg:h-fit bg-white lg:absolute w-full lg:w-11/12 lg:left-14 top-96'>
        <img src={img11} className=' h-96 w-full'/>
      </div>
      <div className=' h-fit border-b border-gray-500 min-h-screen flex items-center justify-center'>
        <h2 className=' text-4xl text-center lg:mt-80'>We are passionate about revolutionizing the way we learn. Our innovative platform combines technology, expertise, and community to create an unparalleled educational experience.</h2>
      </div>
      <div className=' flex flex-col items-center gap-10 lg:flex-row justify-around'>
        <div className="my-24 flex lg:w-[50%] flex-col gap-10 p-5">
          <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent ">Hands-On Learning Through Live Projects:</h1>
          <p className=' text-slate-300'>CodeVertex distinguishes itself by offering a unique internship program that goes beyond traditional classroom education. Our internship program is designed to provide students with the opportunity to work on real projects under the guidance of experienced mentors. This immersive approach allows interns to apply theoretical concepts to practical scenarios, preparing them for the complexities of real-world projects.</p>
          <p className=' text-slate-300'>Our live projects cover a wide range of technologies and industries, ensuring that interns gain diverse experiences and skills. Whether it's software development, data science, or cybersecurity, we expose our interns to the breadth of the tech landscape, preparing them for the multifaceted demands of the industry.</p>
        </div>
        <div>
          <img src={image} className=' lg:w-96 shadow-[0_0_20px_0] shadow-[#FC6767]'/>
        </div>
      </div>
      <div className='flex flex-col items-center lg:gap-10 lg:flex-row justify-between p-3'>
        <div className='my-24 flex lg:w-[40%] flex-col gap-10 p-5'>
          <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Mentors :</h1>
          <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>Our mentors bring a wealth of experience and knowledge, guiding interns through the intricacies of real-world projects. Their mentorship goes beyond technical skills, encompassing professional development and career guidance.</p>
        </div>
        <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
          <h1 className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] '>Our Mission</h1>
          <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>Our mission is clear: to empower individuals with the skills and knowledge necessary for a successful career in technology. We believe that by offering hands-on learning opportunities, we contribute to the development of a highly skilled and adaptable workforce. </p>
        </div>
      </div>
    </div>
  )
}

export default About