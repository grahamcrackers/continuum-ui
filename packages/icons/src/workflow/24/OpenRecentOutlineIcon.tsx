import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OpenRecentOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.27 38H6l4-20h33.561l-.852 3.406a15.886 15.886 0 0 1 3.4 2.135l1.763-7.056A2 2 0 0 0 45.938 14h-3.377v-2a2 2 0 0 0-2-2h-15.3l-4.839-4.832A4 4 0 0 0 17.6 4H6a4 4 0 0 0-4 4v32a2 2 0 0 0 2 2h17.359a15.769 15.769 0 0 1-1.089-4Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm0 20.8a8.887 8.887 0 0 1-1.5-17.649v9.37l3.688 3.688a.5.5 0 0 0 .708 0L40.31 38.9a.5.5 0 0 0 0-.707l-2.81-2.814v-8.128A8.887 8.887 0 0 1 36 44.9Z" />
            </svg>
        );
    },
);
