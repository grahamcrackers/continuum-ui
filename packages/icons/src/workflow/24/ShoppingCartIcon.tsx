import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShoppingCartIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M17.56 42a4 4 0 1 1-4-4 4 4 0 0 1 4 4ZM37.56 42a4 4 0 1 1-4-4 4 4 0 0 1 4 4ZM39.56 32H14.483l.922-4H39.56a2 2 0 0 0 1.961-1.608l4.44-18A2 2 0 0 0 44 6H11.78l-.41-2.294A2 2 0 0 0 9.392 2H4a2 2 0 0 0 0 4h3.667l3.893 19.9-1.941 7.614A2 2 0 0 0 11.56 36h28a2 2 0 0 0 0-4Zm2-22-3.641 14h-22.6l-2.692-14Z" />
            </svg>
        );
    },
);
