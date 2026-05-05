import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import production from "react/jsx-runtime";
import rehypeReact from "rehype-react";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default function Markdown({
  source,
  className = "",
  components,
}: {
  source: string;
  className?: string;
  components?: Record<string, React.ComponentType<any>>;
}) {
  const [content, setContent] = useState(<>loading</>);

  useEffect(() => {
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkBreaks)
      .use(remarkRehype)
      .use(rehypeReact, { ...production, components });
    processor.process(source).then((data: any) => {
      setContent(data.result);
    });
  }, [source, components]);

  return (
    <div className={cn(className, "prose prose-neutral dark:prose-invert cursor-text text-sm select-text")}>
      {content}
    </div>
  );
}
