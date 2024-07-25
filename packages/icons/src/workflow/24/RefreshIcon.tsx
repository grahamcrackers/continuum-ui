import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M39.142 28a1.007 1.007 0 0 0-.944.686 13.981 13.981 0 0 1-22.353 5.883l4.862-4.862a.978.978 0 0 0 .295-.7A1 1 0 0 0 20 28H6.5a.5.5 0 0 0-.5.5V42a1 1 0 0 0 1.007 1 .978.978 0 0 0 .7-.3l3.893-3.886a19.972 19.972 0 0 0 32.758-9.77.847.847 0 0 0-.829-1.044ZM25 10a13.9 13.9 0 0 1 9.156 3.432l-4.861 4.861a.978.978 0 0 0-.295.7A1 1 0 0 0 30 20h13.5a.5.5 0 0 0 .5-.5V6a1 1 0 0 0-1.007-1 .978.978 0 0 0-.7.295l-3.9 3.9a19.968 19.968 0 0 0-32.752 9.761.847.847 0 0 0 .83 1.044h4.387a1.007 1.007 0 0 0 .944-.686A14.007 14.007 0 0 1 25 10Z" />
            </svg>
        );
    },
);
