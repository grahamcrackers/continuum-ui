import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MultipleExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 10v10.2h.1a15.868 15.868 0 0 1 5.313.91A2.493 2.493 0 0 0 42 19.5v-15A2.5 2.5 0 0 0 39.5 2h-15A2.5 2.5 0 0 0 22 4.5V8h12a2 2 0 0 1 2 2ZM20.2 36.1a15.828 15.828 0 0 1 1.8-7.353V24.5a2.5 2.5 0 0 0-2.5-2.5h-15A2.5 2.5 0 0 0 2 24.5v15A2.5 2.5 0 0 0 4.5 42h15a2.491 2.491 0 0 0 1.61-.588 15.866 15.866 0 0 1-.91-5.312Z" />
                <path d="M26 20v3.819a15.858 15.858 0 0 1 6-3.085V14.5a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5V18h12a2 2 0 0 1 2 2ZM36.1 24.2A11.9 11.9 0 1 0 48 36.1a11.9 11.9 0 0 0-11.9-11.9Zm8.925 11.9a8.858 8.858 0 0 1-1.663 5.158l-12.42-12.42A8.9 8.9 0 0 1 45.025 36.1Zm-17.85 0a8.858 8.858 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.175 36.1Z" />
            </svg>
        );
    },
);
