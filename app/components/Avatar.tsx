'use client';

import Image from 'next/image';

const Avatar: React.FC = () => {
  return (
    <Image
      alt="Avatar"
      height="30"
      width="30"
      src="/images/placeholder.jpg"
      className="rounded-full"
    />
  );
};

export default Avatar;
