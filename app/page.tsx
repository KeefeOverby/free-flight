import Image from "next/image";
import Nav from '@/app/components/nav';

const LandingPage = () => {
  return (
    <main className="grid grid-cols-1 h-screen w-full p-4">
      <section className="flex flex-col h-full w-full items-center justify-between">
        <Nav />
        <div className="flex h-full w-full pt-4">
          <p className="h-fit w-full text-xl text-center">Landing Page</p>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;