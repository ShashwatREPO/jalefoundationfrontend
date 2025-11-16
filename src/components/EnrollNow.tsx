import { useState } from "react";
import bgVector from "../assets/section-vector.png";
import EnrollmentModal from "./EnrollmentModal";

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="enroll"
        className="relative py-12 md:py-20 bg-no-repeat mb-12 bg-center"
        style={{
          backgroundImage: `url(${bgVector})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="max-w-[1300px] mx-auto px-4 text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            We'll Help You Get Started
          </h2>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8 max-w-4xl mx-auto">
            Ready to turn your knowledge into a thriving career? Our internship program offers hands-on experience, real-world skills, and a direct path to employment. Don't just get a degree, build a future.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-white text-[#7BA884] font-semibold rounded-md mb-8 py-3 px-4 md:px-10 text-sm md:text-base hover:bg-gray-100 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </section>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
