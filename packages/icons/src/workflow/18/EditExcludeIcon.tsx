import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EditExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.7 27a12.217 12.217 0 0 1 14.008-12.168l4.8-4.8a1.373 1.373 0 0 0 .4-.883 1.22 1.22 0 0 0-.35-.948L27.8 2.432a1.215 1.215 0 0 0-.867-.353H26.9a1.37 1.37 0 0 0-.927.406L5.084 23.372a1 1 0 0 0-.251.421L2.055 33.1c-.114.376.459.851.783.851a.272.272 0 0 0 .061-.006c.276-.063 7.867-2.344 9.312-2.778a.984.984 0 0 0 .414-.249l2.207-2.207A12.4 12.4 0 0 1 14.7 27ZM4.668 31.338l2.009-6.73 4.72 4.708c-2.161.649-4.862 1.465-6.729 2.022Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20 27a6.934 6.934 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20 27Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
            </svg>
        );
    },
);
