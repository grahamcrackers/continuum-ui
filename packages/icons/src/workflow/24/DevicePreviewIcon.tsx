import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DevicePreviewIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 8H6a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h36a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4Zm-2 28H6V12h34Zm3-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                <path d="M27.619 17.421A10.461 10.461 0 0 0 23 16.273c-6.051 0-11 6.024-11 7.979 0 2.093 5.209 7.475 10.955 7.475 5.794 0 11.045-5.382 11.045-7.475 0-1.652-2.943-5.127-6.381-6.831ZM23 30.443A6.443 6.443 0 1 1 29.443 24 6.443 6.443 0 0 1 23 30.443Z" />
                <path d="M24.862 24.058A1.862 1.862 0 0 1 23 22.2a1.836 1.836 0 0 1 .943-1.585 3.423 3.423 0 0 0-.943-.151A3.536 3.536 0 1 0 26.536 24a3.29 3.29 0 0 0-.122-.835 1.833 1.833 0 0 1-1.552.893Z" />
            </svg>
        );
    },
);
