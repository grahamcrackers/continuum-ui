import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailNotificationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.317 24.754 48 7.387V6a2.1 2.1 0 0 0-2.182-2H2.182A2.1 2.1 0 0 0 0 6v1.387l23.685 17.367a.539.539 0 0 0 .632 0ZM42.391 22.688A9.786 9.786 0 0 1 48 28.285V12.162l-8.407 6.165a5.377 5.377 0 0 1 2.798 4.361ZM0 12.161v16.928l13.172-7.27L0 12.161zM23.316 33.135V32a10.452 10.452 0 0 1 .586-3.455 4.818 4.818 0 0 1-2.756-.879L16.56 24.3 0 33.437V36a2.1 2.1 0 0 0 2.182 2h20.229c.917-.563.919-1.076.905-4.865ZM44 32c0-3.437-2.063-5.506-6-5.883V23a1.078 1.078 0 0 0-1.143-1h-1.714A1.078 1.078 0 0 0 34 23v3.117c-3.937.377-6 2.446-6 5.883 0 6 0 8-4 10.154V44h8a4 4 0 0 0 8 0h8v-1.846C44 40 44 38 44 32Z" />
            </svg>
        );
    },
);
