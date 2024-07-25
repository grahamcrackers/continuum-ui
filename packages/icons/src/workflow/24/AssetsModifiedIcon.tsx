import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetsModifiedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.958 34.7a5 5 0 0 1 1.256-2.106l.595-.594H6V8h36v7l4 4V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h12.571Z" />
                <path d="m45.526 25.247-5.765-5.765a1.214 1.214 0 0 0-.866-.353h-.038a1.371 1.371 0 0 0-.927.406L22.043 35.423a1 1 0 0 0-.251.421l-2.777 9.306c-.114.376.459.851.783.851a.274.274 0 0 0 .061-.006c.276-.063 7.867-2.344 9.312-2.779a.98.98 0 0 0 .414-.249l15.887-15.888a1.374 1.374 0 0 0 .4-.883 1.222 1.222 0 0 0-.346-.949Zm-23.9 18.142 2.009-6.73 4.72 4.708c-2.155.649-4.861 1.465-6.728 2.022Z" />
            </svg>
        );
    },
);
