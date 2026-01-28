import Image from 'next/image';

export default function Home() {
  const hello = 'Hello, Next.js 13!';
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to Rethabile&apos;s World
        </h1>
        <h2 className="mt-3 text-2xl text-zinc-700 dark:text-zinc-300">
          Get used to this
        </h2>
      </main>
    </div>
  );
}
