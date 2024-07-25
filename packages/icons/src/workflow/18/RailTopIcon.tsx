import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RailTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M1.125 32h33.75A1.147 1.147 0 0 0 36 30.833V5.167A1.147 1.147 0 0 0 34.875 4H1.125A1.147 1.147 0 0 0 0 5.167v25.666A1.147 1.147 0 0 0 1.125 32ZM15.4 8.5a.5.5 0 0 1 .5-.5h17.6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H15.9a.5.5 0 0 1-.5-.5ZM2 12h32v16H2Z" />
            </svg>
        );
    },
);
