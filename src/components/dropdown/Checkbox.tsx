interface Props {
  id: string;
  name: string;
  checked?: boolean;
  onChange: (id: number, isChecked: boolean) => void;
}

/**
 * Checkbox component with customizable label and checked state.
 */
function Checkbox({ name, id, checked, onChange }: Props) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const id = Number(e.target.id);

    onChange(id, isChecked);
  };

  return (
    <div className="flex gap-1">
      <input
        type="checkbox"
        id={id}
        defaultChecked={checked}
        className="accent-primary"
        onChange={handleCheckboxChange}
      />
      <label htmlFor={id} className="w-full cursor-pointer text-sm">
        {name}
      </label>
    </div>
  );
}

export default Checkbox;
