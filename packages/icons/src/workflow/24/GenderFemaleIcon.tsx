import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GenderFemaleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24" cy="4.913" r="4.913" />
                <path d="m17.053 17.757.7 8.666-5.715 9.7a1.248 1.248 0 0 0 1.335 1.491h5.9l.924 9.342A1.211 1.211 0 0 0 21.4 48h5.18a1.211 1.211 0 0 0 1.206-1.044l.929-9.342h5.906a1.248 1.248 0 0 0 1.335-1.491l-5.715-9.7.708-8.712a5.211 5.211 0 0 0-3.61-5.521 5.4 5.4 0 0 0-1.418-.19h-3.842a5.39 5.39 0 0 0-.733.05 5.243 5.243 0 0 0-4.293 5.707Z" />
            </svg>
        );
    },
);
