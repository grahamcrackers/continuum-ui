import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DragHandleIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <circle cx="18.667" cy="34.667" r="2.667" />
                <circle cx="18.667" cy="26.667" r="2.667" />
                <circle cx="18.667" cy="18.667" r="2.667" />
                <circle cx="18.667" cy="10.667" r="2.667" />
                <circle cx="26.667" cy="34.667" r="2.667" />
                <circle cx="26.667" cy="26.667" r="2.667" />
                <circle cx="26.667" cy="18.667" r="2.667" />
                <circle cx="26.667" cy="10.667" r="2.667" />
            </svg>
        );
    },
);
