import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PageTagIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.957 38H4V14h36v7.958l4 4V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h21.957Z" />
                <path d="M47.614 35.227 34.679 22.293a1 1 0 0 0-.707-.293H23a1 1 0 0 0-1 1v10.972a1 1 0 0 0 .293.707l12.934 12.935a1 1 0 0 0 1.414 0l10.973-10.972a1 1 0 0 0 0-1.415Zm-20.6-5.214a3 3 0 1 1 3-3 3 3 0 0 1-3.001 3Z" />
            </svg>
        );
    },
);
