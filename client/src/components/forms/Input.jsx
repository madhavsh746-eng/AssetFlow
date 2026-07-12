const Input = ({
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          px-3
          py-2
          outline-none
          transition
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
        "
      />
    </div>
  );
};

export default Input;