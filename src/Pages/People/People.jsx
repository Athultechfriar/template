import { Avatar, Col, Menu, Row, Select, Space, Table } from "antd";
import Icons from "../../Components/Icons/Icons"
import "./people.css";
import profile from "../../Components/public/Images/profile-1.jpg"
import { useState } from "react";
import {company,department,designation,gender,nationality,qualifications,region,role,} from "../../Constants/consts";
import person from "../../Public/Images/icons/person2.svg"
import { persons } from "../../Constants/personConsts";
import PaginationTotal from "../../Components/CustomTable/PaginationTotal";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";
import CustomButton from "../../Components/CustomButton/CustomButton";
import FilterTab from "../../Components/FilterTab/FilterTab";
import profileimg from "../../Components/public/Images/profile-1.jpg"
import CustomOptionsDropDown from "../../Components/CustomOptionsDropDown/CustomOptionsDropDown";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomLink from "../../Components/CustomLink/CustomLink";
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import CustomDatepicker from "../../Components/CustomDatepicker/CustomDatePicker";
import CustomTagPerson from "../../Components/CustomTagPerson/CustomTagPerson";
import CustomSelectPerson from "../../Components/CustomSelectPerson/CustomSelectPerson";
import CustomSelectMultiNoRemove from "../../Components/CustomSelectMultiNoRemove/CustomSelectMultiNoRemove";
import UploadImage from "../../Components/UploadImage/UploadImage";
import CustomModal from "../../Components/CustomModal/CustomModal";
const { Option } = Select;

