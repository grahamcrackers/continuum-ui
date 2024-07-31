import * as BaseTooltip from "@radix-ui/react-tooltip";

type TooltipProps = React.PropsWithChildren & {
    label: string;
};

export function Tooltip({ children, label }: TooltipProps) {
    return (
        <>
            <BaseTooltip.Provider>
                <BaseTooltip.Root>
                    <BaseTooltip.Trigger asChild>{children}</BaseTooltip.Trigger>
                    <BaseTooltip.Portal>
                        <BaseTooltip.Content
                            className="spectrum-Tooltip spectrum-Tooltip--top-left is-open"
                            sideOffset={20}
                        >
                            <span className="spectrum-Tooltip-label">{label}</span>
                            <span className="spectrum-Tooltip-tip"></span>
                        </BaseTooltip.Content>
                    </BaseTooltip.Portal>
                </BaseTooltip.Root>
            </BaseTooltip.Provider>
        </>
    );
}
