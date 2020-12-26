import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormInput,
} from "shards-react";
import { BsFillTrashFill } from "react-icons/bs";

const Materials = ({ materials, setMaterials }) => {
  const [value, setvalue] = useState("");

  const addMaterial = () => {
    setMaterials([...materials, value]);
  };

  return (
    <Card small className="mb-3">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Materiales</h6>
      </CardHeader>
      <CardBody className="p-0">
        <ListGroup flush>
          <ListGroupItem className="px-3 pb-2">
            {materials.length > 0 &&
              materials.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="ml-2 mb-1 d-flex justify-content-between"
                    value="uncategorized"
                  >
                    {item}
                    <button type="button" className="btn btn-primary mr-2">
                      <BsFillTrashFill className="" />
                    </button>
                  </div>
                );
              })}
          </ListGroupItem>

          <ListGroupItem className="d-flex px-3">
            <InputGroup className="ml-auto">
              <FormInput
                placeholder="Agregar material"
                onChange={(e) => setvalue(e.target.value)}
              />
              <InputGroupAddon type="append">
                <Button variant="primary" className="px-2" onClick={addMaterial}>
                  Agregar
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

Materials.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

Materials.defaultProps = {
  title: "Categories",
};

export default Materials;
