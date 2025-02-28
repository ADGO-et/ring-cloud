"use client";

const MapComponent = () => {
  const lat = 8.9661;
  const lng = 38.8405;

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat},${lng}!5e0!3m2!1sen!2sus!4v1614123456789!5m2!1sen!2sus`;

  return (
    <iframe
      src={mapSrc}
      width="400"
      height="220"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapComponent;
