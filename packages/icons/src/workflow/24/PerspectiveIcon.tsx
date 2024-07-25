import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PerspectiveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 6.322v36.859a2 2 0 0 0 2.661 1.888l36-12.6A2 2 0 0 0 44 30.581V11.722a2 2 0 0 0-1.7-1.977l-36-5.4A2 2 0 0 0 4 6.322Zm36 13-6 .626v-7.403l6 .9ZM22 21.2V10.745l8 1.2v8.424Zm8 3.187v8.271l-8 2.8V25.226ZM18 10.145v11.477L8 22.665V8.645ZM8 26.687l10-1.044v11.219l-10 3.5Zm26 4.575v-7.288l6-.627v5.815Z" />
            </svg>
        );
    },
);
