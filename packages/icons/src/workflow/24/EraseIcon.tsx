import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EraseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26.851 35.422a2.47 2.47 0 0 0 3.494 0l15.039-15.038a2.472 2.472 0 0 0 0-3.5L32.176 3.681a2.459 2.459 0 0 0-3.518.025c-4.087 4.247-10.883 10.813-15.09 14.916a2.458 2.458 0 0 0-.011 3.506l.193.193-7.65 7.65a3.758 3.758 0 0 0 0 5.315l7.6 7.6A3.788 3.788 0 0 0 16.025 44H44a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H21.889l4.77-4.77Zm-11.17 4.344-7.065-7a.2.2 0 0 1 0-.278l7.651-7.652 7.875 7.874-7.05 7.05a1 1 0 0 1-1.411.006Z" />
            </svg>
        );
    },
);
