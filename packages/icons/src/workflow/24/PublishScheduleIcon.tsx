import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PublishScheduleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44.194 4.424 2 17a1.065 1.065 0 0 0-.191 1.978l9.669 4.834ZM20.312 33.627 12.066 29v10.185a.95.95 0 0 0 1.564.725l6.57-5.531c.025-.254.072-.502.112-.752ZM36 20.2a15.863 15.863 0 0 1 4.125.56l7.33-14.669-31.377 19.951 5.74 2.895A15.887 15.887 0 0 1 36 20.2Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm0 20.1a8.185 8.185 0 0 1-2-16.126v8.274a1 1 0 0 0 .293.707l3.42 3.42a1 1 0 0 0 1.414 0l1.336-1.336a1 1 0 0 0 0-1.414l-2.17-2.17a1 1 0 0 1-.293-.706v-6.775A8.185 8.185 0 0 1 36 44.2Z" />
            </svg>
        );
    },
);
