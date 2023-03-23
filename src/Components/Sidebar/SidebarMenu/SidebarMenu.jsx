import React from 'react'
import Icons from "../../Icons/Icons";
import SidebarNavLink from "../SidebarNavLink/SidebarNavLink";
import "./SidebarMenu.css"

const SidebarMenu = () => {
  const navLinks = [
    {
      href: "/dashboard",
      activeIcon: Icons.DashboardActive,
      Icon: Icons.Dashboard,
      name: "Dashboard",
      exact: true,
    },
    {
      href: "/tasks",
      activeIcon: Icons.TasksActive,
      Icon: Icons.Tasks,
      name: "Tasks",
      exact: true,
    },
    {
      href: "/meetings",
      activeIcon: Icons.MeetingActive,
      Icon: Icons.Meeting,
      name: "Meeting",
      exact: true,
    },
    {
      href: "/suggestion",
      activeIcon: Icons.SuggestionsActive,
      Icon: Icons.Suggestions,
      name: "Suggestions",
      exact: true,
    },
    {
      href: "/people",
      activeIcon: Icons.PeopleActive,
      Icon: Icons.People,
      name: "People",
      exact: true,
    },
    {
      href: "/companies",
      activeIcon: Icons.CompaniesActive,
      Icon: Icons.Companies,
      name: "Companies",
      exact: false,
    },
  ];

  return (
    <>
      <nav>
        {navLinks.map((link, i) => {
          return (
            <li className="navItem" key={i}>
              <SidebarNavLink exact={link.exact} href={link.href} className="navLink" activeIcon={link.activeIcon} icon={link.Icon} name={link.name} />
            </li>
          )
        })}
      </nav>
    </>
  )
}

export default SidebarMenu

