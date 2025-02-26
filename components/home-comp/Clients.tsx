import Image from "next/image";
import cbe from "@/public/assets/cbe.svg";
import tele from "@/public/assets/tele.svg";
import ethiopian from "@/public/assets/etair.svg";
import safaricom from "@/public/assets/safari.svg";
import google from "@/public/assets/google.svg";
import visa from "@/public/assets/visa.svg";
import amazon from "@/public/assets/amazon.svg";
import Marquee from "react-fast-marquee";
export default function Clients() {
  const clients = [
    { name: "National Bank of Ethiopia", logo: cbe },
    { name: "Ethio Telecom", logo: tele },
    { name: "Ethiopian Airlines", logo: ethiopian },
    { name: "Safaricom", logo: safaricom },
    { name: "Google", logo: google },
    { name: "Visa & Mastercard", logo: visa },
    { name: "Amazon", logo: amazon },
  ];

  return (
    <div className="py-4">
      <Marquee direction="left" speed={50} pauseOnHover className="mb-12">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white px-4 py-2 mx-8  flex items-center justify-center w-40 h-16"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={180}
              height={70}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
