import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

const ProfessionalCommunityPage = () => {
  const [activeNav, setActiveNav] = useState("powerhouses");
  const nav = [
    {
      name: "Powerhouses",
      id: "powerhouses",
      description: <Powerhouses />,
    },
    {
      name: "Locations",
      id: "locations",
      description: <Locations />,
    },
    {
      name: "Job Board",
      id: "job-board",
      description: <JobBoard />,
    },
    {
      name: "Calendar",
      id: "calendar",
      description: <Calendar />,
    },
    {
      name: "Education",
      id: "education",
      description: <Education />,
    },
    {
      name: "Professional Databases",
      id: "professional-databases",
      description: <ProfessionalDatabases />,
    },
    {
      name: "Forum",
      id: "forum",
      description: <Forum />,
    },
  ];
  const renderActive = () => {
    switch (activeNav) {
      case "powerhouses":
        return <Powerhouses />;
      case "locations":
        return <Locations />;
      case "job-board":
        return <JobBoard />;
      case "calendar":
        return <Calendar />;
      case "education":
        return <Education />;
      case "professional-databases":
        return <ProfessionalDatabases />;
      case "forum":
        return <Forum />;
      default:
        return <Powerhouses />;
    }
  };
  return (
    <section className="flex mt-32  max-w-[900px] mx-auto px-10 pb-24">
      <div className="flex flex-col w-full ">
        <header className="flex flex-col gap-y-3">
          <h1 className="text-4xl font-semibold">Professional Community</h1>
          <p>
            Our Professional community serves the developing music industry
            professionals who may face many challenges in their pursuit of
            success. We have made it our mission to empower the developing
            community by providing essential and complex resources that inspire
            and support consistent work, growth and prosperity.
          </p>
          <p>
            Our community is made out of Artists, Songwriters, Producers,
            Engineers, Designers, Managers, Agents, Publicists, Journalists,
            Promoters, Makerters, Ent. Lawyers, Accountants, Technicians,
            Programers, Educators and Executives, just to name a few.
          </p>
        </header>
        {/* Desktop */}
        <div className="w-full mt-8 gap-x-20 border-t-2 border-gray200 pt-8 hidden md:flex">
          {/* nav */}
          <nav>
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li
                  onClick={() => setActiveNav(item.id)}
                  className={cn(
                    "text-xl font-semibold mb-4 cursor-pointer transition-colors hover:text-primary whitespace-nowrap",
                    activeNav === item.id && "text-primary "
                  )}
                  key={item.name}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
          {/* description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={activeNav}
            className=" max-w-[600px]"
          >
            {renderActive()}
          </motion.div>
        </div>
        {/* Mobile */}
        <div className="flex md:hidden w-full mt-8 flex-col gap-20 border-t-2 border-gray200 pt-8">
          {nav.map((item) => {
            return (
              <div key={item.id}>
                <h2 className="text-xl font-semibold mb-4 cursor-pointer transition-colors hover:text-primary whitespace-nowrap">
                  {item.name}
                </h2>
                <div className=" max-w-[600px]">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCommunityPage;

const Powerhouses = () => {
  return (
    <>
      <p>
        Our powerhouse is our members professional and creative sanctuary
        conditioned with all necessary furniture and equipment to create the
        perfect inspirational atmosphere. Our amenities are made of:
      </p>
      <ul className="mt-5">
        <li>
          <span className="text-primary mr-2">•</span>Conference Rooms
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Workstations
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Recording Studios
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Mixing Studio
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Cyclorama
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Performance Rehearsal
          Stage
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Short-Stay Hospitality
          Rooms
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Dining Room
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Restroom w/Showers
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Entertainment
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Breakroom
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Picnic Yard
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Smoke Designated Area
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Jacuzzi pool
        </li>
      </ul>
    </>
  );
};
const Locations = () => {
  return (
    <>
      <p>We are located in:</p>
      <ul className="mt-5">
        <li>
          <span className="text-primary mr-2">•</span>Santo Domingo
        </li>
      </ul>
    </>
  );
};
const JobBoard = () => {
  return (
    <>
      <p>
        Our job board works around the clock to get our members their first or
        next gig in the industry. Through our interactive platform, our members
        have the opportunity to search for jobs that match their interests and
        qualifications. They would be able to personalize their settings to get
        notifications when new jobs get posted.
      </p>
    </>
  );
};
const Calendar = () => {
  return (
    <>
      <p>
        Our industry calendar keeps our members informed with all relevant
        occurrences that impact our community on a large scale. Here you’ll find
        conferences, workshops, awards ceremonies, concerts, etc. Our members
        would be able to save and set reminders on specific dates.
      </p>
    </>
  );
};
const Education = () => {
  return (
    <>
      <p>
        Knowledge is power, and that is how we empower. The following methods
        are available to our members to continue to learn at their convenience.
      </p>
      <ul className="mt-5">
        <li>
          <span className="text-primary mr-2">•</span>Monthly Workshops /
          webinars
        </li>
        <li>
          <span className="text-primary mr-2">•</span>How to videos
          (step-by-step)
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Articles (pdf)
        </li>
        <li>
          <span className="text-primary mr-2">•</span>Trivia (check your
          knowledge fun activity)
        </li>
      </ul>
    </>
  );
};
const ProfessionalDatabases = () => {
  return (
    <>
      <p>
        Our members have access to search and connect with other members of our
        community through personalized messages from their very own profile
        interface. This feature promotes individual growth using a very common
        set of characteristics. Communication, interest, value.
      </p>
    </>
  );
};
const Forum = () => {
  return (
    <>
      <p>
        In our forum we discuss topics of common interest and support each other
        with accessible information.
      </p>
    </>
  );
};
