import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PushNotificationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 .1A11.9 11.9 0 1 0 47.9 12 11.9 11.9 0 0 0 36 .1ZM39.936 20h-8.043c-.148 0-.19-.063-.169-.19v-2.9a.2.2 0 0 1 .232-.19h1.957V7.364A16.235 16.235 0 0 1 31.84 8c-.148.021-.19-.021-.19-.147V5.418c0-.106.021-.169.148-.19a12.152 12.152 0 0 0 2.523-1.123A.778.778 0 0 1 34.68 4h3.2c.106 0 .127.063.127.148L38 16.72h1.888c.148 0 .19.063.212.19v2.858c.025.169-.037.232-.164.232Z" />
                <path d="M20.1 12H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V27.9A15.9 15.9 0 0 1 20.1 12Z" />
            </svg>
        );
    },
);
