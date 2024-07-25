import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeleteOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43 8h-9V6a4 4 0 0 0-4-4H18a4 4 0 0 0-4 4v2H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.2l2 30a2 2 0 0 0 2 2h27.6a2 2 0 0 0 2-2l2-30H43a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM18 6h12v2H18Zm18 34H12l-2-28h28Z" />
                <path d="M24 36a2 2 0 0 1-2-2V18a2 2 0 0 1 4 0v16a2 2 0 0 1-2 2ZM17.065 36.016a2 2 0 0 1-1.994-1.868L14 18.133a2 2 0 0 1 4-.266l1.066 16.016a2 2 0 0 1-1.866 2.129c-.045.002-.09.004-.135.004ZM30.928 36.045h-.134a2 2 0 0 1-1.864-2.129L30 17.848a2 2 0 1 1 3.992.265l-1.069 16.065a2 2 0 0 1-1.995 1.867Z" />
            </svg>
        );
    },
);
