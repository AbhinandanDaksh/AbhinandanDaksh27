import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='lg:p-0 p-[10%]'>
        <section
    //   id="contact"
    //   ref={revealContainer}
      className="max-w-[36rem] mx-auto mb-24 text-center sm:mb-12"
    >
      <h2 className=" font-mono text-lg font-normal mb-5 text-[#64ffda]">
        <span className="">04. What’s Next?</span>
      </h2>

      <h2 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]  line-clamp-3">
        Get In Touch
      </h2>

      <p className="my-8 lg:text-lg text-[#8892b0]">
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <button className="mt-20 m-auto flex justify-center items-center h-10 bg-transparent rounded border-2 px-8 py-2 lg:px-14 lg:py-6 border-[#64ffda] text-[#64ffda] font-mono text-sm sm:text-base hover:translate-y-[-2px] duration-300 hover:bg-[#64ffda] transition-all hover:text-[#0a192f]">
            <a href="mailto:Abhinandandaksh@gmail.com" aria-label="Hire me via email">
              Say Hello!
            </a>
          </button>
    </section>
    </div>
  )
}

export default Contact