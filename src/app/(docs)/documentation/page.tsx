import type { Metadata } from "next";

import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";
import { FC } from "react";
import DocumentationTabs from "@/components/DocumentationTabs";

import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "Similarity API | Documentation",
  description: "Free & open-source text similarity API",
};

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto pt-32">
      <div className="flex flex-col items-center gap-6">
        <Heading>Making a request.</Heading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
