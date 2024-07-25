import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EditInLightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.809 32H8V8h24v10.809l4-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h11.571a13.809 13.809 0 0 1 .849-2.138A11.88 11.88 0 0 1 18.809 32ZM47.526 22.247l-5.764-5.765a1.217 1.217 0 0 0-.867-.353h-.038a1.371 1.371 0 0 0-.927.406L21.043 35.423a1 1 0 0 0-.251.421l-2.777 9.305c-.114.377.459.851.783.851a.3.3 0 0 0 .061-.006c.276-.064 7.867-2.345 9.312-2.779a.984.984 0 0 0 .414-.249l18.887-18.887a1.376 1.376 0 0 0 .405-.884 1.225 1.225 0 0 0-.351-.948Zm-26.9 21.142 2.009-6.731 4.72 4.708c-2.155.65-4.861 1.466-6.728 2.023Z" />
            </svg>
        );
    },
);
