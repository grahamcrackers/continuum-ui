import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ProjectAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.1 4.8a2 2 0 0 0-1.6-.8H2a2 2 0 0 0-2 2v4h18ZM20.1 36.1A15.845 15.845 0 0 1 40 20.728V16a2 2 0 0 0-2-2H0v26a2 2 0 0 0 2 2h19.244a15.82 15.82 0 0 1-1.144-5.9ZM10 37a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V19a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm8 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V27a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
