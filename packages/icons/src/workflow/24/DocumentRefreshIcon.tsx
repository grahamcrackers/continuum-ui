import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DocumentRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M26 0v10h10L26 0zM45.231 36h-1.056a1.012 1.012 0 0 0-.984.863 9.134 9.134 0 0 1-8.846 7.717 8.15 8.15 0 0 1-5.66-2.135l3.079-3.08a.784.784 0 0 0 .236-.56.803.803 0 0 0-.801-.805H22.5a.5.5 0 0 0-.5.5v8.698a.801.801 0 0 0 .806.802.784.784 0 0 0 .56-.236l3.009-3.008A11.568 11.568 0 0 0 34.345 48c6.024 0 10.995-4.725 11.885-10.891a.995.995 0 0 0-.999-1.11ZM23.459 36h1.056a1.012 1.012 0 0 0 .984-.864 9.134 9.134 0 0 1 8.846-7.716 8.692 8.692 0 0 1 5.297 1.808l-3.406 3.406a.784.784 0 0 0-.236.56.803.803 0 0 0 .801.806H45.5a.5.5 0 0 0 .5-.5v-8.698a.801.801 0 0 0-.806-.802.784.784 0 0 0-.56.236l-2.676 2.676A11.457 11.457 0 0 0 34.345 24c-6.023 0-10.995 4.724-11.886 10.89a.995.995 0 0 0 1 1.11Z" />
                <path d="M18 36a15.906 15.906 0 0 1 18-15.862V14H24a2 2 0 0 1-2-2V0H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12.524A15.974 15.974 0 0 1 18 36Z" />
            </svg>
        );
    },
);
