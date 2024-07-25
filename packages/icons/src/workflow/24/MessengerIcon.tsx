import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MessengerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 3.08c-11.429 0-20.693 8.779-20.693 19.608a19.039 19.039 0 0 0 6.2 13.973v10.045l8.867-5.144A21.8 21.8 0 0 0 24 42.3c11.429 0 20.694-8.779 20.694-19.608S35.429 3.08 24 3.08Zm2.177 26.185L20.8 23.748l-9.82 5.471 10.848-11.877 5.424 5.284 9.913-5.378Z" />
            </svg>
        );
    },
);
