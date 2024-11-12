import React from 'react'

const About = () => {
  return (
    <section   className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap font-less">
      <div data-aos="fade-right" className="lg:w-2/3 md:w-1/2 bg-gray-500 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" className="absolute  inset-0 backdrop-grayscale-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no"  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46977.4889564846!2d-79.42503150475068!3d43.6448901871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1731370646178!5m2!1sen!2sca" ></iframe>
        <div className="bg-gray-400 relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6 bg-slate-300">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">Downtown Ave. Toronto, Canada</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 bg-slate-300">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a className="text-indigo-500 leading-relaxed">example@email.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="lg:w-1/3 md:w-1/2 bg-slate-300 rounded-md flex flex-col md:ml-auto w-full md:py-8 mt-8 p-2 md:mt-0 font-second items-center">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
        <p className="leading-relaxed mb-5 text-gray-600">You'd be surprised how many Contact Us pages don't include a call-to-action. Although the primary purpose of a contact page is to help people get in touch with the company, there'll always be folks who land on the page and don't want to fill out the form.</p>
        <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button
                               className="bg-five hover:bg-primary px-4 py-1 rounded-md duration-200 font-hiye text-first cursor-pointer tracking-wider glass"
              >
                READ MORE
              </button>
        <p className="text-xs text-gray-500 mt-3">feedback is vital</p>
      </div>
    </div>
  </section>
  )
}

export default About