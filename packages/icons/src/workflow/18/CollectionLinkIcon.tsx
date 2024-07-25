import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CollectionLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.136 28H14V18h8v1.208l1.937-1.937L25.207 16H24V6h8v7.063a7.552 7.552 0 0 1 2 .428V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h12.065a7.664 7.664 0 0 1 .071-2ZM14 6h8v10h-8Zm-2 22H4V18h8Zm0-12H4V6h8Z" />
                <path d="M25.548 25.421a2.165 2.165 0 0 0 .421.611 2.19 2.19 0 0 0 3.094 0l3.609-3.609a2.188 2.188 0 0 0-3.094-3.094l-.819.819a5.85 5.85 0 0 0-2.649-.448l1.921-1.921a4.375 4.375 0 0 1 6.187 6.187l-3.609 3.609a4.351 4.351 0 0 1-6.656-.562Zm-2.157-3-3.609 3.609a4.375 4.375 0 0 0 6.187 6.187L27.89 30.3a5.851 5.851 0 0 1-2.649-.445l-.819.819a2.188 2.188 0 0 1-3.094-3.094l3.609-3.609a2.19 2.19 0 0 1 3.094 0 2.157 2.157 0 0 1 .421.611l1.6-1.6a4.351 4.351 0 0 0-6.656-.562Z" />
            </svg>
        );
    },
);
