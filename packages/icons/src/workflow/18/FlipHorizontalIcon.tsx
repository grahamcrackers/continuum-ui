import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlipHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 2h2v2h-2zM16 6h2v2h-2zM16 10h2v2h-2zM16 14h2v2h-2zM16 18h2v2h-2zM16 22h2v2h-2zM16 26h2v2h-2zM16 30h2v2h-2zM30.276 28.7 20.2 17.8a1.01 1.01 0 0 1 0-1.428L30.276 5.3A1.01 1.01 0 0 1 32 6.012v21.976a1.01 1.01 0 0 1-1.724.712ZM3.845 8.079l8.168 8.843L3.845 25.9ZM3.044 5a1.009 1.009 0 0 0-1.017 1.012v21.976A1.009 1.009 0 0 0 3.045 29a.987.987 0 0 0 .706-.3l10.072-11.067a1.01 1.01 0 0 0 0-1.428L3.751 5.3a.989.989 0 0 0-.707-.3Z" />
            </svg>
        );
    },
);
