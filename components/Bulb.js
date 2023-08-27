import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-34 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
      <Image src={'/bulb3.png'}
      width={260}
      height={200}
      alt=""
      className=""/>

    </div>
  );
};

export default Bulb;
