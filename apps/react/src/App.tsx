import { Arrow600Icon, Checkmark100Icon } from "@continuum-ui/icons/medium";
import { InfoIcon } from "@continuum-ui/icons/workflow/18";
import { ActionButton } from "@continuum-ui/spectrum/components/action-button";
import { Button } from "@continuum-ui/spectrum/components/button";
// import { Checkbox } from "@continuum-ui/spectrum/components/checkbox";
import { CheckboxInput, CheckboxLabel, CheckboxRoot } from "@continuum-ui/spectrum/components/checkbox";
import { Tooltip } from "@continuum-ui/spectrum/components/tooltip";

import { ExampleTable, PokemonTable } from "./components/PokemonTable";

function App() {
    return (
        <>
            <section id="buttons">
                <Button variant="accent">Default</Button>
                <Button variant="negative">Negative</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="white">White</Button>
                <Button variant="black">Black</Button>
                <Button variant="icon">
                    <Arrow600Icon />
                </Button>
            </section>
            <section id="tables">
                <ExampleTable />
                <PokemonTable />
            </section>
            <section id="checkbox">
                <label className="spectrum-Checkbox spectrum-Checkbox--sizeL">
                    <input type="checkbox" className="spectrum-Checkbox-input" id="checkbox-0" />
                    <span className="spectrum-Checkbox-box">
                        <Checkmark100Icon className="spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" />

                        <svg
                            className="spectrum-Icon spectrum-UIIcon-Dash100 spectrum-Checkbox-partialCheckmark"
                            focusable="false"
                            aria-hidden="true"
                        >
                            <use xlinkHref="#spectrum-css-icon-Dash100" />
                        </svg>
                    </span>
                    <span className="spectrum-Checkbox-label">Checkbox</span>
                </label>
                {/* <label className="spectrum-Checkbox spectrum-Checkbox--sizeL">
                    <span className="spectrum-Checkbox-box">
                        <Checkbox />
                        <span className="spectrum-Checkbox-label">Checkbox</span>
                    </span>
                </label> */}
                {/* radix checkbox */}

                <CheckboxRoot>
                    <CheckboxInput onChange={(value) => console.log(value.currentTarget.checked)} />
                    <CheckboxLabel>Accept terms and conditions.</CheckboxLabel>
                </CheckboxRoot>
            </section>
            <section id="action-buttons">
                <ActionButton />
            </section>
            <section id="tooltip">
                <Tooltip label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, nisl sit amet pretium luctus, ipsum mi pellentesque metus, et ullamcorper orci nunc molestie dui. Phasellus ullamcorper erat gravida, commodo elit et, malesuada mauris. Integer vehicula molestie sem. Vestibulum vel tortor a felis interdum eleifend eu vitae orci. Proin dictum augue quis nibh volutpat, a pharetra lorem maximus. Pellentesque sagittis consequat dui, ut suscipit libero rutrum sed. Nam suscipit sapien dolor, at venenatis velit tincidunt ut. Etiam dignissim dui sit amet pretium fermentum. Quisque consequat lacinia enim ac hendrerit. Sed tempus bibendum nulla a bibendum. Nunc lectus odio, tristique eu purus eu, congue tempus diam. Vestibulum eu leo eleifend, facilisis purus vel, ultrices urna. Ut consequat vitae est eget molestie. Nam at faucibus quam. Sed vel venenatis metus. Etiam varius fermentum sem et pharetra.">
                    <Button variant="icon">
                        <InfoIcon />
                    </Button>
                </Tooltip>
            </section>
        </>
    );
}

export default App;
