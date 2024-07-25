import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StraightenOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="10" cy="13.8" r="2.2" />
                <circle cx="38" cy="13.8" r="2.2" />
                <circle cx="24" cy="5.8" r="2.2" />
                <circle cx="16" cy="7.8" r="2.2" />
                <circle cx="32" cy="7.8" r="2.2" />
                <path d="M46 20H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2Zm-15.872 4A6.868 6.868 0 0 1 24 28.2a6.868 6.868 0 0 1-6.128-4.2ZM4 36V24h4v12Zm8 0V24h2.2a10 10 0 0 0 19.6 0H36v12Zm32 0h-4V24h4Z" />
            </svg>
        );
    },
);
