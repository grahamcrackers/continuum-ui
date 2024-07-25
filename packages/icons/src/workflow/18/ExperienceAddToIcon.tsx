import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExperienceAddToIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 26h-8v-4h8v-2h-8v-4h16v2h4V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h19ZM4 6h24v8H4Zm6 20H4V16h6Z" />
                <path d="m35.394 29.051-3.837-3.837 4.3-4.363A.5.5 0 0 0 35.5 20H22v13.494a.5.5 0 0 0 .854.358l4.33-4.265 3.837 3.837a1 1 0 0 0 1.414 0l2.96-2.959a1 1 0 0 0-.001-1.414Z" />
            </svg>
        );
    },
);
