import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileCheckedOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 0h.086a1 1 0 0 1 .706.292L27.708 7.2a1 1 0 0 1 .292.714V8h-8ZM27 18a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm5 10.814a.5.5 0 0 1-.854.354L29.05 27.07l-4.636 4.636a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 0-.707l4.636-4.636-2.097-2.096a.5.5 0 0 1 .354-.854h6.527a.287.287 0 0 1 .287.287Z" />
                <path d="M15.75 27A11.25 11.25 0 0 1 27 15.75c.338 0 .67.021 1 .05V10h-9a1 1 0 0 1-1-1V0H5a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h11.933a11.184 11.184 0 0 1-1.183-5Z" />
            </svg>
        );
    },
);
