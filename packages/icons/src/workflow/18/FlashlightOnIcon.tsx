import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashlightOnIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26.9 10.148a1.044 1.044 0 0 1-.738-1.781l3.473-3.477a1.043 1.043 0 1 1 1.475 1.475l-3.477 3.477a1.038 1.038 0 0 1-.733.306ZM22.663 6.85a1.04 1.04 0 0 1-1.029-1.216l.7-4.162a1.043 1.043 0 1 1 2.057.345l-.7 4.162a1.043 1.043 0 0 1-1.028.871ZM30.193 14.384a1.043 1.043 0 0 1-.171-2.072l4.162-.695a1.042 1.042 0 1 1 .345 2.056l-4.162.7a.937.937 0 0 1-.174.011ZM29.361 18.209l-.84.841L16.95 7.479l.841-.84a.817.817 0 0 1 1.157 0l10.413 10.413a.817.817 0 0 1 0 1.157ZM15.317 9.13l-.68.717a1.635 1.635 0 0 0-.4 1.072L12.6 18.49 2.183 28.911a.817.817 0 0 0 0 1.157l3.772 3.771a.817.817 0 0 0 1.157 0L17.51 23.4l7.571-1.636a1.635 1.635 0 0 0 1.072-.4l.717-.68Zm-1.306 14.594-2.454 2.455a1.228 1.228 0 0 1-1.736-1.736l2.455-2.454a1.227 1.227 0 0 1 1.735 1.735Z" />
            </svg>
        );
    },
);
