import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DevicePhoneRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 40h-8V8h18v13.4a15.288 15.288 0 0 1 4-1.2V6a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4h8ZM17 4h4a1.04 1.04 0 0 1 1 1 1.04 1.04 0 0 1-1 1h-4a1 1 0 0 1 0-2Z" />
                <path d="M45.231 36h-1.056a1.012 1.012 0 0 0-.984.864 9.134 9.134 0 0 1-8.846 7.716 8.149 8.149 0 0 1-5.66-2.135l3.079-3.079a.783.783 0 0 0 .236-.56.8.8 0 0 0-.8-.806h-8.7a.5.5 0 0 0-.5.5v8.7a.8.8 0 0 0 .806.8.785.785 0 0 0 .56-.236l3.009-3.008A11.566 11.566 0 0 0 34.345 48c6.024 0 11-4.724 11.885-10.891A.994.994 0 0 0 45.231 36ZM23.459 36h1.056a1.012 1.012 0 0 0 .984-.864 9.134 9.134 0 0 1 8.846-7.716 8.692 8.692 0 0 1 5.3 1.808l-3.406 3.407A.781.781 0 0 0 36 33.2a.8.8 0 0 0 .8.8h8.7a.5.5 0 0 0 .5-.5v-8.7a.8.8 0 0 0-.806-.8.785.785 0 0 0-.56.236l-2.676 2.676A11.457 11.457 0 0 0 34.345 24c-6.023 0-10.995 4.724-11.886 10.891a1 1 0 0 0 1 1.109Z" />
            </svg>
        );
    },
);
