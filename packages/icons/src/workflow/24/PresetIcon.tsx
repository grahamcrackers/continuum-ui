import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PresetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 18h2v2h-2zM18 16h2v2h-2zM22 16h2v2h-2zM20 18h2v2h-2zM24 18h2v2h-2zM18 20h2v2h-2zM22 20h2v2h-2zM26 20h2v2h-2zM16 22h2v2h-2zM20 22h2v2h-2zM24 22h2v2h-2zM28 22h2v2h-2zM18 24h2v2h-2zM22 24h2v2h-2zM26 24h2v2h-2zM20 26h2v2h-2zM24 26h2v2h-2zM28 26h2v2h-2zM22 28h2v2h-2zM26 28h2v2h-2zM30 28h2v2h-2zM24 30h2v2h-2zM28 30h2v2h-2z" />
                <path d="M32 33.688V32h-2v1.962c-.331.022-.664.038-1 .038s-.668-.029-1-.051V32h-2v1.7a14.93 14.93 0 0 1-2-.571V32h-2v.262c-.157-.083-.308-.174-.462-.262H22v-2h-2v.979A15.256 15.256 0 0 1 18.826 30H20v-2h-2v1.174A15.068 15.068 0 0 1 17.021 28H18v-2h-2v.462c-.088-.154-.179-.3-.262-.462H16v-2h-1.128a14.93 14.93 0 0 1-.571-2H16v-2h-1.949c-.022-.332-.051-.662-.051-1s.016-.669.038-1H16v-2h-1.688c.094-.458.2-.911.335-1.353a15 15 0 1 0 18.706 18.706c-.442.134-.895.241-1.353.335ZM30 24h2v2h-2zM20 14.051V16h2v-1.7a14.931 14.931 0 0 0-2-.249ZM24 14.872V16h2v-.262a14.883 14.883 0 0 0-2-.866ZM26.462 16H26v2h2v-.979A14.855 14.855 0 0 0 26.462 16ZM29.174 18H28v2h2v-1.174q-.4-.426-.826-.826ZM30.98 20H30v2h2v-.462A15.12 15.12 0 0 0 30.98 20ZM32.262 22H32v2h1.128a14.939 14.939 0 0 0-.866-2ZM33.7 26H32v2h1.949a14.952 14.952 0 0 0-.249-2Z" />
                <path d="M29 4a15 15 0 0 0-14.353 10.647c.441-.134.9-.233 1.353-.326V16h2v-1.96h.029a12.044 12.044 0 1 1 15.934 15.931V30H32v2h1.679c-.093.457-.192.912-.326 1.353A15 15 0 0 0 29 4Z" />
            </svg>
        );
    },
);
