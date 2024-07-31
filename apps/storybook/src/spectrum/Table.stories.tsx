import { Arrow100Icon } from "@continuum-ui/icons/ui/medium";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@continuum-ui/spectrum/components/table";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Spectrum/Table",
    component: Table,
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
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
    render: () => (
        <Table className="align-middle">
            <TableHeader>
                <TableRow>
                    <TableHead sortable className="is-sorted-desc">   
                        <div className="flex items-center">                            
                        <Arrow100Icon className="spectrum-Icon spectrum-UIIcon-ArrowDown100 spectrum-Table-sortedIcon"/>                     
                        <span className="spectrum-Table-columnTitle">Column title</span>
                        </div>
                    </TableHead>
                    <TableHead>
                        <span className="spectrum-Table-columnTitle">Column title</span>
                    </TableHead>
                    <TableHead>Column title</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Row Item Alpha</TableCell>
                    <TableCell>Row Item Alpha</TableCell>
                    <TableCell>Row Item Alpha</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row Item Bravo</TableCell>
                    <TableCell>Row Item Bravo</TableCell>
                    <TableCell>Row Item Bravo</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row Item Charlie</TableCell>
                    <TableCell>Row Item Charlie</TableCell>
                    <TableCell>Row Item Charlie</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row Item Delta</TableCell>
                    <TableCell>Row Item Delta</TableCell>
                    <TableCell>Row Item Delta</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row Item Echo</TableCell>
                    <TableCell>Row Item Echo</TableCell>
                    <TableCell>Row Item Echo</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ),
};
