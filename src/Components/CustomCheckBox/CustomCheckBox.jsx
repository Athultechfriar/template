import "./CustomCheckBox.css";
export default function CustomCheckBox({ label, checked, dataTestID, id, handleClick, labelClass }) {
  return (
    <>
      <div className="CustomCheckBoxWrapper">
        <input
          onClick={handleClick}
          id={id}
          data-test-id={dataTestID}
          type="checkbox"
          className="CheckBoxInput"
          checked={checked}
        />
        <div className="CustomCheckBoxInput"></div>

        <label htmlFor={id} className="CustomCheckBoxLabel labelClass ? labelClass : null">
          {label}
        </label>
      </div>
    </>
  );
}
