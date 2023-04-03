import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "@/ui/Code";
import { nodejs, python, go } from "../helpers/code-docs";

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
        <Code show animated languange="javascript" code={nodejs} />
      </TabsContent>
      <TabsContent value="python">
        <Code show animated languange="python" code={python} />
      </TabsContent>
      <TabsContent value="go">
        <Code show animated languange="go" code={go} />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
