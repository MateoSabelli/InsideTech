import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface HeroServicesProps {
  title: string;
  description: string;
}

export default function HeroServices({
  title,
  description,
}: HeroServicesProps) {
  return (
    <div className="bg-[#193C58] min-h-[20vh] py-8 px-4 sm:px-6 lg:px-8 flex justify-space-between items-center">
      <div className="h-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-8 w-full">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-center lg:text-left max-w-lg lg:max-w-none">
          {title}
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-4 w-full md:w-auto">
          <p className="text-white text-base sm:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl font-medium text-center  leading-relaxed">
            {description}
          </p>
          <Button className="bg-[#F0F3F7] text-[#39506d] rounded-2xl hover:bg-gray-100 transition-colors w-[250px]">
            <Link
              href="/contact"
              className="font-medium text-sm sm:text-base lg:text-xl px-4 sm:px-8 lg:px-16 py-2 block"
            >
              Coordinar reunión
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
