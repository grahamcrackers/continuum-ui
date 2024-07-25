import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CompassIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 26h2a1.894 1.894 0 0 0 .2-.04 19.743 19.743 0 0 0 2.248 7.379l2.492-3.69A16.064 16.064 0 0 1 29.577 8.913l3.7-2.5A19.749 19.749 0 0 0 25.96 4.2 1.894 1.894 0 0 0 26 4V2a2 2 0 0 0-4 0v2a1.894 1.894 0 0 0 .04.2A19.9 19.9 0 0 0 4.2 22.04 1.894 1.894 0 0 0 4 22H2a2 2 0 0 0 0 4ZM46 22h-2a1.894 1.894 0 0 0-.2.04 19.76 19.76 0 0 0-2.215-7.317l-2.5 3.7a16.064 16.064 0 0 1-20.733 20.638l-3.691 2.492A19.749 19.749 0 0 0 22.04 43.8a1.894 1.894 0 0 0-.04.2v2a2 2 0 0 0 4 0v-2a1.894 1.894 0 0 0-.04-.2A19.9 19.9 0 0 0 43.8 25.96a1.894 1.894 0 0 0 .2.04h2a2 2 0 0 0 0-4ZM19.609 20.994 4.23 43.77l22.776-15.379a6.009 6.009 0 0 0 1.615-1.615L44 4 21.224 19.379a6.009 6.009 0 0 0-1.615 1.615Zm4.4 6.63a3.635 3.635 0 1 1 3.634-3.635 3.634 3.634 0 0 1-3.632 3.635Z" />
            </svg>
        );
    },
);
