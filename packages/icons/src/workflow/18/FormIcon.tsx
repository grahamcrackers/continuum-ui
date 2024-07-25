import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FormIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="2" rx=".354" ry=".354" width="32" x="2" y="6" />
                <rect height="2" rx=".354" ry=".354" width="32" x="2" y="14" />
                <path d="M32 24v6H4v-6Zm1.5-2h-31a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h31a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
