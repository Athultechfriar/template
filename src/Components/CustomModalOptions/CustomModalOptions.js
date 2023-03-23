import {Modal} from "antd";
import CustomButton from "../CustomButton/CustomButton";
import Icons from "../Icons/Icons";
import styles from "./CustomModalOptions.module.css";

export default function CustomModalOptions({
  className,
  modalOpen,
  title,
  subtitle,
  modalLeftBody,
  modalRightBody,
  handleCancel,
  footer,
  primaryBtnText,
  primaryBtnHandle,
  cancelBtnText
}) {
  return (
    <>
      <Modal centered closeIcon={Icons.Close} className={[styles.customModal, className]} open={modalOpen} width={970} onCancel={handleCancel} footer={false}>
        <div className="d-flex">
          <div className={styles.modalLeftBody}>
            {title && <h3 className={subtitle ? "page-title" : "page-title mb-0"}>{title}</h3>}
            {subtitle && <p className="page-title-label text-gray mb-0">{subtitle}</p>}
            <div className="space-top-32">{modalLeftBody}</div>
            {footer ? (
              false
            ) : (
              <div className="space-top-32">
                <CustomButton key="primary" type="dark" text={primaryBtnText} className="me-2" handleClick={primaryBtnHandle} />
                <CustomButton key="cancel" type="dark-text-only" text={cancelBtnText} handleClick={handleCancel} />
              </div>
            )}
          </div>
          <div className={styles.modalRightBody}>{modalRightBody}</div>
        </div>
      </Modal>
    </>
  );
}
