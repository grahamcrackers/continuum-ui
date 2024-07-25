import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 14V9a1 1 0 0 0-1-1l-12.332.008-3.3-3.4A2 2 0 0 0 11.929 4H4a2 2 0 0 0-2 2v23a1 1 0 0 0 1 1h26.307a1 1 0 0 0 .936-.649l5.25-14A1 1 0 0 0 34.557 14ZM4 6h7.929l3.305 3.4.59.607h.845L28 10v4H8.693a1 1 0 0 0-.936.649L4 24.667Z" />
            </svg>
        );
    },
);
