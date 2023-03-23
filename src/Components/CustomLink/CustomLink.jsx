import { Link } from "react-router-dom"
import "./CustomLink.css"

export default function CustomLink({ href, text, className, type, size, handleClick }) {
  const classes = `customLink ${className ? className : "" } ${type === "underline" ? 'underline' : ""} ${size === "large" ? 'large' : size === "small" ? 'small' : 'medium'}`
  return (
    <>
      <Link to={href}><a onClick={handleClick}  className={classes}> {text} </a></Link>
    </>
  )
}