import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Image from "next/image";
import LandingImg from "../assets/main.svg";
import Favicon from "./favicon.ico";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="#">
        <header className="max-w-6xl flex mx-auto px-4 sm:px-8 py-6">
          <Image height={40} src={Favicon} className="mr-6" alt="logo" />
          <span className="text-blue-600 -ml-3 text-3xl tracking-wider font-extrabold">
            JobTrail
          </span>
        </header>
      </Link>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-lg mt-6 text-gray-700 font-semibold">
            JobTrail is a comprehensive job tracking app designed to help you
            manage your job search with ease. Keep track of your job
            applications, interview requests, and rejections all in one place.
            Gain insights with monthly stats on the number of applications sent,
            ensuring you stay organized and informed throughout your job hunt.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image
          src={LandingImg}
          alt="landing image"
          className="hidden lg:block"
        />
      </section>
    </main>
  );
}
