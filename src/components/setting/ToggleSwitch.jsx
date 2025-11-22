

const ToggleSwitch = ({ label, isOn, onToggle }) => {
    return (
      <div className="flex items-center justify-between my-3">
        <span className="text-gray-100">{label}</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={isOn}
            onChange={(e) => onToggle(e.target.checked)}
          />
          <div
            className={`w-10 h-6 bg-gray-400 rounded-full shadow-inner ${
              isOn ? "bg-blue-800" : ""
            }`}
          ></div>
          <div
            className={`dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0 ${
              isOn ? "transform translate-x-4" : ""
            }`}
          ></div>
        </label>
      </div>
    );
  };
  
  export default ToggleSwitch;
  