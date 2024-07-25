import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextBaselineShiftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M21.3 23.776 13.061 3c-.037-.129-.071-.16-.212-.16H9.412a.16.16 0 0 0-.176.16 3.073 3.073 0 0 1-.246 1.312L1.345 23.744c-.034.16.036.256.21.256H3.94c.175 0 .247-.064.281-.192L6.488 18h9.428l2.3 5.84a.317.317 0 0 0 .28.16h2.666c.176 0 .21-.1.138-.224ZM11.167 5.017h.033c.665 2.176 3.345 8.9 4.117 10.983H7.091c1.333-3.521 3.479-8.935 4.076-10.983Z" />
                <rect height="2" rx=".5" ry=".5" width="21" x="1" y="26" />
                <rect height="2" rx=".5" ry=".5" width="12" x="23" y="16" />
                <path d="M33.537 11.728a9.194 9.194 0 0 0 .047 1.148c0 .048 0 .071-.047.1A9.872 9.872 0 0 1 29.065 14c-2.536 0-4.449-1.244-4.449-3.755 0-2.535 2.367-3.659 5.334-3.659.883 0 1.386.025 1.65.048V6.06c0-.74-.36-2.391-2.7-2.391a6.414 6.414 0 0 0-3.037.717.117.117 0 0 1-.166-.119V2.808a.21.21 0 0 1 .119-.191 7.9 7.9 0 0 1 3.391-.717c3.061 0 4.33 2.008 4.33 4.5ZM31.6 8.212a11.4 11.4 0 0 0-1.58-.1c-2.32 0-3.444.79-3.444 2.129 0 1.076.743 2.129 2.846 2.129a5.614 5.614 0 0 0 2.178-.407ZM33.871 25.166l-4-4a.5.5 0 0 0-.743 0l-4 4A.49.49 0 0 0 25 25.5a.5.5 0 0 0 .5.5H28v5.155a.845.845 0 0 0 .845.845h1.31a.845.845 0 0 0 .845-.845V26h2.5a.5.5 0 0 0 .5-.5.49.49 0 0 0-.129-.334Z" />
            </svg>
        );
    },
);
