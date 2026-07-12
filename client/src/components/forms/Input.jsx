const Input = ({
  label,
  placeholder,
  type = "text"
}) => {

  return (
    <div className="flex flex-col gap-2">

      <label className="font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="border rounded-lg p-2 outline-none"
      />

    </div>
  );
};

export default Input;