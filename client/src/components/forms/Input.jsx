const Input = ({ 
  label, 
  name, 
  value, 
  onChange, 
  placeholder, 
  error,
  type = "text"
}) => {

  return (
    <div className="mb-4">

      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-lg px-3 py-2 outline-none
        ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}

    </div>
  );
};

export default Input;