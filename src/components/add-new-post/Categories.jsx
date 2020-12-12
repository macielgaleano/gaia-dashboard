import React, { useEffect } from "react";
import {
  InputGroup,
  FormInput,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "shards-react";

import axios from "axios";
import { useSelector } from "react-redux";

export default function Categories({ inputVale, setItemValue }) {
  const store = useSelector((state) => state);
  const [dropdown1, setdropdown1] = React.useState(false);
  const [categoriesValues, setCategoriesValues] = React.useState({});

  function toggle() {
    dropdown1 ? setdropdown1(false) : setdropdown1(true);
  }

  useEffect(() => {
    axios
      .get("https://gaia-server.vercel.app/productos/lista/categorias", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.user.token}`,
        },
      })
      .then((res) => setCategoriesValues(res.data));
  }, [categoriesValues]);

  return (
    <div>
      <InputGroup className="mb-3">
        <FormInput
          placeholder="Seleccione una categoria"
          size=""
          className=""
          value={inputVale}
        />
        <Dropdown open={dropdown1} toggle={() => toggle("dropdown1")} addonType="append">
          <DropdownToggle caret>Categorias</DropdownToggle>
          <DropdownMenu small right>
            {categoriesValues.length > 0 &&
              categoriesValues.map((item, i) => {
                return (
                  <DropdownItem onClick={() => setItemValue(item._id)} key={i}>
                    {item.name}
                  </DropdownItem>
                );
              })}
          </DropdownMenu>
        </Dropdown>
      </InputGroup>
    </div>
  );
}
