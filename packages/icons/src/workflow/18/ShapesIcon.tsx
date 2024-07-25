import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShapesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22.521 31.8a11.308 11.308 0 0 1-11.052-9.023l-.032-.16H1.734a.256.256 0 0 1-.224-.13.249.249 0 0 1 0-.257l10.226-17.9a.26.26 0 0 1 .45 0l3.941 6.899.18-.12a11.28 11.28 0 1 1 6.214 20.692Zm-9.085-8.933a9.381 9.381 0 1 0 3.789-10.09l-.153.104 5.342 9.35a.249.249 0 0 1 0 .255.256.256 0 0 1-.225.131h-8.818Z" />
            </svg>
        );
    },
);
