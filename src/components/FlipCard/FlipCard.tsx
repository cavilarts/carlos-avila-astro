import Card from "../Card/Card";

export interface FlipCardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

export default function FlipCard({
  children,
  title,
  description,
}: FlipCardProps) {
  return (
    <section className="relative w-full h-[275px] md:w-1/5 md:h-[275px] group [perspective:1000px]">
      <section className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 text-center text-slate-200 rounded-xl [backface-visibility:hidden]">
          <Card>
            <section className="flex justify-center items-center w-full h-full">
              {children && (
                <span className="text-white text-9xl">{children}</span>
              )}
            </section>
          </Card>
        </div>
        <div className="absolute inset-0 rounded-xl text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card>
            <section className="flex flex-col justify-center items-center w-full h-full">
              <h2 className="text-3xl pb-4">{title}</h2>
              <p>{description}</p>
            </section>
          </Card>
        </div>
      </section>
    </section>
  );
}
