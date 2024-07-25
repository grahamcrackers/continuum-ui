import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SeatAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.905 4h-11.81A8.1 8.1 0 0 0 10 12.094V24a2 2 0 0 0 2 2h11.82A15.747 15.747 0 0 1 38 20.324v-8.23A8.1 8.1 0 0 0 29.905 4ZM44 20a1.979 1.979 0 0 0-1.877 1.389A15.916 15.916 0 0 1 48 25.58V24a4 4 0 0 0-4-4ZM12 30a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.344a15.846 15.846 0 0 1 .073-12ZM4 20a4 4 0 0 0-4 4v20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2ZM24.2 36.1a11.9 11.9 0 1 0 11.9-11.9 11.9 11.9 0 0 0-11.9 11.9Zm13.4-8a.5.5 0 0 1 .5.5v5.5h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5.5v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5.5h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h5.5v-5.5a.5.5 0 0 1 .5-.5Z" />
            </svg>
        );
    },
);
