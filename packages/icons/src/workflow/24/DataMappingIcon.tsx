import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataMappingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.667 22.667a4.662 4.662 0 0 0-3.922 2.138l-5.748-1.027a8.99 8.99 0 0 0-3.869-7.174l2.83-6.605L32 10a4.67 4.67 0 1 0-3.35-1.42l-2.83 6.604a9.023 9.023 0 0 0-6.782 1.307L8.985 6.438a4.666 4.666 0 1 0-2.547 2.546L16.49 19.038a9.006 9.006 0 0 0-.419 9.226l-5.917 4.93a4.66 4.66 0 1 0 2.306 2.766l5.917-4.932a9.012 9.012 0 0 0 8.026 1.647l4.473 7.27A4.666 4.666 0 1 0 34.667 38a4.7 4.7 0 0 0-.724.056l-4.324-7.026a9.023 9.023 0 0 0 2.747-3.707l5.746 1.026a4.667 4.667 0 1 0 4.555-5.682ZM32 2.75a2.5 2.5 0 1 1-2.5 2.5 2.5 2.5 0 0 1 2.5-2.5ZM4.625 7.125a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5ZM8 39.75a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Zm26.65.25a2.5 2.5 0 1 1-2.5 2.5 2.5 2.5 0 0 1 2.5-2.5Zm8.1-10.25a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z" />
            </svg>
        );
    },
);
