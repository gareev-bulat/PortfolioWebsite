import React from 'react'


const Connect = () => {
  return (
    <section id="connect">
    <h2 className="text-3xl text-white text-center sm:text-3xl lg:text-5xl p-4">Connect with me</h2>
    <form className='max-w-3xl mx-auto mt-8 mb-[200px] space-y-4 text-white text-base_l shadow-2xl shadow-white bg-gradient-to-b flex flex-col items-center p-4 rounded-3xl from-[#964734] to-[#0FA4AF]'>
      <div className='flex flex-col w-full px-4'>
        <label className='pb-2 pt-2 pl-4'>Full Name<span className="text-[#E64833] align-middle pl-1">*</span></label>
        <input className='h-10 bg-white border border-gray-300 focus:outline-none transition ease-in-out rounded-[5px] text-black text-base font-normal p-4 required'></input>


      </div>
      <div className='flex flex-col w-full px-4'>
        <label className='pb-2 pt-2 pl-4'>Email<span className="text-[#E64833] align-middle pl-1">*</span></label>
        <input className='h-10 bg-white border border-gray-300 focus:outline-none transition ease-in-out rounded-[5px] text-black text-base font-normal p-4 required'></input>


      </div>
      <div className='flex flex-col w-full px-4'>
        <label className='pb-2 pt-2 pl-4'>Subject</label>
        <input className='h-10 bg-white border border-gray-300 focus:outline-none transition ease-in-out rounded-[5px] text-black text-base font-light p-4'></input>
      </div>
      
      <div className='flex flex-col w-full px-4'>
        <label className='pb-2 pt-2 pl-4'>Message<span className="text-[#E64833] pl-1">*</span></label>
        <textarea name="message" id="message" className='h-30 bg-white border border-gray-300 focus:outline-none transition ease-in-out rounded-[5px] text-left align-top leading-normal resize-none text-black text-base font-extralight px-4 pt-2 required'></textarea>
      </div>
      <a className='relative pt-6'>
      <button type="submit" className='px-12 py-3 text-md bg-[#964734] hover:bg-[#E64833] shadow-2xl shadow-white rounded-3xl'>Send</button>
      </a>
    <div>
  


     
    </div>
    </form>
    </section>
  )
}

export default Connect