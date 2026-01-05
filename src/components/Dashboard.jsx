import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ReportHeader from "./ReportHeader";

import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="container-fluid dashboard">
      <div className="row g-0">
        {/* ================= SIDEBAR ================= */}
        <div className="col-2 sidebar-wrapper">
          <Sidebar />
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="col-10 main-wrapper">
          {/* Top Navbar */}
          <Navbar />

          <div className="content-area">
            {/* ================= SUMMARY HEADER ================= */}
            <ReportHeader />

          </div>
        </div>
      </div>
    </div>
  );
}