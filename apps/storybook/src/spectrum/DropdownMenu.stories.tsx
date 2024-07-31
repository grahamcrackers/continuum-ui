import { ChevronDownIcon } from "@continuum-ui/icons/workflow/18";
import { ActionButton } from "@continuum-ui/spectrum/components/action-button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@continuum-ui/spectrum/components/dropdown-menu";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Spectrum/DropdownMenu",
    component: DropdownMenu,
    argTypes: {
        // size: {
        //     options: ['sm', 'md', 'lg', 'xl'],
        //     control: { type: "select"},
        // },
    },
    args: {
        // variant: "accent",
        // size: "md",
        // fill: "fill",
        // disabled: false,
    },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <ActionButton className="ml-auto">
                    Columns <ChevronDownIcon className="w-4 h-4 ml-2" />
                </ActionButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => navigator.clipboard.writeText("Copy payment ID")}>
                    Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* <Divider size="sm" /> */}
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};
