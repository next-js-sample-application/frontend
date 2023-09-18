'use client'

import { useForm } from 'react-hook-form';
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues: { email: '1@o2.pl', password: '123456' }});

  const fields = {
    email: register('email', { required: 'Email is required' }),
    password: register('password', { required: 'Password is required' })
  };
  async function onSubmit({ email, password }: any) {
    console.log(`Submitted login form with: ${email}, ${password}.`)
  }

  return (
    <div className="flex min-h-full flex-col justify-center items-center py-5">
      <h1 className="text-center text-2xl pb-2">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          autoComplete="email"
          {...register("email", { required: true })}
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="password"
          {...register("password", { required: true })}
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
        />
        <button
          type="submit"
          className="w-full px-3 py-1.5 text-white rounded-md bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Login</button>
      </form>
    </div>
  )
}