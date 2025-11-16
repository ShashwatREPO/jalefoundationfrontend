import ImpactSvg from "../assets/impact-solution.svg";
import ImpactCard from "./ImpactCard";

export default () => {
  return (
    <article id="about" className="bg-primary text-white flex flex-col items-center py-[133px] p-6">
      <section className="flex items-center mb-[92px] flex-col-reverse md:flex-row">
        <div className="max-w-[829px] md:mr-[88px]">
          <h3 className="text-sm mb-4 font-medium">
            The Impact (Results & Benefits)
          </h3>
          <h4 className="text-[28px] mb-6 font-medium">
            Driving National Transformation from the Ground Up
          </h4>
          <p className="text-white/50">
            Witnessing the transformation: How practical skills unlock
            opportunities, strengthen communities, and build brighter futures.
          </p>
        </div>
        <img src={ImpactSvg} alt="" className="mb-10 md:mb-0 " />
      </section>
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-x-[23px] gap-y-16 max-w-[1196px]">
        <ImpactCard title="Enhanced Employability & Productivity" description="By integrating skill development for both unskilled labor and educated youth, we significantly increase job readiness, work efficiency, and participant confidence. This directly leads to improved pay prospects and more secure livelihoods." />
        <ImpactCard title="Fostering Powerful Collaboration" description="Our model actively strengthens ties between educational institutions, local MSMEs, and grassroots communities. This collaboration closes critical gaps in knowledge sharing and resource access, creating a more robust local economy." />
        <ImpactCard title="Community Empowerment & Local Development" description="Individuals emerge with enhanced skills and the capacity to drive their own local development initiatives. This grassroots empowerment fuels inclusive growth, reducing poverty and building self-sustaining communities from within" />
        <ImpactCard title=" Building a Sustainable & Replicable Model for Change" description="We demonstrate a proven, integrated ecosystem that addresses critical challenges. This scalable framework creates lasting economic transformation and reduces out-migration by generating sustainable opportunities at home." />
      </section>
    </article>
  );
};
