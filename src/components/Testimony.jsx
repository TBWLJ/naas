import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

function TestimonialCard({ client, title, clientInfo }) {
  return (
    <Card shadow={false} className="bg-blue-200 rounded-2xl p-6">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography
          color="blue"
          className="lg:mb-20 mb-4 text-2xl font-bold"
        >
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <Typography variant="h6" color="blue">
            {client}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500"
          >
            {clientInfo}
          </Typography>
        </div>
        {/* <img src={img} className="max-w-[8rem]" alt={client} /> */}
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    title:
      "Serving as a NAAS campus coordinator taught me responsibility, teamwork, and how to lead with integrity. NAAS prepared me for both school and life.",
    client: "Ojo Anu",
    clientInfo: "Obafemi Awolowo University",
    // img: "titos.png",
  },
  {
    title:
      "During a difficult financial period, NAAS stepped in to support me with resources and a small scholarship that kept me in school. I’ll forever be grateful.",
    client: "Amusan Ebenezer",
    clientInfo: "Obafemi Awolowo University",
    // img: "afric.png",
  },
];

export function Testimony() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <Typography
          variant="h2"
          color="blue"
          className="mb-4 !text-2xl lg:!text-4xl"
        >
          The heartfelt testimonials of our community
        </Typography>
        <Typography
          variant="lead"
          className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
        >
          From life-enhancing gadgets to unparalleled customer support, and
          transformative learning opportunities.
        </Typography>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>

        <Card
          shadow={false}
          className="mt-8 bg-red-100 text-center rounded-2xl p-6"
        >
          <CardHeader color="transparent" floated={false} shadow={false}>
            <Typography
              color="blue"
              className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
            >
              Before joining NAAS, I felt disconnected from my roots and fellow students. This association helped me find a sense of identity and belonging. I’m proud to represent Asipa on my campus today.;
            </Typography>
          </CardHeader>
          <CardBody className="items-center mx-auto py-2">
            <Typography variant="h6" color="blue">
              Taiwo Ayomide
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-500"
            >
              Ladoke Akintola University of Technology
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimony;
