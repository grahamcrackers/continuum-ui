import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M32.674 20H30.78a1.215 1.215 0 0 0-1.162.938 11.447 11.447 0 0 1-19.116 5.074l-.692-.693 3.955-3.955a.785.785 0 0 0 .235-.56.803.803 0 0 0-.754-.804H2.496a.5.5 0 0 0-.496.496v10.75a.803.803 0 0 0 .804.754.784.784 0 0 0 .56-.236l3.617-3.617.356.357a16.17 16.17 0 0 0 7.284 4.331A15.43 15.43 0 0 0 33.665 21.17a.996.996 0 0 0-.991-1.17ZM33.196 4a.784.784 0 0 0-.56.236l-3.617 3.617-.356-.357a16.17 16.17 0 0 0-7.284-4.331A15.43 15.43 0 0 0 2.335 14.83.996.996 0 0 0 3.326 16H5.22a1.216 1.216 0 0 0 1.162-.938 11.447 11.447 0 0 1 19.116-5.074l.692.693-3.955 3.955a.786.786 0 0 0-.235.56.804.804 0 0 0 .754.804h10.75a.5.5 0 0 0 .496-.496V4.754A.803.803 0 0 0 33.196 4Z" />
            </svg>
        );
    },
);
