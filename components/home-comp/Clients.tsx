import Image from "next/image";
import Marquee from "react-fast-marquee";
import img1 from '@/public/assets/clients/AVENIR TECHNOLOGIES PLC.jpg';
import img2 from '@/public/assets/clients/ActionAID Ethiopia.jpg';
import img3 from '@/public/assets/clients/Africom Technologies PLC.png';
import img4 from '@/public/assets/clients/Arifpay Financial Technologies Share Company.jpeg';
import img5 from '@/public/assets/clients/Chapa Financial Technologies.png';
import img6 from '@/public/assets/clients/Droga Pharam Plc.png';
import img7 from '@/public/assets/clients/img7.png';
import img8 from '@/public/assets/clients/Golden Sales and Marketing plc.jpeg';
import img9 from '@/public/assets/clients/Last Mile Health.png';
import img10 from '@/public/assets/clients/img10.png';
import img11 from '@/public/assets/clients/Ministry of Finance.jpeg';
import img12 from '@/public/assets/clients/Organization of Southern Cooperation.png';
import img13 from '@/public/assets/clients/Secretary of the House of Federation.png';
import img14 from '@/public/assets/clients/The Ethiopia Islamic Affairs Supreme concil.png';
import img15 from '@/public/assets/clients/Washington Health Care Center plc.jpeg';
import img16 from '@/public/assets/clients/Wingu Africa.png';
import img17 from '@/public/assets/clients/ethiopian national dialogue commision.png';

export default function Clients() {
  const clients = [
    { name: "image1", logo: img1 },
    { name: "image2", logo: img2 },
    { name: "image3", logo: img3 },
    { name: "image4", logo: img4 },
    { name: "image5", logo: img5 },
    { name: "image6", logo: img6 },
    { name: "image7", logo: img7 },
    { name: "image8", logo: img8 },
    { name: "image9", logo: img9 },
    { name: "image10", logo: img10 },
    { name: "image11", logo: img11 },
    { name: "image12", logo: img12 },
    { name: "image13", logo: img13 },
    { name: "image14", logo: img14 },
    { name: "image15", logo: img15 },
    { name: "image16", logo: img16 },
    { name: "image17", logo: img17 },
  ];

  const continuousClients = [...clients, ...clients];

  return (
    <div className="py-4 overflow-hidden">
      <Marquee
        direction="left"
        speed={120}
        pauseOnHover
        gradient={false} 
        className="mb-12"
        style={{ whiteSpace: 'nowrap' }}
      >
        {continuousClients.map((client, index) => (
          <div
            key={index}
            className="bg-white px-4 py-2 mx-8 flex items-center justify-center w-40 h-32"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={180}
              height={70}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}