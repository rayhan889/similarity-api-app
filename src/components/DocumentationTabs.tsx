"use client";

import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "@/ui/Code";
import { nodejs, python, go } from "../helpers/code-docs";
import SimpleBarReact from "simplebar-react";

interface DocumentationTabsProps {}

const DocumentationTabs: FC<DocumentationTabsProps> = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
        <TabsTrigger value="go">Golang</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBarReact>
          <Code show animated languange="javascript" code={nodejs} />
        </SimpleBarReact>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBarReact>
          <Code show animated languange="python" code={python} />
        </SimpleBarReact>
      </TabsContent>
      <TabsContent value="go">
        <SimpleBarReact>
          <Code show animated languange="go" code={go} />
        </SimpleBarReact>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
