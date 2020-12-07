import React from "react";
import {
  InputGroup,
  FormInput,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "shards-react";

export default function Categories() {
  const [dropdown1, setdropdown1] = React.useState(false);
  const [inputVale] = React.useState("Seleccione una categoria");

  function toggle() {
    dropdown1 ? setdropdown1(false) : setdropdown1(true);
  }
  return (
    <div>
      <InputGroup className="mb-3">
        <FormInput
          placeholder="Seleccione una categoria"
          size="lg"
          className="mb-3"
          value={inputVale}
        />
        <Dropdown open={dropdown1} toggle={() => toggle("dropdown1")} addonType="append">
          <DropdownToggle caret>Categorias</DropdownToggle>
          <DropdownMenu small right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </InputGroup>
    </div>
  );
}
