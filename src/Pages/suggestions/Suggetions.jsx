import { Avatar, Menu, Space, Table, Tooltip } from "antd";
import { useState } from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomOptionsDropDown from "../../Components/CustomOptionsDropDown/CustomOptionsDropDown";
import PaginationTotal from "../../Components/CustomTable/PaginationTotal";
import CustomTag from "../../Components/CustomTag/CustomTag";
import FilterTab from "../../Components/FilterTab/FilterTab";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";
import { SuggestionTableData as dataSource } from "../../Constants/consts";
// import ApprovalContract from "./ApprovalContract/ApprovalContract";
import NewSuggestionModal from "./NewSuggestionModal/NewSuggestionModal";
// import SignaturePapers from "./SignaturePapers/SignaturePapers";
import "../../Components/CustomTable/CustomTable.css";
import profile from "../../Components/public/Images/profile-1.jpg";
import Icons from "../../Components/Icons/Icons";

export default function Suggestions() {
  const [isNewSuggestionModal, setIsNewSuggestionModal] = useState(false);
  
  // OPTIONS DROPDOWN START
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Edit",
        },
        {
          key: "2",
          label: "Delete",
        },
        {
          key: "3",
          label: "Convert to task",
        },
        {
          key: "4",
          label: "Convert to project",
        },
        {
          key: "5",
          label: "Link to a meeting",
        },
      ]}
    />
  );
  // OPTIONS DROPDOWN END
  // TABLE CONTENT
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "16%",
    },
    {
      title: "Suggested by",
      dataIndex: "suggestedBy",
      key: "suggestedBy",
      ellipsis: true,
      width: "20%",
      render: (text) => {
        return (
          <div className="d-flex align-items-center">
            <Space size={8}>
              <Avatar size={28} src={profile} />
              <span>{text}</span>
            </Space>
          </div>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
      width: "45%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "10%",
      render: (text) => {
        let tag;

        text === "Accepted"
          ? (tag = (
              <CustomTag
                bgColor={"#D9EEE6"}
                borderColor={"#038D5B"}
                textColor={"#1E1F21"}
              >
                {text}
              </CustomTag>
            ))
          : text === "Pending"
          ? (tag = (
              <CustomTag
                bgColor={"#FCF0D6"}
                borderColor={"#F2B531"}
                textColor={"#1E1F21"}
              >
                {text}
              </CustomTag>
            ))
          : text === "Rejected" &&
            (tag = (
              <CustomTag
                bgColor={"#FEDCDC"}
                borderColor={"#F81111"}
                textColor={"#1E1F21"}
              >
                {text}  
              </CustomTag>
            ));

        return tag;
      },
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      width: "50px",
      render: (text) => {
        return (
          <CustomOptionsDropDown placement="bottomRight" dropdownMenu={menu} />
        );
      },
    },
  ];
  // TABLE CONTENT END

  // FILTER TAB DATA
  const FilterTabRowData = [
    {
      label: <>{/* All <span className="d-inline-block task">14</span> */}</>,
      key: "1",
      children: (
        <>
          <Table
            className="custom-table"
            id="custom-table"
            rowSelection={true}
            pagination={{
              showTotal: (total, range) => (
                <PaginationTotal total={total} range={range} />
              ),
            }}
            columns={columns}
            dataSource={dataSource}
          />
        </>
      ),
    },
  ];

  // FILTER TAB DATA END

  return (
    <>
      <header>
        <title>GrandPMS | Suggestions</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </header>
      <Layout>
        <div className="space-32">
          <Header
            title={
              <>
                Suggestions{" "}
                <span className="ms-3 d-inline-flex">
                  <CustomButton
                    icon={Icons.Plus}
                    size="small"
                    type="dark"
                    handleClick={() => {
                      setIsNewSuggestionModal(true);
                    }}
                  />
                </span>
              </>
            }
            search={true}
            filter={true}
            sort={true}
          />
          <div className="d-flex align-items-start mt-4">
            <div className="w-100">
              <FilterTab item={FilterTabRowData} />
            </div>
          </div>
        </div>
      </Layout>
      <NewSuggestionModal
        isNewSuggestionModal={isNewSuggestionModal}
        cancelNewSuggestionModal={() => {
          setIsNewSuggestionModal(false);
        }}
      />
      {/* <ApprovalContract
        isShowSuggestion={isShowSuggestion}
        cancelShowSuggestion={() => { setIsShowSuggestion(false); }}
        suggestionHandle={() => {setIsShowSuggestion(false); setIsShowApproveSuggestion(true)} }
        isShowApproveSuggestion={isShowApproveSuggestion}
        cancelApproveSuggestion={() => { setIsShowApproveSuggestion(false) }}
      />
      <SignaturePapers isSignaturePaperModal={isSignaturePaperModal} cancelSignaturePaperModal={() => {setIsSignaturePaperModal(true)}} /> */}
    </>
  );
}
