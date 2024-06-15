import { Button, Image } from "@chakra-ui/react";
import React from "react";

const Hero = ({ data }) => {
  const { mainText, subText, imgUrl, imgAlt, buttonText, buttonLink, reverse } =
    data;

  return (
    <div
      className={`px-4 py-16 md:px-8 md:py-20 flex items-center justify-center flex-wrap ${
        reverse ? "flex-row-reverse bg-orange-200" : "flex-row bg-white"
      }`}
    >
      <div className="w-full flex rounded flex-wrap items- justify- p-4 md:w-1/2">
        <Image
          src={imgUrl}
          alt={imgAlt}
          className={`mb-8 md:mb-0 w-11/12 max-w-[576px] h-max rounded-lg ${
            reverse
              ? "rounded-tr-[60px] rounded-bl-[60px] md:rounded-tr-[80px] md:rounded-bl-[80px]"
              : "rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[80px] md:rounded-br-[80px]"
          }`}
        />
      </div>
      <div className="flex flex-col flex-wrap items-start justify-center p-4 md:w-1/2">
        <p className={`font-semibold mb-4 md:mb-8 text-3xl md:text-5xl`}>
          {mainText}
        </p>
        <p className="text-base md:text-lg w-10/12">{subText}</p>
        {buttonText && buttonLink && (
          <Button
            className="mt-8 rounded-xl hover:bg-red-300"
            bg={reverse ? "white" : "orange.400"}
            color={!reverse && "white"}
            _hover={{
              bg: !reverse ? "orange.200" : "orange",
              color: reverse ? "white" : "black",
            }}
            onClick={console.log(buttonLink)}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;
