import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const TripleGripperIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 10"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M12.625 1.25H1.375a.625.625 0 0 1 0-1.25h11.25a.625.625 0 0 1 0 1.25m.625 3.125a.626.626 0 0 0-.625-.625H1.375a.625.625 0 0 0 0 1.25h11.25a.626.626 0 0 0 .625-.625m0 3.75a.626.626 0 0 0-.625-.625H1.375a.625.625 0 0 0 0 1.25h11.25a.626.626 0 0 0 .625-.625" />
            </svg>
        );
    },
);
