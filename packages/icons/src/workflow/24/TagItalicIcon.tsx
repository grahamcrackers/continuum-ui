import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TagItalicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.574 41.527c-.052.272-.1.382-.36.382h-5.226c-.255 0-.357-.055-.307-.437l5.738-35.048c.053-.273.2-.326.36-.326h5.278c.308 0 .358.162.358.435Z" />
            </svg>
        );
    },
);
