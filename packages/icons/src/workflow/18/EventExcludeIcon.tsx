import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EventExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20 27a6.935 6.935 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20 27Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777ZM18.7 17.944l-9.842-9.8A.488.488 0 0 0 8.5 8a.5.5 0 0 0-.5.5v22.782a.5.5 0 0 0 .5.5.489.489 0 0 0 .35-.148L14 24.656l.928.007a12.263 12.263 0 0 1 3.772-6.719Z" />
                <path d="M4 4h16v12.892a12.234 12.234 0 0 1 4-1.808V0H0v24h6v-4H4Z" />
            </svg>
        );
    },
);
