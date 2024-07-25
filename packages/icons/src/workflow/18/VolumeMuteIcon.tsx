import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VolumeMuteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12 27a10.983 10.983 0 0 1 4-8.478V5a.726.726 0 0 0-1.194-.571l-6.639 6.8c-.439.446-.726.844-1.422.844H1a1 1 0 0 0-1 1v9.923a1 1 0 0 0 1 1h5.745c.697 0 .996.411 1.422.845l4.005 4.102A11.022 11.022 0 0 1 12 27Z" />
                <path d="M23 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM16 27a6.935 6.935 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 16 27Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
            </svg>
        );
    },
);
