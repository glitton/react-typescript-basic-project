import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | AnchorProps) {
  // const {el, ...otherProps} = props
  if (props.el === "anchor") {
    return <a {...props} className='button' target='_blank'></a>;
  }

  return <button {...props} className='button'></button>;
}
