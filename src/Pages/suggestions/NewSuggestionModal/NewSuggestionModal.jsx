import {Select, Space} from "antd";
import {useState} from "react";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomLink from "../../../Components/CustomLink/CustomLink";
import CustomModalOptions from "../../../Components/CustomModalOptions/CustomModalOptions";
import CustomSelectPerson from "../../../Components/CustomSelectPerson/CustomSelectPerson";
import CustomTagPerson from "../../../Components/CustomTagPerson/CustomTagPerson";
import CustomTextArea from "../../../Components/CustomTextArea/CustomTextArea";
import Icons from "../../../Components/Icons/Icons";
import {persons} from "../../../Constants/personConsts";
const {Option} = Select;

export default function NewSuggestionModal({isNewSuggestionModal, cancelNewSuggestionModal}) {
  const [Suggestion, setSuggestion] = useState();
  const [SuggestTo, setSuggestTo] = useState();
  const [SuggestionComment, setSuggestionComment] = useState();
  const modalLeftBody = (
    <>
      <Space size={20} direction="vertical" className="d-flex">
        <CustomInput
          dataTestId="Suggestion"
          id="Suggestion"
          label="Suggestion"
          name="Suggestion"
          handleChange={(e) => setSuggestion(e.target.value)}
          value={Suggestion}
        />
        <CustomSelectPerson
          label={"Suggest to"}
          id={"SuggestTo"}
          name="SuggestTo"
          dataTestID="SuggestTo"
          value={SuggestTo}
          handleChange={(value) => setSuggestTo(value)}
        >
          {persons &&
            persons.map((person, i) => {
              return (
                <Option key={i} value={person.name} label={<CustomTagPerson img={person.img} name={person.name} />}>
                  <CustomTagPerson img={person.img} name={person.name} />
                </Option>
              );
            })}
        </CustomSelectPerson>
        <CustomTextArea
          dataTestId="SuggestionComment"
          id="SuggestionComment"
          label="Add description..."
          name="SuggestionComment"
          handleChange={(e) => setSuggestionComment(e.target.value)}
          value={SuggestionComment}
          rows={3}
        />
      </Space>
    </>
  );
  const modalRightBody = ( 
    <>
      <p className="small fw-600 mb-3">Options</p>
      <Space size={12} className="" direction="vertical">
        <CustomButton text="Add attachment" type="white-gray-outlined" className={"bg-white w-100 fw-400"} icon={Icons.Attachment} />
        <CustomButton text="Link to a meeting" type="white-gray-outlined" className={"bg-white w-100 fw-400"} icon={Icons.Link} />
      </Space>
    </>
  );

  return (
    <>
      <CustomModalOptions
        modalOpen={isNewSuggestionModal}
        handleCancel={cancelNewSuggestionModal}
        title={"Create new suggestion"}
        subtitle={
          <div className="d-flex">
            <span className="me-2 d-flex">{Icons.Lock}</span>
            <span className="">
              This suggestion will be private to you and whom you suggest to
              <br /> <CustomLink text={"Visible within team"} href="#" type="underline" />
            </span>
          </div>
        }
        modalLeftBody={modalLeftBody}
        modalRightBody={modalRightBody}
        primaryBtnText={"Send suggestion"}
        cancelBtnText="Cancel"
      />
    </>
  );
}
