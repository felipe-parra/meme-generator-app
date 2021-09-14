import React, { ChangeEvent } from "react";

interface Opts {
  id: string;
  name: string;
}

interface Props {
  opts?: Opts[];
  name: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectComponent: React.FC<Props> = ({ opts, name, handleChange }) => {
  return (
    <div className="input-group">
      <label htmlFor="xd">{name}</label>
      {/* <input type="file" accept="image/*" onChange={handleChange} /> */}
      <select name={name} id={name} onChange={handleChange}>
        {opts
          ? opts.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default SelectComponent;
