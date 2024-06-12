import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5">
      <div className="wrapper flex flex-row gap-5 2xl:gap-0 ">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Visit, Connnect and experience: Mecon Limited.</h1>
          <p className="p-regular-20 md:p-regular-24">This is an application to get you the online gatepass to visit our premises</p>
          <Button size="lg" asChild className="button w-full md:w-fit">
            <Link href="#dashboard">
            Explore
            </Link>
          </Button>
        </div>
        <Image 
        src="/assets/Mecon logo.svg"
        alt="hero"
        width={500}
        height={500}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        />
      </div>
    </section>

    <section id="dasboard" className="wrapper flex flex-col my-8 gap-8 md:gap-12">
      <h2 className="h2-bold">Trusted by <br /> Thousands of people</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search
        Departments
      </div>
    </section>
    </>
  );
}
