import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StraightenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 22a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4V22ZM46 22h-4v18h4a2 2 0 0 0 2-2V24a2 2 0 0 0-2-2ZM24 28c4.057 0 7.4-2.641 7.753-6H16.247c.358 3.359 3.696 6 7.753 6Z" />
                <path d="M36.1 22c0 5.523-5.473 10.2-12.1 10.2S11.9 27.523 11.9 22H10v18h28V22Z" />
                <circle cx="8" cy="16" r="2.2" />
                <circle cx="40" cy="16" r="2.2" />
                <circle cx="24" cy="8" r="2.2" />
                <circle cx="15" cy="10" r="2.2" />
                <circle cx="33" cy="10" r="2.2" />
            </svg>
        );
    },
);
