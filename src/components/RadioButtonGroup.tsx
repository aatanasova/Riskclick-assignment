"use client";
import RadioButton from "./UI/RadioButton";

const RadioButtonGroup = () => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
  };

  return (
    <div className="flex gap-4">
      <RadioButton
        label="Condition"
        value="condition"
        name="category"
        onChange={handleRadioChange}
      />
      <RadioButton
        label="Intervention"
        value="intervention"
        name="category"
        checked
        onChange={handleRadioChange}
      />
      <RadioButton
        label="General"
        value="general"
        name="category"
        onChange={handleRadioChange}
      />
    </div>
  );
};

export default RadioButtonGroup;
