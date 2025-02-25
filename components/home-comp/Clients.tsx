import Image from "next/image";
import cbe from "@/public/assets/cbe.svg";
import tele from "@/public/assets/tele.svg";
import ethiopian from "@/public/assets/etair.svg";
import safaricom from "@/public/assets/safari.svg";
import google from "@/public/assets/google.svg";
import visa from "@/public/assets/visa.svg";
import amazon from "@/public/assets/amazon.svg";
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
    <div className="flex py-4">
      {clients.map((client, index) => (
        <div
          key={index}
          className="bg-white rounded-full flex items-center justify-center  w-[250px] sm:w-[270px] md:w-[300px] lg:w-[350px]"
        >
          <Image src={client.logo} alt={client.name} />
        </div>
      ))}
    </div>
  );
}
