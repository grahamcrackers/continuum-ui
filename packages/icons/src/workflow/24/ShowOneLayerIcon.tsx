import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShowOneLayerIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M43.842 35.724 32.8 30.151l11.044-5.533a.5.5 0 0 0 0-.894l-11.087-5.553 11.085-5.553a.5.5 0 0 0 0-.894L24.448 2.008a1 1 0 0 0-.9 0l-19.39 9.716a.5.5 0 0 0 0 .894l11.085 5.553-11.085 5.553a.5.5 0 0 0 0 .894l11.031 5.526-11.031 5.58a.5.5 0 0 0 0 .894l19.394 9.716a1 1 0 0 0 .9 0l19.394-9.716a.5.5 0 0 0-.004-.894Zm-24.58-19.566L11.3 12.171 24 5.81l12.7 6.361-7.959 3.987-4.29-2.15a1 1 0 0 0-.9 0l-4.29 2.15ZM24 42.532l-12.7-6.361 7.907-4.012 4.342 2.175a1 1 0 0 0 .9 0l4.328-2.169 7.923 4.006Z" />
            </svg>
        );
    },
);
