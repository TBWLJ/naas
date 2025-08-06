import React from 'react'

const Location = () => {
  return (
    <>
        <div className="text-center mt-28">
          <h1 className="text-3xl font-bold">Our Contacts</h1>
        </div>
        <section className="flex flex-wrap justify-evenly px-5 pb-10">
            <div
              className="w-full sm:w-96 bg-red-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl uppercase">Call us:</h1>
              <a href="tel:+2348120940814">
                <p className="text-lg text-center pt-5">+2347037488314 <br/> +2349163587456</p>
              </a>
            </div>
            <div
              className="w-full sm:w-96 bg-green-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl uppercase">Email us:</h1>
              <p className="text-lg text-center pt-5">support@naas.org</p>
            </div>
            <div
              className="w-full sm:w-96 bg-red-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl uppercase">NAAS OFFICE:</h1>
              <p className="text-lg text-center pt-5">Asipa Market square, Asipa Ife-North LG. Osun state, Nigeria.</p>
            </div>
        </section>
        <hr />
        <div className="text-center mt-28">
          <h1 className="text-3xl font-bold">USE A FORM</h1>
        </div>
    </>
  )
}

export default Location