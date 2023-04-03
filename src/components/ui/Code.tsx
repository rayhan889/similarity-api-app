import { FC, useState, useEffect } from "react";
import { defaultProps, type Language } from "prism-react-renderer";
import { useTheme } from "next-themes";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import Highlight from "prism-react-renderer";

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
  const { theme: applicationTheme } = useTheme();
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

  const lines = text.split(/\r\n|\r|\n/).length;
  console.log("lines :" + lines);

  const theme = applicationTheme === "light" ? lightTheme : darkTheme;

  return (
    <Highlight {...defaultProps} theme={theme} code={text} language={languange}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className + "transition-all w-fit bg-transparent duration-100 py-0 "
          }
          style={{
            maxHeight: show ? lines * 24 : 0,
            opacity: show ? 1 : 0,
          }}
        >
          {tokens.map((line, i) => {
            // eslint-disable-next-line no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: i });

            return (
              <div key={`line-${i}`} style={{ position: "relative" }}>
                {line.map((token, index) => {
                  // eslint-disable-next-line no-unused-vars
                  const { key, ...props } = getTokenProps({ token, i });

                  return <span key={index} {...props}></span>;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
