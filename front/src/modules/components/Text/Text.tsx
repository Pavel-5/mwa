import * as React from "react";
import parse from "html-react-parser";

interface TextProps {
  tag: String;
  className?: String;
  children: String;
}

export function Text(props: TextProps) {
  let html =
    "<" +
    props.tag +
    ' class="' +
    props.className +
    '">' +
    props.children +
    "</" +
    props.tag +
    ">";

  return <>{parse(html)}</>;
}
