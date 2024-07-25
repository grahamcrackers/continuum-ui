import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashlightOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m29.361 18.209-.84.841L16.95 7.479l.841-.84a.817.817 0 0 1 1.157 0l10.413 10.413a.817.817 0 0 1 0 1.157ZM15.317 9.13l-.68.717a1.635 1.635 0 0 0-.4 1.072L12.6 18.49 2.183 28.911a.817.817 0 0 0 0 1.157l3.772 3.771a.817.817 0 0 0 1.157 0L17.51 23.4l7.571-1.636a1.635 1.635 0 0 0 1.072-.4l.717-.68Zm-1.306 14.594-2.454 2.455a1.228 1.228 0 0 1-1.736-1.736l2.455-2.454a1.227 1.227 0 0 1 1.735 1.735Z" />
            </svg>
        );
    },
);
