import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.685 26.755a.54.54 0 0 0 .632 0L48 9.387V8a2.1 2.1 0 0 0-2.182-2H2.182A2.1 2.1 0 0 0 0 8v1.387ZM48 14.162l-13.193 9.675L48 31.092v-16.93z" />
                <path d="m31.419 26.321-4.562 3.346a5.012 5.012 0 0 1-5.712 0L16.56 26.3 0 35.437V38a2.1 2.1 0 0 0 2.182 2h43.636A2.1 2.1 0 0 0 48 38v-2.561ZM13.172 23.819 0 14.161v16.928l13.172-7.27z" />
            </svg>
        );
    },
);
