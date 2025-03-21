import Image from "next/image";
import heroBanner from "../../../public/banner.png";

export default function Banner() {
  return (
    <div className="w-screen ">
      <Image src={heroBanner} alt="Banner" layout="responsive" />
    </div>
  );
}
