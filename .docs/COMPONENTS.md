# Components

A component list mapping of the spectrum css components to our component implementation. Some of these are 1:1 but others were renamed to something else (i.e. Select > Picker) but it is my opinion that our implementation shou be kept as close as possible to the native api.

Some of these components are collections of lesser components and I've also moved them out into a different table, as well as moving out components that aren't used for 99% of web UI's out there.

Status:

-   🚧: In Progress
-   ✅: Completed

| Spectrum Component     | Our Component      | Status |
| ---------------------- | ------------------ | ------ |
| Accordion              | Accordion          |        |
| Action button          | -                  | 🚧     |
| Action group           | -                  |        |
| Action menu            | Dropdown Menu      | 🚧     |
| Alert banner           | Alert?             |        |
| Alert dialog           | Alert dialog       | 🚧     |
| Avatar                 | Avatar             |        |
| Badge                  | Badge              |        |
| Breadcrumbs            | Breadcrumb         |        |
| Button - (all)         | Button             | 🚧     |
| Button group           | -                  |        |
| Calendar               | Calendar           |        |
| Card                   | Card               |        |
| Checkbox               | Checkbox           | 🚧     |
| Combobox               | Combobox           |        |
| Contextual help        | Hover Card (radix) |        |
| Date picker            | Date Picker        |        |
| Dialog                 | Dialog             |        |
| Divider                | Divider            | 🚧     |
| Drop indicator         | -                  |        |
| Drop zone              | -                  |        |
| Field group            | -                  |        |
| Field label            | Label              |        |
| Floating action button | -                  |        |
| Form                   | -                  |        |
| Help text              | -                  |        |
| Illustrated message    | -                  |        |
| In-field button        | Button             |        |
| In-line alert          | Alert              |        |
| Link                   | -                  |        |
| Logic button           | - Badge?           |        |
| Menu                   | Menubar?           |        |
| Miller columns         | -                  |        |
| Modal                  | Dialog             |        |
| Pagination - (all)     | Pagination         |        |
| Picker                 | Select             |        |
| Picker button          | Select             |        |
| Popover                | Popover            |        |
| Progress bar           | Progress           |        |
| Progress circle        | Progress           |        |
| Radio                  | Radio Group        |        |
| Rating                 | -                  |        |
| Side navigation        | Navigation menu?   |        |
| -                      | Skeleton           |        |
| Slider                 | Slider             |        |
| Status light           | -                  |        |
| Steplist               | -                  |        |
| Stepper                | -                  |        |
| Swatch                 | -                  |        |
| Swatch group           | -                  |        |
| Switch                 | Switch             |        |
| Table                  | Table              | 🚧     |
| Tabs                   | Tabs               | 🚧     |
| Tag                    | -                  |        |
| Tag group              | -                  |        |
| Text area              | Textarea           |        |
| Text field             | Input              | 🚧     |
| Thumbnail              | -                  |        |
| Toast                  | Toast              |        |
| Tooltip                | Tooltip            |        |
| Tray                   | Drawer             |        |
| Tree view              | -                  |        |
| Typography             | -                  |        |
| Typography body        | Text (radix)       |        |
| Typography code        | Code (radix)       |        |
| Typography detail      | -                  |        |
| Typography heading     | Heading (radix)    | 🚧     |

## Collections

Components that consist of lesser components.

| Spectrum Component   | Our Component   | Completed |
| -------------------- | --------------- | --------- |
| Action bar           |                 |           |
| Card - asset preview |                 |           |
| Card - gallery       |                 |           |
| Clear button         |                 |           |
| Close button         |                 |           |
| Meter                | Progress        |           |
| Search               | Input with Icon |           |

## Removed Components (for now)

Components that don't see a lot of use in typical web UI's and are specialized around Adobe's needs. If these are needed, they can be added on an ad hoc basis or create a PR to add them into the library.

-   Asset
-   Asset card
-   Asset list
-   Coach indicator
-   Coach mark
-   Color area
-   Color handle
-   Color loupe
-   Color slider
-   Color wheel
-   Dial
-   Opacity checkerboard
-   Page - In my opinion, this really only causes confusion. The css consists of a single property and could be included in the base styles without having to create another component for it.
-   Split view
-   Typography (internationalized) - honestly... if this library ever actually get's popular, we can implement this then. For now we will just support rtl and ltr languages
-   Well
