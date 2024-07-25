import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31.5 6H24V4a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v2H2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2l2.413 25.1a1 1 0 0 0 1 .9h18.179a1 1 0 0 0 1-.9L29.5 8h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM11.065 29A1 1 0 0 1 10 28.068l-1.071-16a1 1 0 1 1 2-.134l1.071 16A1 1 0 0 1 11.065 29ZM18 28a1 1 0 0 1-2 0V12a1 1 0 0 1 2 0Zm4-22H12V4h10Zm2 22.068a1 1 0 1 1-2-.134l1.071-16a1 1 0 1 1 2 .134Z" />
            </svg>
        );
    },
);
