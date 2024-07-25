import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GenderFemaleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="18" cy="3.685" r="3.685" />
                <path d="m12.861 13.247.518 6.039-4.108 7.068a.558.558 0 0 0 .537.712h4.215l1.654 8.485a.555.555 0 0 0 .545.449h3.557a.555.555 0 0 0 .545-.449l1.654-8.485h4.215a.558.558 0 0 0 .537-.712l-4.07-7.068.487-6.056a3.873 3.873 0 0 0-1.829-3.745A3.933 3.933 0 0 0 19.421 9h-2.842a3.934 3.934 0 0 0-1.89.482 3.87 3.87 0 0 0-1.828 3.765Z" />
            </svg>
        );
    },
);
