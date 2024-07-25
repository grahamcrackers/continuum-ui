import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExperienceExportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 28H12v-4h7.6v-2H12v-4h7.6v-2H4V8h26V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1Zm-20 0H4V18h6Z" />
                <path d="M28 14v-3.328a.5.5 0 0 1 .866-.341L36 18l-7.134 7.669a.5.5 0 0 1-.866-.341V22h-5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
            </svg>
        );
    },
);
