import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PerspectiveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 3.281v31.276a1 1 0 0 0 1.351.936l30-11.25a1 1 0 0 0 .649-.936V10.781a1 1 0 0 0-.757-.97l-30-7.5A1 1 0 0 0 2 3.281Zm30 12.836-6 .4v-6.5l6 1.446ZM16 17.19V7.613l8 1.929v7.112Zm8 1.356v7.126l-8 2.938v-9.419ZM14 7.131v10.193L4 18V4.72ZM4 20.16l10-.807v9.992L4 33.017Zm22 4.778v-6.554l6-.484v4.834Z" />
            </svg>
        );
    },
);
