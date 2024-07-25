import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetsDownloadedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 34a18.064 18.064 0 0 1 .118-2H6V8h36v9.9a18.037 18.037 0 0 1 4 2.722V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h12.117A18.064 18.064 0 0 1 16 34Z" />
                <path d="M34 20a14 14 0 1 0 14 14 14 14 0 0 0-14-14Zm7.364 16.464-5.9 5.9a2.15 2.15 0 0 1-2.929 0l-5.9-5.9a2 2 0 0 1 2.828-2.828L32 36.171V25a2 2 0 0 1 4 0v11.172l2.536-2.536a2 2 0 1 1 2.828 2.828Z" />
            </svg>
        );
    },
);
