import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SeparatorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 4H10a2 2 0 0 0-2 2v12h32V6a2 2 0 0 0-2-2ZM8 42a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V30H8Z" />
                <rect height="4" rx="1" ry="1" width="44" x="2" y="22" />
            </svg>
        );
    },
);
