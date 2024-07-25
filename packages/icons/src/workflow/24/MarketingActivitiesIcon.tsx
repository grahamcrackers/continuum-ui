import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MarketingActivitiesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m16.646 22.375 3.716 2.66a6.387 6.387 0 0 1 1.181-1.613l-3.772-2.7a6.406 6.406 0 0 1-1.125 1.653Zm14.405 1.741a6.35 6.35 0 0 1 .958 1.757l3.116-1.773a6.362 6.362 0 0 1-1.051-1.7Zm2.075-12.323a6.452 6.452 0 0 1-1.421 1.407l3.031 3.174a6.424 6.424 0 0 1 1.395-1.437ZM12.551 35.51a6.407 6.407 0 0 1 1.149 1.638l7.51-4.948a6.424 6.424 0 0 1-1.089-1.679Zm4.193-21.767a6.394 6.394 0 0 1 1.1 1.672l5.348-3.235a6.407 6.407 0 0 1-1.085-1.68ZM8 44.4a4.4 4.4 0 1 1 4.4-4.4A4.4 4.4 0 0 1 8 44.4ZM30.4 28a4.4 4.4 0 1 0-4.4 4.4 4.4 4.4 0 0 0 4.4-4.4Zm14-8a4.4 4.4 0 1 0-4.4 4.4 4.4 4.4 0 0 0 4.4-4.4Zm-12-12a4.4 4.4 0 1 0-4.4 4.4A4.4 4.4 0 0 0 32.4 8Zm-16 10a4.4 4.4 0 1 0-4.4 4.4 4.4 4.4 0 0 0 4.4-4.4Z" />
            </svg>
        );
    },
);
