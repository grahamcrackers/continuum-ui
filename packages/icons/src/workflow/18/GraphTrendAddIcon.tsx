import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphTrendAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m20.063 16.846.894-2.459.76 1.518a11.922 11.922 0 0 1 7.127-1.052l5.066-7.237A.5.5 0 0 0 34 7.33V2.352a.5.5 0 0 0-.906-.291l-8.141 11.375-4.058-8.115a.5.5 0 0 0-.917.053l-5.45 14.992-4.081-4.082a.5.5 0 0 0-.674-.031L2.18 22.579a.5.5 0 0 0-.18.384v4.188a.5.5 0 0 0 .829.377l7.048-6.157 4.861 4.861a12.281 12.281 0 0 1 5.325-9.386Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
