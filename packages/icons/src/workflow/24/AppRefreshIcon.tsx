import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AppRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.96 36A9.186 9.186 0 0 1 34 44.58a8.181 8.181 0 0 1-6.222-2.69L31.66 38H22v9.68l3.475-3.482A11.64 11.64 0 0 0 34 48c6.38 0 11.58-5.3 12-12ZM42.566 27.846A11.565 11.565 0 0 0 34 24c-6.38 0-11.58 5.3-12 12h3.04A9.186 9.186 0 0 1 34 27.42a8.765 8.765 0 0 1 6.32 2.72L36.54 34H46v-9.66ZM19.941 13.273c-.416 1.886-1.564 5.137-2.285 7.383h4.656c-.554-1.883-1.789-5.383-2.343-7.383Z" />
                <path d="M19 36a14.944 14.944 0 0 1 4.65-10.84L23.233 24H16.8l-1.246 3.745a.3.3 0 0 1-.333.25h-3.328c-.222 0-.277-.106-.222-.3 1.47-4.16 3.828-10.981 5.575-15.781a4.937 4.937 0 0 0 .277-1.72.175.175 0 0 1 .2-.194h4.465a.208.208 0 0 1 .222.139c1.45 3.993 3 8.384 4.517 12.634A14.975 14.975 0 0 1 40 22.256V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h11.556A14.976 14.976 0 0 1 19 36Z" />
            </svg>
        );
    },
);
