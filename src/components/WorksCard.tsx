export default ({
  alt,
  last,
  no,
  heading,
  description,
  img,
}: {
  alt?: boolean;
  last?: boolean;
  no: number;
  heading: string;
  description: string;
  img: string;
}) => {
  return (
    <section
      className={`flex  ${
        alt
          ? " xl:flex-row-reverse xl:-translate-x-[calc(50%-20px)] "
          : "xl:translate-x-[calc(50%-20px)]"
      } mb-[55px]  `}
    >
      <div
        className="w-[42px] h-[42px] sm:flex items-center justify-center bg-primary text-white p-2 
      rounded-xl relative hidden"
      >
        <span>{no}</span>
        <span
          className={`w-6 sm:w-9 h-0.5 bg-primary absolute top-1/2 ${
            alt ? "-right-6 sm:-right-9 xl:-left-9" : "-right-6 md:-right-9"
          }`}
        ></span>
        {!last && (
          <span className="absolute w-0.5 h-60 xs:h-[180px]  xl:h-[140px] bg-primary top-full"></span>
        )}
      </div>

      <div
        className={` mt-2  flex flex-col text-center sm:text-left  ${
          alt
            ? "xs:ml-8 sm:ml-12 xl:mr-12 xl:flex-row-reverse xl:text-right"
            : " xs:ml-8 xl:flex-row sm:ml-12"
        }`}
      >
        <div
          className={` ${
            alt ? " xl:ml-4" : "mr-4"
          } relative top-1 flex xl:block justify-center sm:justify-start`}
        >
          <img src={img} alt="" className="mb-4" />
        </div>
        <div className="max-w-[425px]">
          <h5 className=" text-[21px] mb-3">{heading}</h5>
          <p className="text-primary/50">{description}</p>
        </div>
      </div>
    </section>
  );
};
