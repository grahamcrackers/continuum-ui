import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextKerningIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10.4 18.759c.6-2.106 1.945-6.7 4.51-14.287.054-.162.109-.216.243-.216H18.1c.134 0 .215.081.161.243l-6.188 17.312A.235.235 0 0 1 11.8 22H8.67a.239.239 0 0 1-.269-.162L2.054 4.5c-.054-.135 0-.243.161-.243h3.107a.187.187 0 0 1 .215.161c2.567 7.1 4.321 12.343 4.808 14.342ZM28.418 4.417c-.026-.134-.054-.161-.189-.161h-3.754c-.107 0-.161.081-.161.189A4.132 4.132 0 0 1 24.07 5.9l-5.563 15.83c-.028.189.026.27.189.27h2.7a.267.267 0 0 0 .3-.216L22.954 18h6.913l1.333 3.838a.272.272 0 0 0 .271.162H34.5c.161 0 .189-.081.161-.243Zm-2.052 2.54h.026c.541 1.89 2.1 6.481 2.664 8.264h-5.3c.813-2.457 2.178-6.455 2.61-8.264ZM33.5 27H16v-2.5a.5.5 0 0 0-.5-.5.49.49 0 0 0-.331.129l-4 4a.5.5 0 0 0 0 .744l4 4A.49.49 0 0 0 15.5 33a.5.5 0 0 0 .5-.5V30h17.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
