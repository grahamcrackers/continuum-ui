import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UsersLockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.683 14.13a7.886 7.886 0 0 1 1.843-.118 9.64 9.64 0 0 1 1.98.368 12.619 12.619 0 0 0 .886-4.433c0-4.61-2.88-7.923-7.148-7.518a10.914 10.914 0 0 1 3 8.066 12.623 12.623 0 0 1-.561 3.635ZM14 25.013a3.005 3.005 0 0 1 2.141-2.875 8.929 8.929 0 0 1 4.574-6.981 10.908 10.908 0 0 0 1.134-4.657c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.121 11.121 0 0 0 2.622 6.865 1.439 1.439 0 0 1 .367.93v2.074a1.431 1.431 0 0 1-1.248 1.444C1.307 22.537 0 28.259 0 30.516c0 .25.029 3.237.048 3.484H14Z" />
                <path d="M33 24h-.955v-1.008a7 7 0 0 0-14 0V24H17a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1Zm-6.566 7.422v1.928a.694.694 0 0 1-.694.694h-1.388a.694.694 0 0 1-.694-.694v-1.928a2.082 2.082 0 1 1 2.776 0ZM29.545 24h-9v-1.008a4.5 4.5 0 0 1 9 0Z" />
            </svg>
        );
    },
);
