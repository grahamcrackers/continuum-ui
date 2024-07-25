import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ApplicationDeliveryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.811 38.383A5.045 5.045 0 0 1 13.459 36H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v2.9a4.168 4.168 0 0 1 2.725.269l1.275.52V10a6 6 0 0 0-6-6H10a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h4.488Z" />
                <path d="m44.948 24.168-2.8 1.175a11.662 11.662 0 0 0-3.364-3.369l1.155-2.822a1.077 1.077 0 0 0-.589-1.407l-2.14-.877a1.079 1.079 0 0 0-1.408.59l-1.158 2.822a11.667 11.667 0 0 0-4.761.042l-1.174-2.8a1.078 1.078 0 0 0-1.412-.578l-1.991.834a1.079 1.079 0 0 0-.578 1.412l1.175 2.8a11.662 11.662 0 0 0-3.369 3.364L19.712 24.2a1.078 1.078 0 0 0-1.407.59l-.877 2.14a1.078 1.078 0 0 0 .59 1.407l2.822 1.156a11.667 11.667 0 0 0 .042 4.761l-2.8 1.174a1.079 1.079 0 0 0-.578 1.412l.834 1.991a1.079 1.079 0 0 0 1.412.578l2.8-1.175a11.665 11.665 0 0 0 3.364 3.37l-1.155 2.821a1.077 1.077 0 0 0 .589 1.407l2.14.877a1.08 1.08 0 0 0 1.408-.59l1.155-2.819a11.685 11.685 0 0 0 4.761-.043l1.174 2.8a1.079 1.079 0 0 0 1.412.578l1.991-.834a1.079 1.079 0 0 0 .578-1.412l-1.174-2.8a11.674 11.674 0 0 0 3.369-3.364l2.821 1.156a1.08 1.08 0 0 0 1.407-.59l.877-2.14a1.079 1.079 0 0 0-.59-1.408l-2.821-1.155a11.685 11.685 0 0 0-.043-4.761l2.8-1.174a1.08 1.08 0 0 0 .578-1.412l-.834-1.991a1.079 1.079 0 0 0-1.409-.582Zm-8.62 5.952a4.316 4.316 0 1 1-5.648-2.313 4.315 4.315 0 0 1 5.648 2.313Z" />
            </svg>
        );
    },
);
