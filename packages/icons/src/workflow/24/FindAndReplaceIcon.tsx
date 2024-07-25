import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FindAndReplaceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m47.276 43.3-6.891-10.04a16.017 16.017 0 1 0-27.3-9.977 6.838 6.838 0 0 0 4.257 1.832 12.093 12.093 0 1 1 10.36 8.9 17.314 17.314 0 0 1-1.951 1.168 17.11 17.11 0 0 1-3.5 1.3 15.853 15.853 0 0 0 13.184.175L42.329 46.7a3 3 0 0 0 4.947-3.4Z" />
                <path d="M12.111 6.406a8.732 8.732 0 0 1 7.047-.311A18.589 18.589 0 0 1 22.7 4.363a11.887 11.887 0 0 0-12.127-1.012 11.642 11.642 0 0 0-5.9 7.231L0 9.036l4.355 8.645 8.628-4.346-5.218-1.728a8.183 8.183 0 0 1 4.346-5.201ZM30.826 23.151a13.421 13.421 0 0 1-6.87 8.459c-6.612 3.331-14.769.552-18.7-6.172l3.149-1.588a10.659 10.659 0 0 0 13.765 4.215 10.17 10.17 0 0 0 5.13-6.118l-5.932-2.027 9.8-4.939 5.043 10.012Z" />
            </svg>
        );
    },
);
