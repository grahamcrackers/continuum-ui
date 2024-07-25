import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BoxExportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m21.285 4.2-5.563-3.017a1.515 1.515 0 0 0-1.443 0L.409 8.7a.781.781 0 0 0 0 1.373L5.645 12.9ZM29.591 8.7l-5.149-2.794L8.8 14.615l6.2 3.357 14.591-7.9a.781.781 0 0 0 0-1.372ZM14 20.971 0 13.193v13.459a1.6 1.6 0 0 0 .823 1.4L14 35.371ZM28 24v-3.328a.5.5 0 0 1 .866-.341L36 28l-7.134 7.669a.5.5 0 0 1-.866-.341V32h-5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
                <path d="M27 18h3v-4.807l-14 7.778v14.4l4-2.222V23a1 1 0 0 1 1-1h5v-3a1 1 0 0 1 1-1Z" />
            </svg>
        );
    },
);
