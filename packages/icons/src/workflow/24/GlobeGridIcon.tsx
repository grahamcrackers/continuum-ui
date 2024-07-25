import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GlobeGridIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 3a21 21 0 1 0 21 21A21 21 0 0 0 24 3Zm14.967 29h-5.8a25 25 0 0 0 1.315-7h6.462a16.883 16.883 0 0 1-1.977 7ZM39 16a16.9 16.9 0 0 1 1.951 7h-6.464a24.787 24.787 0 0 0-1.3-7Zm-1.271-2h-5.318a25.157 25.157 0 0 0-3.861-6.191l-.19-.223A16.993 16.993 0 0 1 37.727 14ZM25 7.051c.1 0 .2.007.293.014L27.026 9.1a23.181 23.181 0 0 1 3.187 4.9H25ZM25 16h6.076a22.862 22.862 0 0 1 1.409 7H25Zm7.485 9a23.037 23.037 0 0 1-1.423 7H25v-7Zm-16.97 0H23v7h-6.061a23.009 23.009 0 0 1-1.424-7Zm0-2a22.862 22.862 0 0 1 1.409-7H23v7Zm7.192-15.935c.1-.007.2-.009.293-.014V14h-5.213a23.181 23.181 0 0 1 3.187-4.9Zm-3.067.521-.19.223A25.157 25.157 0 0 0 15.589 14h-5.316a16.993 16.993 0 0 1 9.367-6.414ZM9 16h5.81a24.787 24.787 0 0 0-1.3 7H7.051A16.9 16.9 0 0 1 9 16Zm4.511 9a25 25 0 0 0 1.315 7H9.033a16.883 16.883 0 0 1-1.982-7Zm-3.227 9H15.6a24.938 24.938 0 0 0 3.848 6.191l.19.223A16.98 16.98 0 0 1 10.286 34Zm12.421 6.935L20.974 38.9a23.016 23.016 0 0 1-3.193-4.9H23v6.949c-.1-.005-.2-.007-.293-.014Zm2.586 0c-.1.007-.2.009-.293.014V34h5.219a23.016 23.016 0 0 1-3.193 4.9Zm3.067-.521.19-.223A24.938 24.938 0 0 0 32.4 34h5.316a16.98 16.98 0 0 1-9.356 6.414Z" />
            </svg>
        );
    },
);
