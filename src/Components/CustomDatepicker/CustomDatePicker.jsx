import { DatePicker } from "antd";
import FloatLabel from "../FloatLabel/FloatLabel";
import styles from "./CustomDatePicker.module.css";
import Icons from "../Icons/Icons";
import moment from 'moment';   

export default function CustomDatepicker({ id, label, value, handleChange, name, dataTestID,parentClass, maxDate, minDate }) {
  let dpClassName = `${styles.CustomDatePicker}`;
  const disabledDate = (current) => {
    if (maxDate) {
      const date = moment(maxDate).format('YYYY-MM-DD');
      return current && current < moment(date, "YYYY-MM-DD");
    }
    if (minDate) {
      const date = moment(minDate).format('YYYY-MM-DD');
      return current && current > moment(date, "YYYY-MM-DD");
    }
  }
  return (
    <>
      <FloatLabel label={label} value={value} parentClass={parentClass}>
        <DatePicker
          nextIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
              <path
                d="M6.53984 5.49997C6.53984 5.30283 6.46457 5.10571 6.31434 4.95541L1.58454 0.225655C1.28366 -0.0752185 0.795848 -0.0752185 0.495095 0.225655C0.194343 0.526408 0.194343 1.01413 0.495095 1.31502L4.68028 5.49997L0.495242 9.68494C0.19449 9.98581 0.19449 10.4735 0.495242 10.7742C0.795994 11.0752 1.28381 11.0752 1.58468 10.7742L6.31448 6.04453C6.46474 5.89416 6.53984 5.69704 6.53984 5.49997Z"
                fill="currentColor"
              />
            </svg>
          }
          prevIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
              <path
                d="M-0.000777008 5.49997C-0.000777 5.30283 0.0744965 5.10571 0.224726 4.95541L4.95453 0.225655C5.2554 -0.0752185 5.74321 -0.0752185 6.04397 0.225655C6.34472 0.526408 6.34472 1.01413 6.04397 1.31502L1.85878 5.49997L6.04382 9.68494C6.34457 9.98581 6.34457 10.4735 6.04382 10.7742C5.74307 11.0752 5.25525 11.0752 4.95438 10.7742L0.22458 6.04453C0.0743258 5.89416 -0.000777017 5.69704 -0.000777008 5.49997Z"
                fill="currentColor"
              />
            </svg>
          }
          id={id}
          name={name}
          data-test-id={dataTestID}
          allowClear={true}
          showToday={false}
          value={value}
          // open={true}
          onChange={handleChange}
          className={dpClassName}
          popupClassName={styles.CustomDatePickerCalendar}
          placeholder={""}
          suffixIcon={Icons.DatePickerCalendar}
          disabledDate={disabledDate}
        />
      </FloatLabel>
    </>
  );
}
