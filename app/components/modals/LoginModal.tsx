'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import Modal from './Modal';
import { useState } from 'react';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginModal: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: { email: '', password: '' } });
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await signIn('credentials', { ...data });
      toast.success('Logged in');
      router.refresh();
      loginModal.onClose();
    } catch (err: any) {
      toast.error(err.message);
      console.error('loginModal component onSubmit error:', err.message);
    }
    setIsLoading(false);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <Input
        id="email"
        type="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label="Continue with GitHub"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className="text-neutral-500 mt-4 font-light">
        <div className="flex gap-2 items-center justify-center">
          <p>Already have an account?</p>
          <p
            onClick={loginModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      body={bodyContent}
      footer={footerContent}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default LoginModal;
