import React from 'react';

const boardsData = [
  {
    name: 'Comrade Ojo Anuoluwapo Amos',
    role: 'President || 07037488314',
    imgSrc: 'anu.jpeg',
    phone: ''
  },
  {
    name: 'Comrade Odeniyi Ayomide Christianah',
    role: 'Vice President || 09055415784',
    imgSrc: 'odeniyi.jpeg',
  },
  {
    name: 'Comrade Ayanbode emmanuel',
    role: 'P.R.O || 09163587456',
    imgSrc: 'emma.jpeg',
  },
  {
    name: 'Comrade Ojediran Precious Ayomide',
    role: 'P.R.O 2 || 09011578984',
    imgSrc: 'precious.jpeg',
  },
  {
    name: 'Comrade Amusan Ebenezer Oluwaseyi',
    role: 'General Secretary || 07048245682',
    imgSrc: 'ebenezer.jpeg',
  },
  {
    name: 'Comrade (Prince) Oyekanmi Ridwan Iremide',
    role: 'Treasurer || 08125749712',
    imgSrc: 'ridwan.jpeg',
  },
];

const Boards = () => {
  return (
    <fieldset>
      <section className="flex flex-wrap justify-center px-3 xl:px-20 lg:px-20 md:px-9 sm:px-9 gap-6 mb-16">
        {boardsData.map((board, index) => (
          <div key={index} className="w-full sm:w-80 md:w-64 lg:w-80 bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-96 object-cover"
              src={board.imgSrc}
              alt={`${board.name}`}
            />
            <section className="flex justify-center -mt-6">
              <div className="bg-green-600 w-4/5 h-auto text-center pt-2 rounded-md shadow-lg">
                <h1 className="text-white text-md font-bold uppercase">{board.name}</h1>
                <h2 className="text-white">{board.role}</h2>
                <h2 className='text-white'>{board.phone}</h2>
              </div>
            </section>
          </div>
        ))}
      </section>
    </fieldset>
  );
};

export default Boards;
