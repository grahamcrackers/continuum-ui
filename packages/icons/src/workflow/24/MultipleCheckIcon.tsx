import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MultipleCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 10v10.1a15.869 15.869 0 0 1 5.453.96A2.49 2.49 0 0 0 42 19.5v-15A2.5 2.5 0 0 0 39.5 2h-15A2.5 2.5 0 0 0 22 4.5V8h12a2 2 0 0 1 2 2ZM20.1 36a15.827 15.827 0 0 1 1.9-7.543V24.5a2.5 2.5 0 0 0-2.5-2.5h-15A2.5 2.5 0 0 0 2 24.5v15A2.5 2.5 0 0 0 4.5 42h15a2.486 2.486 0 0 0 1.56-.547A15.886 15.886 0 0 1 20.1 36Z" />
                <path d="M26 20v3.639a15.845 15.845 0 0 1 6-3.031V14.5a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5V18h12a2 2 0 0 1 2 2ZM36.1 24.2A11.9 11.9 0 1 0 48 36.1a11.9 11.9 0 0 0-11.9-11.9ZM33.872 44l-6.133-6.133a.5.5 0 0 1 0-.707l1.761-1.765a.5.5 0 0 1 .707 0l3.893 3.892 8.94-8.939a.5.5 0 0 1 .707 0l1.887 1.887a.5.5 0 0 1 0 .707L34.579 44a.5.5 0 0 1-.707 0Z" />
            </svg>
        );
    },
);
