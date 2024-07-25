import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m24.827 2.741 5.5 14.559 15.547.736a1.031 1.031 0 0 1 .6 1.834L34.33 29.605l4.1 15.014a1.031 1.031 0 0 1-1.56 1.133l-13.007-8.543-13.011 8.543a1.031 1.031 0 0 1-1.56-1.133l4.1-15.014L1.251 19.87a1.031 1.031 0 0 1 .6-1.834l15.543-.736L22.9 2.741a1.031 1.031 0 0 1 1.927 0Z" />
            </svg>
        );
    },
);
