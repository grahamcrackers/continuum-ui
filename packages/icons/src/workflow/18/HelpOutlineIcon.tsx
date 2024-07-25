import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HelpOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M20.181 25.932a1.833 1.833 0 0 1-1.954 2.015 1.862 1.862 0 0 1-1.956-2.015 1.955 1.955 0 1 1 3.91 0ZM17.953 8a9.232 9.232 0 0 0-4.518 1.072c-.119.063-.119.185-.119.307v2.971a.15.15 0 0 0 .238.122 7.385 7.385 0 0 1 3.744-1.01c1.813 0 2.527.766 2.527 1.869 0 .95-.565 1.593-1.545 2.603-1.427 1.472-2.29 2.389-2.29 3.829a3.417 3.417 0 0 0 .714 2.114.488.488 0 0 0 .386.123h2.586a.13.13 0 0 0 .119-.215 3.302 3.302 0 0 1-.476-1.686c0-.917 1.1-1.928 2.26-3.062a5.474 5.474 0 0 0 1.901-4.226c0-2.696-1.96-4.81-5.527-4.81ZM35 18A17 17 0 1 1 18 1a17 17 0 0 1 17 17Zm-3.65 0A13.35 13.35 0 1 0 18 31.35 13.35 13.35 0 0 0 31.35 18Z" />
            </svg>
        );
    },
);
