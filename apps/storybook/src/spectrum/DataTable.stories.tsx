import type { Meta, StoryObj } from "@storybook/react";
import { DataTableDemo } from "../examples";

const meta = {
    title: "Examples/DataTable",
    component: DataTableDemo,
    argTypes: {
        size: {
            options: ["sm", "md", "lg", "xl"],
            control: { type: "select" },
        },
    },
    args: {
        // variant: "accent",
        // size: "md",
        // fill: "fill",
    },
} satisfies Meta<typeof DataTableDemo>;

export default meta;
type Story = StoryObj<typeof DataTableDemo>;

export const Default: Story = {};
