import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.314 8.444 24 19.757 12.686 8.444a1 1 0 0 0-1.414 0l-2.828 2.828a1 1 0 0 0 0 1.414L19.757 24 8.444 35.314a1 1 0 0 0 0 1.414l2.828 2.828a1 1 0 0 0 1.414 0L24 28.243l11.314 11.313a1 1 0 0 0 1.414 0l2.828-2.828a1 1 0 0 0 0-1.414L28.243 24l11.313-11.314a1 1 0 0 0 0-1.414l-2.828-2.828a1 1 0 0 0-1.414 0Z" />
            </svg>
        );
    },
);
