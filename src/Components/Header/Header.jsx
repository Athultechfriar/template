import React, { useState } from "react";
import { Menu, Select, Space } from "antd";
import CustomButton from "../CustomButton/CustomButton";
import "./Header.css";
import CustomSearch from "../CustomSearch/CustomSearch";
import Icons from "../Icons/Icons";
import CustomDropDown from "../CustomDropDown/CustomDropDown";
import CustomCheckBox from "../../Components/CustomCheckBox/CustomCheckBox";
import CustomRadioButton from "../CustomRadioButton/CustomRadioButton";
const { Option } = Select;

export default function Header({ title, subtitle, search, create, sort, taskFilter, peopleFilter, meetingFilter, className }) {
  const [isNewAnnouncement, setIsNewAnnouncement] = useState(false);
  const [ShowPeopleFilterDropdown, setShowPeopleFilterDropdown] = useState(false);
  const [ShowTaskSortDropdown, setShowTaskSortDropdown] = useState(false);
  const [isCreateTaskModal, setIsCreateTaskModal] = useState(false);
  const [CreateModalOpen, setCreateModalOpen] = useState(false);
  const [isNewSuggestionModal, setIsNewSuggestionModal] = useState(false);

  const Announcement = ({ key }) => {
    key === "Announcement" && setIsNewAnnouncement(true);
    key === "Task" && setIsCreateTaskModal(true);
    key === "Meeting" && setCreateModalOpen(true);
    key === "Suggestion" && setIsNewSuggestionModal(true);
  };
  const menu = (
    <Menu
      className="CreateDropdownMenu"
      onClick={Announcement}
      items={[
        {
          key: "Task",
          label: (
            <div className="d-flex align-items-center">
              <span className="d-flex me-2 icn-task">{Icons.Tasks}</span>
              <span className="fw-500">Task</span>
            </div>
          ),
        },
        {
          key: "Meeting",
          label: (
            <div className="d-flex align-items-center">
              <span className="d-flex me-2">{Icons.Meeting}</span>
              <span className="fw-500">Meeting</span>
            </div>
          ),
        },
        {
          key: "Announcement",
          label: (
            <div className="d-flex align-items-center">
              <span className="d-flex me-2">{Icons.Announcement}</span>
              <span className="fw-500">Announcement</span>
            </div>
          ),
        },
        {
          key: "Suggestion",
          label: (
            <div className="d-flex align-items-center">
              <span className="d-flex me-2">{Icons.SuggestionStar}</span>
              <span className="fw-500">Suggestion</span>
            </div>
          ),
        },
      ]}
    />
  );

  // FILTER TASK LABEL START


  // FILTER PEOPLE LABEL START
  const filterPeopleRegionData = [
    {
      id: "banglore",
      filterLabel: "Bangalore",
    },
    {
      id: "qusais",
      filterLabel: "Qusais",
    },
    {
      id: "dubai",
      filterLabel: "Dubai",
    },
    {
      id: "abudhabi",
      filterLabel: "AbuDhabi",
    },
  ];

  const filterPeopleDepartmentData = [
    {
      id: "sales",
      filterLabel: "Sales",
    },
    {
      id: "marketing",
      filterLabel: "Marketing",
    },
    {
      id: "production",
      filterLabel: "Production",
    },
    {
      id: "development",
      filterLabel: "Development",
    },
    {
      id: "delivery",
      filterLabel: "Delivery",
    },
  ];

  const filterPeopleRoleData = [
    {
      id: "frontend",
      filterLabel: "Frontend developer",
    },
    {
      id: "areaManager",
      filterLabel: "Area manager",
    },
    {
      id: "regionalDirector",
      filterLabel: "Regional director",
    },
    {
      id: "chiefAdmin",
      filterLabel: "Chief Administrator",
    },
  ];
  // FILTER PEOPLE LABEL END

  // FILTER PEOPLE MENU START
  const filterPeopleMenu = (
    <Menu
      className="filterMenu"
      items={[
        {
          key: "1",
          label: (
            <div className="d-flex align-items-center justify-content-between">
              <span className="fw-600">Filters</span>
              <span
                className="d-flex align-items-center justify-content-center"
                role="button"
                onClick={() => {
                  setShowPeopleFilterDropdown(false);
                }}
              >
                {Icons.CloseDropdown}
              </span>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <>
              <span className={`p small fw-600 text-gray dropdownItemTitle`}>Region</span>
              <div className="dropdownCheckWrap">
                {filterPeopleRegionData.map((item, i) => (
                  <CustomCheckBox key={i} id={item.id + i} label={item.filterLabel} labelClass="filterMenuLabel" />
                ))}
              </div>
            </>
          ),
        },
        {
          key: "3",
          label: (
            <>
              <span className={`p small fw-600 text-gray dropdownItemTitle`}>Department</span>
              <div className="dropdownCheckWrap">
                {filterPeopleDepartmentData.map((item, i) => (
                  <CustomCheckBox key={i} id={item.id + i} label={item.filterLabel} labelClass="filterMenuLabel" />
                ))}
              </div>
            </>
          ),
        },
        {
          key: "4",
          label: (
            <>
              <span className={`p small fw-600 text-gray dropdownItemTitle`}>Role</span>
              <div className="dropdownCheckWrap">
                {filterPeopleRoleData.map((item, i) => (
                  <CustomCheckBox key={i} id={item.id + i} label={item.filterLabel} labelClass="filterMenuLabel" />
                ))}
              </div>
            </>
          ),
        },
      ]}
    />
  );
  // FILTER PEOPLE MENU END

  const [valuePriority, setValuePriority] = useState(1);
  const handleRadioChangePriority = (e) => {
    setValuePriority(e.target.value);
  };

  const [valueDate, setValueDate] = useState(1);
  const handleRadioChangeDate = (e) => {
    setValueDate(e.target.value);
  };

  const [valueAssigned, setValueAssigned] = useState(1);
  const handleRadioChangeAssigned = (e) => {
    setValueAssigned(e.target.value);
  };
// -------------------------
  const priorityData = [
    {
      label: "High",
    },
    {
      label: "Medium",
    },
    {
      label: " Low",
    },
  ];

  const dueDateData = [
    {
      label: "MD",
    },
    {
      label: "My Manager/Senior",
    },
  ];

  const assignedData = [
    {
      label: "High",
    },
    {
      label: "Medium",
    },
  ];

  // SORT MENU START
  const sortMenu = (
    <Menu
      className="filterMenu"
      items={[
        {
          key: "1",
          label: (
            <div className="d-flex align-items-center justify-content-between">
              <span className="fw-600">Sort</span>
              <span
                className="d-flex align-items-center justify-content-center"
                role={"button"}
                onClick={() => {
                  setShowTaskSortDropdown(false);
                }}
              >
                {Icons.CloseDropdown}
              </span>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <>
              <span className={`p small fw-600 text-gray dropdownItemTitle`}>Priority</span>
              <div className="dropdownCheckWrap">
                <CustomRadioButton direction="vertical" handleChange={handleRadioChangePriority} value={valuePriority} radioData={priorityData} />
              </div>
            </>
          ),
        },
        {
          key: "3",
          label: (
            <>
              <span className={`p small fw-600 text-gray dropdownItemTitle`}>Due date</span>
              <div className="dropdownCheckWrap">
                <CustomRadioButton direction="vertical" handleChange={handleRadioChangeDate} value={valueDate} radioData={dueDateData} />
              </div>
            </>
          ),
        },
        {
          key: "4",
          label: (
            <>
              <span className={`p small fw-600 text-gray dropdownItemTitle`}>Assigned</span>
              <div className="dropdownCheckWrap">
                <CustomRadioButton direction="vertical" handleChange={handleRadioChangeAssigned} value={valueAssigned} radioData={assignedData} />
              </div>
            </>
          ),
        },
      ]}
    />
  );
  // SORT MENU END
// ------------------------
  return (
    <>
      <div className={["d-flex"] + " " + ["justify-content-between"] + " " + [className]}>
        <div>
          {title && <h1 className={`page-title d-flex align-items-center ${subtitle === "" ? "mb-0" : ""} `}>{title}</h1>}
          {subtitle && <span className="fw-500 page-title-label text-gray">{subtitle}</span>}
        </div>
        <div>
          <Space size={12}>
            {search && (
              <>
                <CustomSearch />
              </>
            )}
            {create && (
              <>
                <CustomDropDown className="headerBtn" placement="bottomRight" dropdownMenu={menu} element={<CustomButton icon={Icons.Plus} size="default" text="Create" type="dark" />} />
              </>
            )}
            {peopleFilter && (
              <CustomDropDown
                open={ShowPeopleFilterDropdown}
                onOpenChange={(flag) => {
                  setShowPeopleFilterDropdown(flag);
                }}
                placement="bottomRight"
                dropdownMenu={filterPeopleMenu}
                element={<CustomButton className="headerBtn" icon={Icons.Filter} size="default" text="Filter" type="gray-outlined" />}
              />
            )}
            {meetingFilter && <CustomButton className="headerBtn" icon={Icons.Filter} size="default" text="Filter" type="gray-outlined" />}
            {sort && (
              <>
                <CustomDropDown
                  open={ShowTaskSortDropdown}
                  onOpenChange={(flag) => {
                    setShowTaskSortDropdown(flag);
                  }}
                  placement="bottomRight"
                  dropdownMenu={sortMenu}
                  element={<CustomButton className="headerBtn" icon={Icons.Sort} size="default" text="Sort" type="gray-outlined" />}
                />
              </>
            )}
          </Space>
        </div>
      </div>
    </>
  );
}
