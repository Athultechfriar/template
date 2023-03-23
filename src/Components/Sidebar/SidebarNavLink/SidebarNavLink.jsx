import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import "./SidebarNavLink.css";

const SidebarNavLink = ({ href, exact, name, icon, activeIcon, ...props }) => {
  const pathname = window.location.pathname;
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link to={href}>
      <Tooltip
        placement="bottom"
        title={name}
        showArrow={false}
        overlayClassName="SidebarLinkTooltip"
      >
        <a {...props}>{isActive ? activeIcon : icon}</a>
      </Tooltip>
    </Link>
  );
};

SidebarNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

SidebarNavLink.defaultProps = {
  exact: false,
};

export default SidebarNavLink;
