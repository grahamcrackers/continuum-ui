import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageCheckedOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M33 4H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h12.55c-.028-.33-.05-.662-.05-1a11.452 11.452 0 0 1 3.205-7.952l-5.433-5.433a2 2 0 0 0-2.828 0L4 20.06V6h28v10.298a10.452 10.452 0 0 1 2 1.102V5a1 1 0 0 0-1-1Zm-6.3 4.6a2.7 2.7 0 1 0 2.7 2.7 2.7 2.7 0 0 0-2.7-2.7Z" />
                <path d="M27 18a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm5 10.814a.5.5 0 0 1-.854.354L29.05 27.07l-4.636 4.636a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 0-.707l4.636-4.636-2.097-2.096a.5.5 0 0 1 .354-.854h6.527a.287.287 0 0 1 .287.287Z" />
            </svg>
        );
    },
);
