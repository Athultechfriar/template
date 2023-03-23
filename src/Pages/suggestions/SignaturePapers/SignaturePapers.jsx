import { Avatar, Col, Row, Space } from "antd";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomModalOptions from "../../../components/CustomModalOptions/CustomModalOptions";
import CustomTag from "../../../components/CustomTag/CustomTag";
import Icons from "../../../components/Icons/Icons";
import styles from "./SignaturePapers.module.css";

export default function SignaturePapers({isSignaturePaperModal, cancelSignaturePaperModal}) {
  const modalLeftBody = (
    <>
      <Row gutter={16} className="space-bottom-32">
        <Col span={9}>
          <h4 className="fw-600 p">Status</h4>
          <Space>
            <Avatar size={28} src="/Images/profile-1.jpg" />
            <span>Sajjad Ali</span>
          </Space>
        </Col>
        <Col>
          <h4 className="fw-600 p">Tags</h4>
          <CustomTag bgColor="#FEDCDC" borderColor="#F81212" textColor="#1E1F21">
            Rejected
          </CustomTag>
        </Col>
      </Row>
      <h2>Attachments</h2>
    </>
  )
  const modalRightBody = (
    <>
      <p className="small fw-600 mb-3">Options</p>
      <Space size={12} className="d-flex space-bottom-40" direction="vertical">
        <CustomButton text="Delete suggestion" type="white-gray-outlined" className={"bg-white w-100 fw-400 border-0"} icon={Icons.Delete} />
      </Space>
      <div className="space-top-40">
        <p className="small fw-600 mb-3">Activity log</p>
        <div className={`d-flex align-items-start ${styles.activityWrap}`}>
          <Avatar className="me-2 flex-shrink-0" size={22} src="/Images/avatar/avatar1.jpg" />
          <div className="flex-grow-1">
            <p className={`mb-1 ${styles.activityDes}`}>
              <span className="fw-500 text-dark">Sajjad Ali</span> rejected your suggestion
            </p>
            <span className={styles.activityTime}>2 week ago</span>
          </div>
        </div>
        <div className={`d-flex align-items-start ${styles.activityWrap}`}>
          <Avatar className="me-2 flex-shrink-0" size={22} src="/Images/avatar/avatar2.jpg" />
          <div className="flex-grow-1">
            <p className={`mb-1 ${styles.activityDes}`}>
              <span className="fw-500 text-dark">You</span> sent the suggestion to <span className="fw-500 text-dark">Sajjad Ali</span>
            </p>
            <span className={styles.activityTime}>1 month ago</span>
          </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      <CustomModalOptions
        title="Signature for the lease papers"
        modalOpen={isSignaturePaperModal}
        handleCancel={cancelSignaturePaperModal}
        modalLeftBody={modalLeftBody}
        modalRightBody={modalRightBody}
        footer={false}
      />
    </>
  )
}