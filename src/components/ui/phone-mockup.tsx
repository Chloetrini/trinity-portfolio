interface PhoneMockupProps {
  src: string;
  alt: string;
}

/** iPhone 14 Pro Max proportioned frame, screenshot cropped to fill. */
export function PhoneMockup({ src, alt }: PhoneMockupProps) {
  return (
    <div className="flex justify-center">
      <div
        className="relative w-[clamp(220px,70vw,290px)] rounded-[52px] bg-[#050506] p-3.5 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.7)] ring-2 ring-[#2a2c31]"
        style={{ aspectRatio: "430 / 932" }}
      >
        <div className="absolute top-3.5 left-1/2 z-2 h-[30px] w-[108px] -translate-x-1/2 rounded-full bg-[#050506]" />
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-black">
          <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
        </div>
      </div>
    </div>
  );
}
