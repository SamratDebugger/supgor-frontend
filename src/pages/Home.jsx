import Hero from "../components/hero/Hero";

export default function Home() {
  const defaultSize = "max-w-360 mx-auto p-5";
  return (
    <>
      <section className="my-5 ">
        <Hero />
      </section>
    </>
  );
}
