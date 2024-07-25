import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShieldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 4H10a2 2 0 0 0-2 2v16.592a20.5 20.5 0 0 0 7.81 16.071l6.771 5.358a2.286 2.286 0 0 0 2.837 0l6.771-5.358A20.5 20.5 0 0 0 40 22.592V6a2 2 0 0 0-2-2ZM12 8h24L14 30a19.884 19.884 0 0 1-2-8Z" />
            </svg>
        );
    },
);
