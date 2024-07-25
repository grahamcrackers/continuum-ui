import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageAutoModeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31.088 25.109a2.891 2.891 0 1 1-2.891-2.89 2.891 2.891 0 0 1 2.891 2.89ZM42.942 15.38a3.5 3.5 0 0 0-2.925 1.787l-2.1 3.745-.155-4.29a3.5 3.5 0 0 0-1.785-2.922l-3.745-2.1 4.29-.156a3.5 3.5 0 0 0 2.925-1.786l2.1-3.745.153 4.287a3.5 3.5 0 0 0 1.787 2.925l3.745 2.1ZM24.028 5.322 27.46 5.2a2.8 2.8 0 0 0 2.34-1.431l1.679-3 .121 3.436a2.8 2.8 0 0 0 1.429 2.34l3 1.678-3.429.125a2.8 2.8 0 0 0-2.34 1.428l-1.679 3-.124-3.432A2.8 2.8 0 0 0 27.024 7Z" />
                <path d="M37.809 25.78a1 1 0 0 1-1.745-.4L36 25.124v13.3l-5.862-5.864a2.037 2.037 0 0 0-2.88 0l-3.126 3.127-7.693-7.693a2.036 2.036 0 0 0-2.879 0l-7.011 7.011c-.278-.1-.494-.162-.549-.1V18h28.25l-.265-1.079L28.771 14H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h34a2 2 0 0 0 2-2V23.108Z" />
            </svg>
        );
    },
);
