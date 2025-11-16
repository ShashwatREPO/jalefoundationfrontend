import WorksCard from "./WorksCard";
import breifcaseSvg from "../assets/briefcase.svg";
import degreeSvg from "../assets/degree.svg";
import rocketSvg from "../assets/rocket.svg";
import tracktorSvg from "../assets/tracktor.svg";

export default () => {
  return (
    <article id="how-it-works" className=" p-4">
      <section className="text-center mt-[113px]">
        <h3 className="font-medium mb-4 text-sm">How It Works?</h3>
        <h4 className="font-medium mb-3 text-[28px]">Our Unique Approach</h4>
        <p className=" text-black/50">
          Our four-part blueprint for building market-ready skills and launching
          sustainable careers.
        </p>
      </section>
      <section className="flex flex-col items-center mt-15 md:mt-[97px] p-4">
        <WorksCard
          no={1}
          img={breifcaseSvg}
          heading="Commercial Foundation"
          description="Participants gain hands-on experience by engaging in real-world enterprise, fostering entrepreneurial skills and practical business acumen."
        />
        <WorksCard
          no={2}
          img={tracktorSvg}
          heading="Learning Hub - The Eco-Village"
          description="An innovative and immersive environment where practical skills are honed through community-based educational programs."
          alt
        />
        <WorksCard
          no={3}
          img={degreeSvg}
          heading="Core Curriculum"
          description="Our dynamic curriculum bridges academic knowledge with practical application, ensuring job readiness and comprehensive skill development."
        />
        <WorksCard
          no={4}
          img={rocketSvg}
          heading="Career Launchpad"
          description="Connecting talent with opportunities, facilitating internships that lead directly to meaningful and sustainable employment."
          alt
          last
        />
      </section>
    </article>
  );
};
