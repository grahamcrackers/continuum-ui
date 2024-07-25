import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CollectionAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.1 33.9A11.9 11.9 0 1 0 36 22a11.9 11.9 0 0 0-11.9 11.9Zm3.9-1.5a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v5.5h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5.5h-5.5a.5.5 0 0 1-.5-.5Z" />
                <path d="M20.627 38H18V26h4.275a15.959 15.959 0 0 1 3.315-4H18V10h10v10.275a15.8 15.8 0 0 1 4-1.648V10h10v9.28a15.864 15.864 0 0 1 4 2.365V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h20.275a15.8 15.8 0 0 1-1.648-4ZM14 38H4V26h10Zm0-16H4V10h10Z" />
            </svg>
        );
    },
);
