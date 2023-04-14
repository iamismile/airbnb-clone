'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            items-center
            gap-3
            rounded-full
            hover:shadow-md
            transition
            cursor-pointer
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-12
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            text-sm
            overflow-hidden
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" onClick={() => {}} />
              <MenuItem label="Sign up" onClick={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;