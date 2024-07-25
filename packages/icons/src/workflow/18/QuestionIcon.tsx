import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const QuestionIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M33 4H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h11l3.536 6.839a.5.5 0 0 0 .928 0L22 28h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM18.104 25.444a2.538 2.538 0 0 1-.35 0 2.557 2.557 0 0 1-2.7-2.7 2.6 2.6 0 0 1 2.526-2.672q.087-.003.174 0a2.6 2.6 0 0 1 2.699 2.498q.003.087.001.174a2.531 2.531 0 0 1-2.35 2.7ZM20.81 14.2l-.173.164c-.7.662-1.493 1.412-1.493 1.872a2 2 0 0 0 .3 1.04.6.6 0 0 1-.51.948h-2.089a.941.941 0 0 1-.692-.271 3.17 3.17 0 0 1-.7-1.98c0-1.358.837-2.2 1.994-3.353.765-.765 1.1-1.155 1.1-1.684 0-.264 0-.964-1.537-.964a5.652 5.652 0 0 0-2.8.739l-.18.072h-.119a.61.61 0 0 1-.616-.602V7.837a.71.71 0 0 1 .357-.68 8.11 8.11 0 0 1 3.885-.9 4.402 4.402 0 0 1 4.96 4.266A4.747 4.747 0 0 1 20.81 14.2Z" />
            </svg>
        );
    },
);
