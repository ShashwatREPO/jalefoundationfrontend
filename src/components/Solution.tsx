import SolutionImage from "../assets/Solution-Image.png";

export default () => {
  return (
    <article id="solution" className="bg-primary text-white  py-[106px] xl:px-[200px] mt-[193px] p-8 sm:p-10">
      <section className="text-center sm:mb-10">
        <h3 className="text-sm font-medium mb-3">The solution</h3>
        <h4 className="text-[28px] font-medium mb-2">
          An Integrated Ecosystem for Empowerment
        </h4>
        <p className="text-white/50  ">
          Our model is built on three core pillars that work together to create
          a powerful cycle of opportunity.
        </p>
      </section>
      <section className="flex items-center flex-col lg:flex-row">
        <div className="mr-10 ">
          <img src={SolutionImage} />
        </div>
        <ul className="list-disc list-inside md:list-outside lg:w-[40%] [&>li]:mb-10 [&>li]:last:mb-0 [&>li]:leading-[125%] ">
          <li>
            We engage unskilled labor from rural areas to address local
            unemployment and create new opportunities.
          </li>
          <li>
            We partner with colleges and universities to involve students in
            real-world social projects, enhancing their hands-on exposure and
            future employability.
          </li>
          <li>
            Through direct training and mentorship, we help both groups acquire
            new skills that align with evolving market needs, increasing their
            access to institutional resources and financial opportunities.
          </li>
        </ul>
      </section>
    </article>
  );
};
