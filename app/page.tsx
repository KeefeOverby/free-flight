import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="grid grid-cols-1 h-screen w-full p-4">
      <section className="flex flex-col h-full w-full items-center justify-between">
        <div className="flex h-full w-full">
          <h1 className="flex h-fit w-fit text-3xl text-center">Landing Page</h1>
        </div>
      </section>
    </main>
  );
}