export default function Peoples() {
  const [selectValue, setSelectValue] = useState();
  const [viewMode, setViewMode] = useState("list");
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [isUserEdit, setIsUserEdit] = useState(false);

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  // TABLE DATA
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return (
          <div className="d-flex align-items-center">
            <Space>
              <Avatar size={28} src={profileimg} />
              <span>{text}</span>
            </Space>
          </div>
        );
      },
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <span className="text-end d-block">
            <CustomOptionsDropDown placement="bottomRight" dropdownMenu={menu} />
          </span>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Rahul Singh",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Sales",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
    },
    {
      key: "2",
      name: "Akbar Ali",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Marketing",
      email: "akbar@gmail.com",
      phone: "+995-445-551-4048",
    },
    {
      key: "3",
      name: "Zainul Abdeen",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Delivery",
      email: "zainul@gmail.com",
      phone: "+7-445-557-681",
    },
    {
      key: "4",
      name: "Ali Mohamed",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Production",
      email: "ali@gmail.com",
      phone: "+7-940-555-1217",
    },
    {
      key: "5",
      name: "Rahul Singh",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Sales",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
    },
    {
      key: "6",
      name: "Akbar Ali",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Marketing",
      email: "akbar@gmail.com",
      phone: "+995-445-551-4048",
    },
    {
      key: "7",
      name: "Zainul Abdeen",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Delivery",
      email: "zainul@gmail.com",
      phone: "+7-445-557-681",
    },
    {
      key: "8",
      name: "Ali Mohamed",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Production",
      email: "ali@gmail.com",
      phone: "+7-940-555-1217",
    },
    {
      key: "9",
      name: "Rahul Singh",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Sales",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
    },
    {
      key: "10",
      name: "Akbar Ali",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Marketing",
      email: "akbar@gmail.com",
      phone: "+995-445-551-4048",
    },
    {
      key: "11",
      name: "Zainul Abdeen",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Delivery",
      email: "zainul@gmail.com",
      phone: "+7-445-557-681",
    },
    {
      key: "12",
      name: "Ali Mohamed",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Production",
      email: "ali@gmail.com",
      phone: "+7-940-555-1217",
    },
    {
      key: "13",
      name: "Rahul Singh",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Sales",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
    },
    {
      key: "14",
      name: "Akbar Ali",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Marketing",
      email: "akbar@gmail.com",
      phone: "+995-445-551-4048",
    },
    {
      key: "15",
      name: "Zainul Abdeen",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Delivery",
      email: "zainul@gmail.com",
      phone: "+7-445-557-681",
    },
    {
      key: "16",
      name: "Ali Mohamed",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Production",
      email: "ali@gmail.com",
      phone: "+7-940-555-1217",
    },
    {
      key: "17",
      name: "Zainul Abdeen",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Delivery",
      email: "zainul@gmail.com",
      phone: "+7-445-557-681",
    },
    {
      key: "18",
      name: "Ali Mohamed",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Production",
      email: "ali@gmail.com",
      phone: "+7-940-555-1217",
    },
    {
      key: "19",
      name: "Rahul Singh",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Sales",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
    },
    {
      key: "20",
      name: "Akbar Ali",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Marketing",
      email: "akbar@gmail.com",
      phone: "+995-445-551-4048",
    },
    {
      key: "21",
      name: "Zainul Abdeen",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Delivery",
      email: "zainul@gmail.com",
      phone: "+7-445-557-681",
    },
    {
      key: "22",
      name: "Ali Mohamed",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Production",
      email: "ali@gmail.com",
      phone: "+7-940-555-1217",
    },
    {
      key: "23",
      name: "Zainul Abdeen",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Delivery",
      email: "zainul@gmail.com",
      phone: "+7-445-557-681",
    },
    {
      key: "24",
      name: "Ali Mohamed",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Production",
      email: "ali@gmail.com",
      phone: "+7-940-555-1217",
    },
    {
      key: "25",
      name: "Rahul Singh",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Sales",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
    },
    {
      key: "26",
      name: "Akbar Ali",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Marketing",
      email: "akbar@gmail.com",
      phone: "+995-445-551-4048",
    },
    {
      key: "27",
      name: "Zainul Abdeen",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Delivery",
      email: "zainul@gmail.com",
      phone: "+7-445-557-681",
    },
    {
      key: "28",
      name: "Ali Mohamed",
      region: "Bangalore",
      role: "Frontend Developer",
      department: "Production",
      email: "ali@gmail.com",
      phone: "+7-940-555-1217",
    },
  ];
  // TABLE DATA END

  // FILTER TAB DATA
  const FilterTabListData = [
    {
    //   label: (
    //     <>
    //       All<span className="d-inline-block task">14</span>
    //     </>
    //   ),
      key: "1",
      children: (
        <>
          <Table
            rowSelection={true}
            columns={columns}
            dataSource={dataSource}
            pagination={{ showTotal: (total, range) => <PaginationTotal total={total} range={range} /> }}
            className="custom-table"
            id="custom-table"
          />
        </>
      ),
    }
  ];

 
  // FILTER TAB DATA END
  const PeopleEdit = ({ key }) => {
    key === "1" && setIsUserEdit(true);
    setIsAddEmployeeModalOpen(true);
  };
  const menu = (
    <Menu
      onClick={PeopleEdit}
      items={[
        {
          key: "1",
          label: "Edit",
        },
      ]}
    />
  );

  const profileData = [
    {
      profileDataImg: "/Images/profile/profile-1.jpg",
      profileDataName: "Rahul Singh",
      profileDataEmail: "Rahulsingh@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
    {
      profileDataImg: "/Images/profile/profile-2.jpg",
      profileDataName: "Akbar Ali",
      profileDataEmail: "akvbarali@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
    {
      profileDataImg: "/Images/profile/profile-1.jpg",
      profileDataName: "Georrge Mathew",
      profileDataEmail: "Rahulsingh@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
    {
      profileDataImg: "../../public/Images/profile/profile-4.jpg",
      profileDataName: "Zainul Abdeen",
      profileDataEmail: "Rahulsingh@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
    {
      profileDataImg: "/Images/profile/profile-3.jpg",
      profileDataName: "Rahul Singh",
      profileDataEmail: "Rahulsingh@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
    {
      profileDataImg: "/Images/profile/profile-3.jpg",
      profileDataName: "Anne Mary",
      profileDataEmail: "Rahulsingh@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
    {
      profileDataImg: "/Images/profile/profile-4.jpg",
      profileDataName: "Jay Mehta",
      profileDataEmail: "Rahulsingh@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
    {
      profileDataImg: "/Images/profile/profile-3.jpg",
      profileDataName: "Anjali Nair",
      profileDataEmail: "Rahulsingh@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
    {
      profileDataImg: "/Images/profile/profile-5.jpg",
      profileDataName: "Ahmed Iqbal",
      profileDataEmail: "Rahulsingh@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
    {
      profileDataImg: "/Images/profile/profile-1.jpg",
      profileDataName: "Shahjahan Ali",
      profileDataEmail: "Rahulsingh@gmail.com",
      profileDataLocation: "Bangalore",
      profileDataProfession: "Area manager",
    },
  ];

  const showAddEmployee = () => {
    setIsUserEdit(false);
    setIsAddEmployeeModalOpen(true);
  };
  const handleAddEmployeeCancel = () => {
    setIsAddEmployeeModalOpen(false);
  };

  const AddEmployeeReportToOptions = [{ label: "yooo", value: "yooo" }];

  const AddPeopleModalBody = () => {
    const [employeeName, setEmployeeName] = useState();
    const [employeeReportTo, setEmployeeReportTo] = useState();
    const [employeeDesignation, setEmployeeDesignation] = useState();
    const [employeeUseRole, setEmployeeUseRole] = useState();
    const [employeeDepartment, setEmployeeDepartment] = useState();
    const [employeeCompany, setEmployeeCompany] = useState();
    const [employeeRegion, setEmployeeRegion] = useState();
    const [employeeDateOfJoining, setEmployeeDateOfJoining] = useState();
    const [employeePhone, setEmployeePhone] = useState();
    const [employeeEmail, setEmployeeEmail] = useState();
    const [employeeDateOfBirth, setEmployeeDateOfBirth] = useState();
    const [employeeGender, setEmployeeGender] = useState();
    const [employeeQualification, setEmployeeQualification] = useState();
    const [employeeNationality, setEmployeeNationality] = useState();
    const [employeeProfile, setEmployeeProfile] = useState();
    const [imageUrl, setImageUrl] = useState("");
    const uploadImgChange = (e) => {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    };

    return (
      <>
        <Row gutter={[16, 20]}>
          <Col xs={24}>
            <UploadImage
              uploadIcon={<img src={person} width={17} height={22} />}
              handleChange={uploadImgChange}
              ImgUploadText="Upload image"
              value={imageUrl}
              id="customID"
              name={"customName"}
            />
          </Col>
          <Col xs={24}>
            <CustomInput
              label={"Name"}
              id="AddEmployeeName"
              dataTestId={"AddEmployeeName"}
              name={"AddEmployeeName"}
              value={employeeName}
              handleChange={(e) => setEmployeeName(e.target.value)}
            />
          </Col>
          <Col sm={12}>
            <CustomSelectPerson
              label={"Reports to"}
              id={"AddEmployeeReportTo"}
              name="AddEmployeeReportTo"
              value={employeeReportTo}
              handleChange={(value) => setEmployeeReportTo(value)}
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
          </Col>
          <Col sm={12}>
            <CustomSelect
              label={"Designation"}
              id={"AddEmployeeDesignation"}
              name="AddEmployeeDesignation"
              options={designation}
              value={employeeDesignation}
              handleChange={(value) => setEmployeeDesignation(value)}
            />
          </Col>
          <Col sm={12}>
            <CustomSelect
              label={"User role"}
              id={"AddEmployeeUserRole"}
              name="AddEmployeeUserRole"
              options={role}
              value={employeeUseRole}
              handleChange={(value) => setEmployeeUseRole(value)}
            />
          </Col>
          <Col sm={12}>
            <CustomSelect
              label={"Department"}
              id={"AddEmployeeDepartment"}
              name="AddEmployeeDepartment"
              options={department}
              value={employeeDepartment}
              handleChange={(value) => setEmployeeDepartment(value)}
            />
          </Col>
          <Col sm={24}>
            <CustomSelect
              label={"Company"}
              id={"AddEmployeeCompany"}
              name="AddEmployeeCompany"
              options={company}
              value={employeeCompany}
              handleChange={(value) => setEmployeeCompany(value)}
              disabled={true}
            />
          </Col>
          <Col sm={12}>
            <CustomSelect
              label={"Region"}
              id={"AddEmployeeRegion"}
              name="AddEmployeeRegion"
              options={region}
              value={employeeRegion}
              handleChange={(value) => setEmployeeRegion(value)}
            />
          </Col>
          <Col sm={12}>
            <CustomDatepicker
              label={"Date of joining"}
              id={"AddEmployeeDateOfJoining"}
              name="AddEmployeeDateOfJoining"
              value={employeeDateOfJoining}
              handleChange={(date, dateString) => setEmployeeDateOfJoining(date)}
            />
          </Col>
          <Col xs={24}>
            <h3 className="small-head mt-3 mb-0">Personal details</h3>
          </Col>
          <Col xs={12}>
            <CustomInput
              label={"Phone"}
              id="AddEmployeePhone"
              dataTestId={"AddEmployeePhone"}
              Phone={"AddEmployeeName"}
              value={employeePhone}
              handleChange={(e) => setEmployeePhone(e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <CustomInput
              label={"Email"}
              id="AddEmployeeEmail"
              dataTestId={"AddEmployeeEmail"}
              name={"AddEmployeeEmail"}
              value={employeeEmail}
              handleChange={(e) => setEmployeeEmail(e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <CustomDatepicker
              label={"Date of birth"}
              id="employeeDateOfBirth"
              name="employeeDateOfBirth"
              value={employeeDateOfBirth}
              handleChange={(date, dateString) => setEmployeeDateOfBirth(date)}
            />
          </Col>
          <Col xs={12}>
            <CustomSelect
              label={"Gender"}
              id={"AddEmployeeGender"}
              name="AddEmployeeGender"
              options={gender}
              value={employeeGender}
              handleChange={(value) => setEmployeeGender(value)}
            />
          </Col>
          <Col xs={24}>
            <CustomSelectMultiNoRemove
              label={"Qualifications"}
              id={"AddEmployeeQualifications"}
              name="AddEmployeeQualifications"
              options={qualifications}
              value={employeeQualification}
              handleChange={(value) => setEmployeeQualification(value)}
            />
          </Col>
          <Col sm={12}>
            <CustomSelect
              label={"Nationality"}
              id={"AddEmployeeNationality"}
              name="AddEmployeeNationality"
              options={nationality}
              value={employeeNationality}
              handleChange={(value) => setEmployeeNationality(value)}
            />
          </Col>
          <Col sm={12}>
            <CustomInput
              label={"Profile"}
              id="AddEmployeeProfile"
              dataTestId={"AddEmployeeProfile"}
              name={"AddEmployeeProfile"}
              value={employeeProfile}
              handleChange={(e) => setEmployeeProfile(e.target.value)}
            />
          </Col>
        </Row>
        {isUserEdit && (
          <CustomLink className={"d-block mt-2 pt-1"} text={"Delete employee"} href="#" type={"underline"} />
        )}
      </>
    );
  };

  return (
    <>
      <header>
        <title>GrandPMS | People</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </header>
      <Layout>
        <div className={`space-32 ${viewMode === "chart" ? 'ChartViewActive' : ""}`}>
          <Header   
            title={
              <>
                People{" "}
                <span className="ms-3 d-inline-flex">
                  <CustomButton icon={Icons.Plus} size="small" type="dark" handleClick={showAddEmployee} />
                </span>
              </>
            }
            search={true}
            peopleFilter={true}
            sort={true}
          />
          <FilterTab
            className="space-top-32"
            item={
              viewMode === "list"
                ? FilterTabListData :""
            }
          />
        </div>
      </Layout>
      <CustomModal
        title={isUserEdit ? "Edit employee" : "Add employee"}
        subtitle={!isUserEdit && "Add a new employee to your organization by providing the details below"}
        primaryBtnHandleText={!isUserEdit ? "Add" : "Update changes"}
        modalOpen={isAddEmployeeModalOpen}
        handleCancel={handleAddEmployeeCancel}
        modalBody={<AddPeopleModalBody />}
      />
    </>
  );
}
