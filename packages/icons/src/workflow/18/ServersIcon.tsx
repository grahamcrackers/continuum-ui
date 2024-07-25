import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ServersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11 10h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v3H4V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v31a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V30h6v3a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1H4v-8h6v1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v3H4V8h6v1a1 1 0 0 0 1 1Zm1 18h4v2h-4Zm0-12h4v2h-4Zm0-12h4v2h-4Z" />
            </svg>
        );
    },
);
