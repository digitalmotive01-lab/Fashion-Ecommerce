import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/icons/versace-logo.svg",
  },
  {
    id: "zara",
    srcUrl: "/icons/zara-logo.svg",
  },
  {
    id: "gucci",
    srcUrl: "/icons/gucci-logo.svg",
  },
  {
    id: "prada",
    srcUrl: "/icons/prada-logo.svg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/icons/calvin-klein-logo.svg",
  },
];

const Brands = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="bg-black"
      aria-label="Featured brands"
    >
      <div className="mx-auto flex max-w-frame flex-wrap items-center justify-center space-x-7 py-5 sm:px-4 md:justify-between md:py-0 xl:px-0">
        {brandsData.map((brand) => (
          <motion.div
            key={brand.id}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            className="my-5 md:my-11"
          >
            <Image
              priority
              src={brand.srcUrl}
              height={0}
              width={0}
              alt={brand.id}
              className="h-auto max-h-[26px] w-auto max-w-[116px] lg:max-h-9 lg:max-w-48"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Brands;
