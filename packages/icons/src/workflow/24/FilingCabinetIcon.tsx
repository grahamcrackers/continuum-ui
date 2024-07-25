import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilingCabinetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 6H10a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h2v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h16v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2 30H12V24h24ZM12 22V10h24v12Z" />
                <path d="M24 14a2.3 2.3 0 1 0 2.3 2.3A2.3 2.3 0 0 0 24 14ZM24 33.35a2.3 2.3 0 1 0-2.3-2.3 2.3 2.3 0 0 0 2.3 2.3Z" />
            </svg>
        );
    },
);
