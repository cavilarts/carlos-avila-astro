interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  image,
  children,
}: CardProps) {
  return (
    <div className="w-full h-full rounded-3xl bg-gradient-to-b from-orange-400 to-violet-600 p-[1px] rounded7xl shadow-md">
      <article className="bg-black h-full shadow-xl rounded-3xl bg-secondary-content text-center flex flex-col items-center p-6">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {image && <img src={image} alt={title} />}
        {children}
      </article>
    </div>
  );
}
