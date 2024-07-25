import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PlatformDataMappingIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M38.597 27.45A6.642 6.642 0 0 0 31.006 32H12v-5.864a.667.667 0 0 0-1.106-.502l-9.13 7.99a.5.5 0 0 0 0 .752l9.13 7.99A.667.667 0 0 0 12 41.864V36h19.006a6.654 6.654 0 1 0 7.591-8.55Zm-31.195-8.9A6.642 6.642 0 0 0 14.994 14H34v5.864a.667.667 0 0 0 1.106.502l9.13-7.99a.5.5 0 0 0 0-.752l-9.13-7.99A.667.667 0 0 0 34 4.136V10H14.994a6.654 6.654 0 1 0-7.592 8.55Z" />
            </svg>
        );
    },
);
