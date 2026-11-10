import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const Header = () => {
  return (
    <header className="overflow-hidden bg-[#F2F0F1] pt-10 md:pt-16 lg:pt-20">
      <div className="mx-auto grid max-w-frame grid-cols-1 items-center md:grid-cols-2">
        <section className="max-w-frame px-4 pb-8 md:pb-12">
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#17324D] md:text-sm"
          >
            <span className="h-px w-8 bg-[#B89A5A]" aria-hidden="true" />
            The new season
          </motion.p>
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={cn([
              integralCF.className,
              "mb-5 text-[2.55rem] leading-[0.98] tracking-[-0.045em] sm:text-5xl md:mb-6 lg:mb-8 lg:text-[64px] lg:leading-[0.98]",
            ])}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 max-w-[545px] text-sm leading-6 text-black/60 lg:mb-8 lg:text-base lg:leading-7"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            className="mb-8 w-full md:mb-12 md:w-52"
          >
            <Link
              href="/shop"
              className="block w-full rounded-full bg-black px-8 py-4 text-center font-medium text-white transition-colors duration-300 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Shop Now
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-y-4 sm:flex-nowrap md:justify-start md:gap-x-3 lg:gap-x-6 xl:gap-x-8"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold md:text-xl lg:text-3xl xl:text-[40px]">
                <AnimatedCounter from={0} to={200} />+
              </span>
              <span className="text-nowrap text-xs text-black/60 xl:text-base">
                International Brands
              </span>
            </div>
            <Separator
              className="ml-5 h-12 bg-black/10 md:ml-0"
              orientation="vertical"
            />
            <div className="ml-5 flex flex-col md:ml-0">
              <span className="text-2xl font-bold md:text-xl lg:text-3xl xl:text-[40px]">
                <AnimatedCounter from={0} to={2000} />+
              </span>
              <span className="text-nowrap text-xs text-black/60 xl:text-base">
                High-Quality Products
              </span>
            </div>
            <Separator
              className="ml-5 hidden h-12 bg-black/10 sm:block md:ml-0"
              orientation="vertical"
            />
            <div className="mt-1 flex w-full flex-col text-center sm:ml-5 sm:mt-0 sm:w-auto sm:text-left md:ml-0">
              <span className="text-2xl font-bold md:text-xl lg:text-3xl xl:text-[40px]">
                <AnimatedCounter from={0} to={3000} />+
              </span>
              <span className="text-nowrap text-xs text-black/60 xl:text-base">
                Happy Customers
              </span>
            </div>
          </motion.div>
        </section>
        <div className="relative">
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[448px] overflow-hidden md:min-h-[540px] lg:min-h-[620px]"
            aria-label="TEEZ.LO fashion collection"
          >
            <motion.div
              initial={{ scale: 1.045 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.015 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-[url('/images/header-res-homepage.png')] bg-cover bg-top bg-no-repeat md:bg-[url('/images/header-homepage.png')] xl:bg-[center_top_-1.6rem]"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -18 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-7 top-12 xl:right-0"
              aria-hidden="true"
            >
              <Image
                priority
                src="/icons/big-star.svg"
                height={104}
                width={104}
                alt=""
                className="h-[76px] w-[76px] lg:h-24 lg:w-24 xl:h-[104px] xl:w-[104px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 18 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-7 top-36 md:left-0 md:top-44 lg:top-56"
              aria-hidden="true"
            >
              <Image
                priority
                src="/icons/small-star.svg"
                height={56}
                width={56}
                alt=""
                className="h-11 w-11 md:h-14 md:w-14"
              />
            </motion.div>
          </motion.section>
        </div>
      </div>
    </header>
  );
};

export default Header;
