import {Modal} from "antd";
import CustomButton from "../CustomButton/CustomButton";
import Icons from "../Icons/Icons";
import "./CustomModal.css";

export default function CustomModal({
  className,
  modalOpen,
  title,
  subtitle,
  modalBody,
  primaryBtnHandle,
  primaryBtnHandleText,
  ExtraButton,
  handleCancel,
  cancelBtnText,
  footer
}) {
  return (
    <>
      <Modal
        centered
        closeIcon={Icons.Close}
        className="customModal"
        id="customModal"
        open={modalOpen}
        width={650}
        onCancel={handleCancel}
        footer={
          footer
            ? false
            : [
                <CustomButton key="primary" type="dark" text={primaryBtnHandleText} handleClick={primaryBtnHandle} />,
                ExtraButton,
                <CustomButton key="cancel" type="dark-text-only" text={!cancelBtnText ? "Cancel" : cancelBtnText} handleClick={handleCancel} />
              ]
        }
      >
        <div className="space-bottom-32">
          {title && <h3 className={subtitle ? "page-title" : "page-title mb-0" }>{title}</h3>}
          {subtitle && <p className="page-title-label text-gray mb-0">{subtitle}</p>}
        </div>
        {modalBody}
      </Modal>
    </>
  );
}
