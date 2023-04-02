import { FC, useState, useEffect } from "react";
import { type Language } from "prism-react-renderer";
import { useTheme } from "next-themes";

interface CodeProps {
  code: string;
  show: boolean;
  languange: Language;
  animationDelay?: number;
  animated?: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  languange,
  show,
  animated,
  animationDelay,
}) => {
  const { themes: applicationTheme } = useTheme();
  const [text, setText] = useState<string>(animated ? "" : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          console.log(i);
          setText(code.slice(0, i));
          i++;
          console.log(`code text : ${text}`);
          if (i > code.length) {
            clearInterval(intervalId);
          }

          return () => clearInterval(intervalId);
        }, 15);
      }, animationDelay || 150);
    }
  }, [code, show, animated, animationDelay]);

  return <div>Code</div>;
};

export default Code;
