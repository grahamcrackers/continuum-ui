import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TrapIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.191 6.809a4.358 4.358 0 0 0-1.147-.727c-2.018-.85-10.257-4.282-14.618-4.829-4.122-.515-7.858 0-9.791 1.932S7.99 10.4 9.794 14.136a75.205 75.205 0 0 0 4.041 6.989L2.662 32.3a2.065 2.065 0 0 0 .105 2.934 2.066 2.066 0 0 0 2.935.106l10.129-10.131a3.7 3.7 0 0 0 2.69.982 8.968 8.968 0 0 0 3.359-.768 26.846 26.846 0 0 0 7.391-5.211 26.708 26.708 0 0 0 5.152-7.332c1.1-2.667 1.016-4.823-.232-6.071Zm-1.615 5.311a21.774 21.774 0 0 1-4.748 6.709 21.774 21.774 0 0 1-6.709 4.748c-1.813.75-3.272.824-3.9.2s-.547-2.078.2-3.9a21.774 21.774 0 0 1 4.748-6.709 21.774 21.774 0 0 1 6.709-4.748 7.133 7.133 0 0 1 2.6-.619 1.8 1.8 0 0 1 1.3.418c.624.625.548 2.081-.2 3.9Z" />
            </svg>
        );
    },
);
