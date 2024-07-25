import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DevicePreviewIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M34 4H2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-4 24H4V8h26Zm3-7.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z" />
                <path d="M20.779 12.617A8.563 8.563 0 0 0 17 11.678c-4.951 0-9 4.929-9 6.528 0 1.713 4.262 6.116 8.964 6.116 4.74 0 9.036-4.4 9.036-6.116 0-1.351-2.408-4.195-5.221-5.589ZM17 23.271A5.271 5.271 0 1 1 22.271 18 5.271 5.271 0 0 1 17 23.271Z" />
                <path d="M18.524 18.048A1.524 1.524 0 0 1 17 16.524a1.5 1.5 0 0 1 .771-1.3 2.811 2.811 0 0 0-.771-.12A2.893 2.893 0 1 0 19.893 18a2.7 2.7 0 0 0-.1-.683 1.5 1.5 0 0 1-1.269.731Z" />
            </svg>
        );
    },
);
