import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetsAddedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34 20.05A13.95 13.95 0 1 0 47.95 34 13.95 13.95 0 0 0 34 20.05ZM41 36h-5v5a2 2 0 1 1-4 0v-5h-5a2 2 0 1 1 0-4h5v-5a2 2 0 0 1 4 0v5h5a2 2 0 1 1 0 4Z" />
            </svg>
        );
    },
);
