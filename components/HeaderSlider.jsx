import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Immerse in Crystal Clear Audio - Premium Headphones Await!",
      description: "Experience studio-quality sound with our latest noise-canceling headphones. Perfect for music lovers and professionals alike.",
      offer: "🔥 Limited Time: 30% Off All Headphones",
      buttonText1: "Shop Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Next-Gen Gaming Awaits - PlayStation 5 Pro Now in Stock!",
      description: "Experience lightning-fast loading, haptic feedback, and 3D audio with the most powerful PlayStation console ever.",
      offer: "⚡ Limited Stock - Order Now!",
      buttonText1: "Buy Now",
      buttonText2: "View Bundles",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Unleash Your Creativity - The New MacBook Pro",
      description: "With the revolutionary M2 Pro chip, experience unprecedented performance and all-day battery life.",
      offer: "✨ Exclusive: Free AirPods with Purchase",
      buttonText1: "Order Today",
      buttonText2: "Compare Models",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-background/50 via-background/80 to-background/50 py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full border border-border/30 shadow-sm"
          >
            <div className="md:pl-8 mt-10 md:mt-0 max-w-lg">
              <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                {slide.offer}
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold pb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-sm md:text-base text-muted-foreground pb-6">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-lg text-sm md:text-base font-medium hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:shadow-primary/30 active:scale-95">
                  {slide.buttonText1}
                </button>
                <button className="border border-border px-6 py-2.5 rounded-lg text-sm md:text-base font-medium text-foreground/90 hover:bg-accent/10 transition-colors hover:border-accent/30 flex items-center gap-2">
                  {slide.buttonText2}
                  <Image className="group-hover:translate-x-1 transition-transform" src={assets.arrow_icon} alt="arrow_icon" width={16} height={16} />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-72 w-48"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
