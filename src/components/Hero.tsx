import { useState } from "react";
import EnrollmentModal from "./EnrollmentModal";
import HeroImage from "../assets/hero-image.png";
import ScrollImage from "../assets/scroll-mouse.png";

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="bg-primary px-6 md:px-[60px] flex flex-col-reverse lg:flex-row items-center max-w-[1300px] mx-auto rounded-b-2xl pb-15 text-center lg:text-left">
        <section className="flex flex-col items-center lg:block">
          <h2 className="text-white text-2xl md:text-[32px] mb-[22px] font-semibold leading-[150%] max-w-[600px] md:max-w-full">
            Knowledge is in the classroom. Opportunity is in the field. We
            bridge the distance.
          </h2>
          <p className="text-white/50 mb-[46px] max-w-[580px] leading-[125%]">
            Our innovative internship program builds a powerful ecosystem where
            educated youth gain essential hands-on experience, and working
            communities develop the skills for a sustainable future.
          </p>
          <div className="flex gap-x-5 flex-row">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-cta rounded-md py-3 px-4 md:px-10 text-white block text-center"
            >
              Enroll Now
            </button>

            <a
              href="#problem"
              className=" bg-white rounded-md py-3 px-4 md:px-10 md:text-base text-sm flex items-center "
            >
              Learn More
            </a>
          </div>
        </section>

        <img
          src={HeroImage}
          className="mt-[65px] w-[400px] lg:w-full mb-8"
          alt="Hero Image"
        />
      </article>

      <div className="flex justify-center mt-[94px]">
        <section className="flex flex-col items-center">
          <img
            src={ScrollImage}
            className="mb-2"
            alt="Mouse Scroll Indicator"
          />
          <p className="text-sm">Scroll Down</p>
        </section>
      </div>

      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
