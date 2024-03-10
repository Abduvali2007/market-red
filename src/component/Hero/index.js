import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const { basket } = useSelector((s) => s);

  return (
    <div>
      <img
        class="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none ml-[500px] mt-10"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
        alt="image description"
      />
    </div>
  );
};

export default Hero;
