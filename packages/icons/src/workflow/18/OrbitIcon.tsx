import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OrbitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.757 13.871A7.983 7.983 0 0 0 12.7 8.748a25.63 25.63 0 0 0-1.948-.09C5.305 8.658 1.157 10.549.2 14c-1.04 3.769 2.038 8.372 7.356 11.946l-2.847 3.415a.381.381 0 0 0 .291.625h12.9l-5.81-8.716a.382.382 0 0 0-.61-.033L9.511 23.6c-4.5-2.942-7-6.5-6.371-8.787.522-1.888 3.512-3.108 7.617-3.108.411 0 .842.036 1.266.061 0 .08-.023.154-.023.234a7.985 7.985 0 0 0 14.477 4.664c4.4 2.921 6.809 6.428 6.182 8.69-.521 1.888-3.511 3.108-7.614 3.108a20.33 20.33 0 0 1-1.74-.082.761.761 0 0 0-.835.751v1.532a.772.772 0 0 0 .706.767c.637.05 1.262.079 1.869.079 5.45 0 9.6-1.891 10.552-5.342 1.076-3.888-2.209-8.678-7.84-12.296Z" />
            </svg>
        );
    },
);
