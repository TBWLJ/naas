import { Link } from 'react-router-dom'

const Solutionn = () => {
    const solutions = [
      {
        title: "Academic Support",
        description:
          "We promote academic excellence through mentorship, scholarship opportunities, tutorial programs, and resource sharing for students at all levels.",
      },
      {
        title: "Cultural Heritage",
        description:
          "NAAS proudly preserves and promotes the rich cultural values of the Asipa community through events, awareness campaigns, and cultural celebrations.",
      },
      {
        title: "Leadership Opportunity",
        description:
          "We nurture tomorrow's leaders by offering leadership training, public speaking sessions, and opportunities to serve within NAAS at various capacities.",
      },
      {
        title: "Community Service",
        description:
          "Giving back to Asipa is at the heart of our mission. We organize outreach programs, health drives, town cleanups, and youth empowerment projects.",
      },
      {
        title: "Event Organization",
        description:
          "From campus orientation to emotional and financial support, NAAS is committed to ensuring the well-being and success of every Asipa student.",
      },
    ];
  
    return (
      <>
        <div className="text-center mt-28" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
          <h1 className="text-3xl font-bold text-green-500">About us</h1>
        </div>
        <section className="flex flex-wrap justify-evenly px-5 pb-10" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="w-full sm:w-96 bg-gray-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl">{solution.title}</h1>
              <p className="text-lg text-center pt-5">{solution.description}</p>
              <img
                src={solution.imgSrc}
                className="w-12 hover:w-16 mt-5 transition-all duration-300"
                alt={solution.imgAlt}
              />
              <Link to={solution.anchor}>
                <h1 className="font-bold text-xl pt-5">{solution.linkText}</h1>
              </Link>
            </div>
          ))}
        </section>
        <hr />
      </>
    );
  };
  
  export default Solutionn;
  