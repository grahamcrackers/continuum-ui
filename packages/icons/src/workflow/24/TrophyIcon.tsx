import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TrophyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.187 24.784c11.74-3.733 14.584-15.192 15.229-19.258A1.324 1.324 0 0 0 46.1 4h-8.893c.075-1.325.126-2.658.126-4H10.667c0 1.341.051 2.674.126 4H1.9A1.324 1.324 0 0 0 .584 5.526c.645 4.066 3.489 15.525 15.229 19.258 1.721 3.234 3.807 5.583 6.187 6.549V40c-4.191 1.094-8.488 3.8-9.575 8h23.15c-1.087-4.2-5.384-6.906-9.575-8v-8.667c2.38-.966 4.466-3.315 6.187-6.549ZM43.2 8c-1.051 3.623-3.167 8.87-8.882 11.8A57.012 57.012 0 0 0 36.878 8ZM4.8 8h6.322a56.988 56.988 0 0 0 2.56 11.8C7.966 16.868 5.85 11.62 4.8 8Z" />
            </svg>
        );
    },
);
