import Image from "next/image";
import couple from "../public/assets/couple.jpg";

export default function Hero() {
  return (
    <div className="max-w-full flex items-center justify-center">
      <Image src={couple} alt="Isabella e Rubem" className="w-full h-auto" />
    </div>
  );
}
