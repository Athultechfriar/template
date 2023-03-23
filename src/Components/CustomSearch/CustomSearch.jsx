import { Input } from "antd";
import Icons from "../Icons/Icons";
import "./CustomSearch.css"

export default function CustomSearch() {
  return (
    <>
      <Input className="customSearch" size="large" placeholder="Search" prefix={Icons.Search} />
    </>
  )
}