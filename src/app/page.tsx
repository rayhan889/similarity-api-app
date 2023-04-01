import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";
import Image from "next/image";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free & open-source text similarity API",
};

export default function Home() {
  return (
    <div className="h-screen relative flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <Heading
            size="lg"
            className="heading-main text-black dark:text-ligth-gold"
          >
            Easily determine <br />
            text similarity.
          </Heading>
          <Paragraph className="max-w-xl lg:text-left">
            With the Text Similarity API, you can easliy determine the
            similarity between two pieces of text with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-ligth-gold"
            >
              API Key
            </Link>
            .
          </Paragraph>

          <div className="relative w-full max-w-lg lg:max-w-3xl aspect-square lg:absolute lg:left-1/2">
            <Image
              quality={100}
              priority
              fill
              className="img-shadow"
              style={{ objectFit: "contain" }}
              src="/typewriter.png"
              alt="Typewriter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
