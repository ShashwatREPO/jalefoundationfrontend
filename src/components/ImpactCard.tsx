interface ImpactCardProps {
  title: string;
  description: string;
}

export default ({ title, description }: ImpactCardProps) => {
  return (
    <article className="border border-white/10 px-5 py-6 rounded-md">
      <h5 className="font-bold mb-6">{title}</h5>
      <p className="text-white/50">{description}</p>
    </article>
  );
};
