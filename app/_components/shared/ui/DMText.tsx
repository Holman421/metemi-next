type Props = {
  rounded: "left" | "right";
  colorVariant: "primary" | "secondary";
  text: string;
  time: string;
  className?: string;
};

export const DMText = ({ rounded, colorVariant, text, time, className }: Props) => {
  const roundedClass = rounded === "left" ? "rounded-tl-none" : "rounded-tr-none";
  const colorClass =
    colorVariant === "primary" ? "bg-dm-primary/60" : "bg-dm-secondary/60";
  return (
    <div
      className={`text-sm anim-pop-in overflo leading-[130%] text-white ${roundedClass} ${colorClass} ${className} rounded-xl  backdrop-blur-lg p-18 flex flex-col w-500`}
    >
    
      <p>{text}</p>
      <span className="self-end opacity-50">{time}</span>
    </div>
  );
};
