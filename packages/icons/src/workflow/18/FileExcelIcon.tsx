import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileExcelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2z" />
                <path d="M19 14a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14Zm.488 16.525s-1.389-2.771-1.842-3.688c-.4.923-1 2.22-1.363 3.014l-.311.675H12l3.621-6.333L12.127 18h3.98l.389.808c.393.816.883 1.831 1.27 2.68.361-.885.748-1.715 1.154-2.582l.42-.906h3.977l-3.535 6.124 3.709 6.4Z" />
            </svg>
        );
    },
);
