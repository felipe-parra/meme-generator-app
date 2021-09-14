import { ChangeEvent } from "react";

interface Props {
  name: string;
  value: string;
  placeholder?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInputComponent: React.FC<Props> = ({
  name,
  value,
  placeholder,
  handleChange
}) => {
  const handleSelect = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.select();
  };
  return (
    <div className="input-group">
      <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={handleSelect}
        autoComplete="false"
      />
    </div>
  );
};

export default TextInputComponent;
