import Image from "next/image";

const Circles = () => {
  return <div className="w-[300px] xl:w-[300px] absolute -right-0 -bottom-2 mix-blend-color-dodge">
    <Image 
    src={'/bri.png'} 
    width={300} 
    height={300} 
    className="h-full w-full" 
    alt=""/>
  </div>;
};

export default Circles;
