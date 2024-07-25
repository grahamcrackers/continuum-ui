import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphTrendIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m33.093 6.061-8.14 11.374L20.9 9.321a.5.5 0 0 0-.917.053l-5.45 14.992-4.081-4.081a.5.5 0 0 0-.674-.031L2.18 26.579a.5.5 0 0 0-.18.384v4.188a.5.5 0 0 0 .829.376l7.048-6.157 5.708 5.708a.5.5 0 0 0 .823-.183l4.548-12.51L24 24.481a.5.5 0 0 0 .857.063l9.053-12.928a.5.5 0 0 0 .09-.286V6.352a.5.5 0 0 0-.907-.291Z" />
            </svg>
        );
    },
);
