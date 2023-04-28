'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && <BiDollar size={24} className="text-neutral-700 absolute top-5 left-2" />}
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder=" "
        {...register(id, { required })}
        className={`
          peer
          border-2
          w-full
          bg-white
          rounded-md
          outline-none
          p-4
          pt-6
          font-light
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-neutral-300'}
        `}
      />
      <label
        className={`
          absolute
          top-5
          ${formatPrice ? 'left-9' : 'left-4'}
          origin-[0]
          z-10
          text-md
          -translate-y-3
          duration-150
          transform
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
