import Image from "next/image";
import Marquee from 'react-fast-marquee'
import cbe from '@/public/assets/clients/cbe.png';
import tele from '@/public/assets/clients/ethiotele.png';
import ethiopian from '@/public/assets/clients/airlines.png';
import safaricom from '@/public/assets/clients/safaricom.png';
import google from '@/public/assets/clients/google.png';
import visa from '@/public/assets/clients/visa.png';
import amazon from '@/public/assets/clients/amazon.png';

const ClientsSection: React.FC = () => {

  const clients = [
    { name: "National Bank of Ethiopia", src: cbe },
    { name: "Ethio Telecom", src: tele },
    { name: "Ethiopian Airlines", src: ethiopian },
    { name: "Safaricom", src: safaricom },
    { name: "Google", src: google },
    { name: "Visa & Mastercard", src: visa },
    { name: "Amazon", src: amazon },
  ];
  return (
    <section className="py-12 my-12">
      <div className="text-center my-12 w-[75%] mx-auto">
        <h2 className="text-xl md:text-3xl font-bold">Our Clients</h2>
      </div>
      <Marquee direction="right" speed={50} pauseOnHover className='mb-12'>
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white px-4 py-2 mx-8 rounded-full shadow-md flex items-center justify-center w-40 h-16"
          >
            <Image src={client.src} alt={client.name} width={180} height={70} />
          </div>
        ))}
      </Marquee>

      <Marquee direction="left" speed={50} pauseOnHover className="mt-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white px-4 py-0 mx-8 rounded-full shadow-md flex items-center justify-center w-40 h-16"
          >
            <Image src={client.src} alt={client.name} width={180} height={70} />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientsSection;
