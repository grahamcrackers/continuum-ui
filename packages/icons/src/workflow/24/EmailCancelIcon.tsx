import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailCancelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.685 24.755a.54.54 0 0 0 .633 0L48 7.387V6a2.1 2.1 0 0 0-2.182-2H2.182A2.1 2.1 0 0 0 0 6v1.387ZM13.172 21.819 0 12.161v16.928l13.172-7.27zM20 36a15.909 15.909 0 0 1 2.079-7.869 4.4 4.4 0 0 1-.934-.464L16.56 24.3 0 33.437V36a2.1 2.1 0 0 0 2.182 2h17.956A16.091 16.091 0 0 1 20 36ZM48 25.441v-13.28l-10.773 7.9A15.941 15.941 0 0 1 48 25.441ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8.132 17.2a.5.5 0 0 1 0 .707l-2.122 2.125a.5.5 0 0 1-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 0 1-.707 0l-2.128-2.122a.5.5 0 0 1 0-.707l5.3-5.3-5.3-5.3a.5.5 0 0 1 0-.707l2.122-2.121a.5.5 0 0 1 .707 0l5.3 5.3 5.3-5.3a.5.5 0 0 1 .707 0l2.122 2.121a.5.5 0 0 1 0 .707l-5.3 5.3Z" />
            </svg>
        );
    },
);
