import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarHorizontalAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <rect height="34" rx=".5" ry=".5" width="2" x="2" y="2" />
                <path d="M22.939 12H6v6h12.636A12.25 12.25 0 0 1 24 15.084v-2.023A1.06 1.06 0 0 0 22.939 12ZM33 4H6v6h27a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM10.775 28H6v6h4.775A1.225 1.225 0 0 0 12 32.775v-3.55A1.225 1.225 0 0 0 10.775 28Zm4.106-8H6v6h8.75A12.215 12.215 0 0 1 16 21.52v-.4A1.118 1.118 0 0 0 14.882 20ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
