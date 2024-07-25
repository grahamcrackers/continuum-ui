import { Divider } from "@continuum-ui/spectrum/divider";
import { Heading } from "@continuum-ui/spectrum/heading";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Spectrum/Divider",
    component: Divider,
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: { type: "select" },
        },
    },
    args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const Large: Story = {
    render: () => {
        return (
            <>
                <Heading size="lg">Large</Heading>
                <Divider size="lg" />
                <p>Page or Section titles</p>
            </>
        );
    },
};

export const Medium: Story = {
    render: () => {
        return (
            <>
                <Heading size="md">Medium</Heading>
                <Divider />
                <p>Divide subsections, or divide different groups of elements (between panels, rails, etc.)</p>
            </>
        );
    },
};

export const Small: Story = {
    render: () => {
        return (
            <>
                <Heading size="sm">Small</Heading>
                <Divider size="sm" />
                <p>Divide like-elements (tables, tool groups, elements within a panel, etc.)</p>
            </>
        );
    },
};
