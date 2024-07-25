import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const CornerTriangle200Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 6 6"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M5.719.37a.28.28 0 0 0-.2.082L.452 5.519a.281.281 0 0 0 .2.481h5.067A.28.28 0 0 0 6 5.719V.652A.28.28 0 0 0 5.72.37z" />
            </svg>
        );
    },
);
