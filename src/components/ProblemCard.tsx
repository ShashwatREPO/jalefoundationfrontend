export default ({
  percentage,
  problem,
  source,
}: {
  percentage: string;
  problem: string;
  source: string;
}) => {
  return (
    <section className="border border-primary/10 py-6 px-5 rounded-md flex flex-col">
      <h4 className="text-[28px] font-medium mb-1.5">{percentage}</h4>
      <p className="text-primary/70 mb-2 leading-[125%]">{problem}</p>
      <p className="text-primary/50 mt-auto leading-[125%]">{source}</p>
    </section>
  );
};
