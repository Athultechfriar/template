
import { Sidebar } from "../Sidebar/Sidebar"
import "./Layout.css"

export default function Layout({children, className}) {
  return (
    <>
      <div className="pageWrapper">
        <div className="sidebarWrapper">
          <Sidebar/>
        </div>
        <main className={["main", className].join(' ')}>
          {children}
        </main>
      </div>
    </>
  )
}