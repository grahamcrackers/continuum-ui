import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="23.8" cy="10.6" r="2.5" />
                <path d="M38 14h-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h10V15.146A3.638 3.638 0 0 0 9.785 14C8.189 14 5.729 16.85 4 19.148V6h28v8H18a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h2.6a15.9 15.9 0 0 1-.378-2H18.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1.754a15.9 15.9 0 0 1 .4-2H18.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v.061c.113-.211.246-.41.369-.615A.477.477 0 0 1 22 27.5v-1a.5.5 0 0 1 .5-.5h1.221A15.792 15.792 0 0 1 40 20.728V16a2 2 0 0 0-2-2ZM22 25.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm16 0a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z" />
                <path d="M36 24.1a11.85 11.85 0 1 0 0 23.7 11.85 11.85 0 0 0 0-23.7Zm-2.229 19.8-6.132-6.132a.5.5 0 0 1 0-.707L29.4 35.3a.5.5 0 0 1 .707 0L34 39.188l8.939-8.94a.5.5 0 0 1 .708 0l1.886 1.887a.5.5 0 0 1 0 .707L34.479 43.9a.5.5 0 0 1-.708 0Z" />
            </svg>
        );
    },
);
