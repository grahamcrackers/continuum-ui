import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CalendarAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 12h4v4H6zM12 12h4v4h-4zM18 12h4v4h-4zM6 18h4v4H6zM12 18h4v4h-4zM6 24h4v4H6zM14.7 27a12.274 12.274 0 0 1 .384-3H12v4h2.75c-.026-.33-.05-.662-.05-1ZM27 14.7c.338 0 .669.024 1 .05V12h-4v3.084a12.284 12.284 0 0 1 3-.384Z" />
                <path d="M15.769 32H2V8h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h14v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h4v7.769a12.26 12.26 0 0 1 2 1.124V7a1 1 0 0 0-1-1h-5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H10V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h15.893a12.283 12.283 0 0 1-1.124-2Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
