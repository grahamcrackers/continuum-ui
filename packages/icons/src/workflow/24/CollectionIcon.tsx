import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CollectionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 6H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h42a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM14 38H4V26h10Zm0-16H4V10h10Zm14 16H18V26h10Zm0-16H18V10h10Zm14 16H32V26h10Zm0-16H32V10h10Z" />
            </svg>
        );
    },
);
