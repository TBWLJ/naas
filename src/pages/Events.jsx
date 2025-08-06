import React from 'react';

const Events = () => {
    return (
      <>
        <div className="text-center mt-28" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
          <h1 className="text-3xl font-bold text-green-500">Events</h1>
        </div>
        <section className="flex flex-wrap justify-evenly px-5 pb-10" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
          <h1>No upcoming events yet</h1>
        </section>
      </>
    );
};

export default Events;