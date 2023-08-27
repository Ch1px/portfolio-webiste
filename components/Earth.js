import Image from "next/image";

const Earth = () => {
  return (
    <div className="absolute -left-36 -bottom-16 rotate-0 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
      <Image src={'/earthAI.png'}
      width={400}
      height={400}
      alt=""
      className=""/>

    </div>
  );
};

export default Earth;