import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RSSIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="10.154" cy="37.846" r="6.154" />
                <path d="M29.3 44h-3.975a1.9 1.9 0 0 1-2.025-1.668A19.572 19.572 0 0 0 5.724 24.7a1.971 1.971 0 0 1-1.757-2v-4a2.06 2.06 0 0 1 2.25-2A27.434 27.434 0 0 1 31.3 41.8a2.023 2.023 0 0 1-2 2.2Z" />
                <path d="M43.941 44.091h-3.954a2.021 2.021 0 0 1-2.044-1.942A34.188 34.188 0 0 0 5.9 10.056a2.021 2.021 0 0 1-1.941-2.019V4.059A2.032 2.032 0 0 1 6.06 2.05a42.06 42.06 0 0 1 39.89 39.89 2.075 2.075 0 0 1-2.009 2.151Z" />
            </svg>
        );
    },
);
