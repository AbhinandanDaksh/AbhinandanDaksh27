import React from 'react';
import { Icon } from '../icons'; // Replace with your icon import
import { socialMedia } from '../config/config';

const SideViewLeft = () => {
  return (
    <div className="hidden fixed bottom-0 left-12 md:flex lg:flex flex-col items-center text-[#a8b2d1] bg-transparent">
      {/* Social Media Icons */}
      <div className="flex flex-col items-center mb-4">
        {socialMedia.map(({ url, name }, index) => (
          <a
            key={index}
            href={url}
            aria-label={name}
            target="_blank"
            rel="noreferrer"
            className="h-6 w-6 mb-12 flex items-center justify-center hover:-translate-y-[2px] duration-300 hover:text-[#64ffda] transition-all"
          >
            <Icon name={name} />
          </a>
        ))}
      </div>

      {/* Vertical Line */}
      <div className="w-[2px] h-[90px] bg-[#a8b2d1]"></div>
    </div>
  );
};

export default SideViewLeft;
