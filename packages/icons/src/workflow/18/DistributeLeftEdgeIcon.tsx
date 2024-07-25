import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeLeftEdgeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.074 6H6V.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v35a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V30h7.074a.926.926 0 0 0 .926-.926V6.926A.927.927 0 0 0 13.074 6ZM31 10h-7V.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v35a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V26h7a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
