import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OpenRecentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.423 33.443a15.881 15.881 0 0 1 25.663-9.7l1.168-3.506A1.7 1.7 0 0 0 45.641 18H40v-6a2 2 0 0 0-2-2H23.266l-4.844-4.832A4 4 0 0 0 15.6 4H6a4 4 0 0 0-4 4v32a2 2 0 0 0 2 2h17.347a15.779 15.779 0 0 1-.924-8.557Zm-8.879-14.075L6 36V8h9.6l6.015 6H36v4H13.441a2 2 0 0 0-1.897 1.368Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm0 20.8a8.887 8.887 0 0 1-1.5-17.649v9.37l3.688 3.688a.5.5 0 0 0 .708 0L40.31 38.9a.5.5 0 0 0 0-.707l-2.81-2.814v-8.128A8.887 8.887 0 0 1 36 44.9Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm0 20.8a8.887 8.887 0 0 1-1.5-17.649v9.37l3.688 3.688a.5.5 0 0 0 .708 0L40.31 38.9a.5.5 0 0 0 0-.707l-2.81-2.814v-8.128A8.887 8.887 0 0 1 36 44.9Z" />
            </svg>
        );
    },
);
