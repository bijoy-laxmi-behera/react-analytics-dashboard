import "../styles/reportHeader.css";
import logo from "../assets/logo.jpg";
import {
  FaDribbble,
  FaInstagram,
  FaBehance,
  FaGoogle,
  FaPlus,
} from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import {
  MdOutlineNavigateNext,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { FiShare2, FiDownload, FiSliders } from "react-icons/fi";

export default function ReportHeader() {
  return (
    <div className="report-header">
      {/* ================= TOP TOOLBAR ================= */}
      <div className="report-toolbar">
        {/* PLUS */}
        <FaPlus size={22} className="icon-btn" />

        {/* USER CHIPS */}
        <span className="avatar-chip">
          <img src="https://i.pravatar.cc/28?img=11" alt="" />
          Armin A.
        </span>

        <span className="avatar-chip">
          <img src="https://i.pravatar.cc/28?img=12" alt="" />
          Eren Y.
        </span>

        <span className="avatar-chip">
          <img src="https://i.pravatar.cc/28?img=13" alt="" />
          Mikasa A.
        </span>

        {/* LOGO */}
        <img
          src={logo}
          alt="Logo"
          width="32"
          height="32"
          className="avatar-only"
        />

        {/* RIGHT ICONS */}
        <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
          <FiShare2 size={22} className="icon-btn" />
          <FiDownload size={22} className="icon-btn" />
          <FiSliders size={22} className="icon-btn" />

          <div className="timeframe">
            <span className="time-label">Timeframe</span>
            <button className="time-btn">Sep 1 – Nov 30, 2023</button>
          </div>
        </div>
      </div>

      {/* ================= TOP SUMMARY ================= */}
      <div className="report-top">
        {/* LEFT — REVENUE */}
        <div className="revenue-block">
          <h1 className="report-label">New report</h1>
          <h5 className="revenue-title">Revenue</h5>

          <div className="revenue-main">
            <span className="revenue-value">$528,976</span>
            <span className="revenue-decimal">.82</span>

            <span className="growth-pill">▲ 7.9%</span>
            <span className="growth-amount">$27,335.09</span>
          </div>

          <p className="revenue-compare">
            vs prev. $501,641.73 . Jun 1 – Aug 31, 2023
          </p>
        </div>

        {/* RIGHT — KPI MINI */}
        <div className="kpi-mini-row aligned">
          <div className="kpi-mini">
            <p className="kpi-label">Top sales</p>
            <p className="kpi-value">72</p>
            <span className="avatar-chip">
              <img src="https://i.pravatar.cc/20?img=1" alt="" />
              <span className="kpi-sub">
                Mikasa <MdOutlineNavigateNext className="next1" />
              </span>
            </span>
          </div>

          <div className="kpi-mini dark">
            <p className="kpi-label">
              Best deal <CiStar className="symbol" />
            </p>
            <p className="kpi-value">$42,300</p>
            <span className="kpi-sub">
              Rolf Inc.
              <MdOutlineNavigateNext className="next2" />
            </span>
          </div>

          <div className="kpi-mini">
            <p className="kpi-label">Deals</p>
            <p className="kpi-value">256</p>
            <span className="kpi-sub">▼ 5</span>
          </div>

          <div className="kpi-mini active">
            <p className="kpi-label">Value</p>
            <p className="kpi-value active">528k</p>
            <span className="kpi-sub">▼ 7.9%</span>
          </div>

          <div className="kpi-mini">
            <p className="kpi-label">Win rate</p>
            <p className="kpi-value">44%</p>
            <span className="kpi-sub">▼1.2%</span>
          </div>
        </div>
      </div>

      {/* ================= KPI STRIP ================= */}
      <div className="kpi-strip">
        <div className="kpi-chip">
          <img src="https://i.pravatar.cc/20?img=1" alt="" />
          <span>$209,633</span>
          <small>39.63%</small>
        </div>

        <div className="kpi-chip">
          <img src="https://i.pravatar.cc/20?img=2" alt="" />
          <span>$156,841</span>
          <small>29.65%</small>
        </div>

        <div className="kpi-chip">
          <img src="https://i.pravatar.cc/20?img=3" alt="" />
          <span>$117,115</span>
          <small>22.14%</small>
        </div>

        <div className="kpi-chip">
          <span>$45,386</span>
          <small>8.58%</small>
        </div>

        <button className="details-btn">Details</button>
      </div>

      {/* ================= ANALYTICS GRID ================= */}
      <div className="analytics-grid">
        {/* LEFT */}
        <div className="analytics-left">
          {/* REFERRER + DEALS */}
          <div className="referrer-row">
            {/* REFERRER */}
            <div className="panel">
              <div className="panel-header">
                <span>Referrer category</span>
                <button className="filter-btn">
                  Filters
                  <span>
                    <IoFilterSharp />
                  </span>
                </button>
              </div>

              <ul className="referrer-list">
                <li>
                  <span className="ref-left">
                    <FaDribbble className="ref-icon dribbble" />
                    Dribbble
                  </span>
                  <span>$227,459</span>
                  <span>43%</span>
                </li>
                <li>
                  <span className="ref-left">
                    <FaInstagram className="ref-icon instagram" />
                    Instagram
                  </span>
                  <span>$142,823</span>
                  <span>27%</span>
                </li>
                <li>
                  <span className="ref-left">
                    <FaBehance className="ref-icon behance" />
                    Behance
                  </span>
                  <span>$89,935</span>
                  <span>11%</span>
                </li>
                <li>
                  <span className="ref-left">
                    <FaGoogle className="ref-icon google" />
                    Google
                  </span>
                  <span>$37,028</span>
                  <span>7%</span>
                </li>
              </ul>
            </div>

            {/* DEALS */}
            <div className="panel">
              <div className="panel-header">
                <span>Deals amount</span>
                <button className="filter-btn">
                  Filters
                  <span>
                    <IoFilterSharp />
                  </span>
                </button>
              </div>

              <div className="deals-bars refined">
                <div className="deal-pill dribbble">
                  <span className="ref-left">
                    <FaDribbble className="ref-icon dribbble" />
                  </span>
                </div>
                <div className="deal-pill behance">
                  <span className="ref-left">
                    <FaBehance className="ref-icon behance" />
                  </span>
                </div>
                <div className="deal-pill google">
                  <span className="ref-left">
                    <FaGoogle className="ref-icon google" />
                  </span>
                </div>
                <div className="deal-pill instagram striped">
                  <span className="ref-left">
                    <FaInstagram className="ref-icon instagram" />
                  </span>
                </div>
              </div>

              <p className="panel-sub">Deals amount by referrer category</p>
            </div>
          </div>

          {/* PLATFORM VALUE */}
          {/* ================= PLATFORM VALUE ================= */}
          <div className="platform-value">
            {/* HEADER */}
            <div className="platform-value-header">
              <div className="platform-title">
                <FaDribbble />
                <span>Platform value</span>
                <button className="platform-select">Dribbble ▾</button>
              </div>

              <div className="platform-tabs">
                <button className="active">Revenue</button>
                <button>Leads</button>
                <button>W/L</button>
              </div>
            </div>

            {/* BODY */}
            <div className="platform-value-body">
              {/* LEFT RED CARD */}
              <div className="platform-summary">
                <div className="summary-block">
                  <span className="summary-label">Revenue</span>
                  <h3>$18,552</h3>
                </div>

                <div className="summary-block">
                  <span className="summary-label">Leads</span>
                  <p>373 / 276</p>
                </div>

                <div className="summary-block">
                  <span className="summary-label">Win / lose</span>
                  <p>16% · 51 / 318</p>
                </div>
              </div>

              {/* RIGHT CHART */}
              <div className="platform-chart">
                <div className="chart-bars">
                  <div className="chart-col">
                    <span className="chart-value">$6,901</span>
                    <div className="bar striped h-sm"></div>
                    <span className="chart-label">Sep</span>
                  </div>

                  <div className="chart-col">
                    <span className="chart-value">$11,035</span>
                    <div className="bar striped h-lg"></div>
                    <span className="chart-label">Oct</span>
                  </div>

                  <div className="chart-col">
                    <span className="chart-value">$9,288</span>
                    <div className="bar striped h-md"></div>
                    <span className="chart-label">Nov</span>
                  </div>
                </div>

                <div className="chart-axis">
                  <span>$14,500</span>
                  <span>$11,000</span>
                  <span>$7,500</span>
                  <span>$4,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN SALES ================= */}
        <div className="analytics-right">
          <div className="panel sales-panel">
            {/* Header */}
            <div className="panel-header">
              <span>Sales</span>
              <span>Revenue</span>
              <span>Leads</span>
              <span>KPI</span>
              <span>W/L</span>
            </div>

            {/* ===== Row 1 ===== */}
            <div className="sales-row">
              {/* Sales */}
              <div className="cell user">
                <img src="https://i.pravatar.cc/28?img=11" alt="" />
                <span>Armin A.</span>
              </div>

              {/* Revenue */}
              <div className="cell revenue">$209,633</div>

              {/* Leads */}
              <div className="cell leads">
                <span className="pill dark">41</span>
                <span className="pill light">118</span>
              </div>

              {/* KPI */}
              <div className="cell kpi">0.84</div>

              {/* W/L */}
              <div className="cell wl">
                <span className="wl-text">31%</span>
                <span className="pill dark">12</span>
                <span className="pill light">29</span>
                <button className="expand-btn">
                  <MdExpandMore />
                </button>
              </div>
            </div>

            {/* ===== ACTIVE ROW GROUP ===== */}
            <div className="sales-row-group">
              {/* Active Row */}
              <div className="sales-row active">
                {/* Sales */}
                <div className="cell user">
                  <img src="https://i.pravatar.cc/28?img=12" alt="" />
                  <span>Mikasa A.</span>
                </div>

                {/* Revenue */}
                <div className="cell revenue">$156,841</div>

                {/* Leads */}
                <div className="cell leads">
                  <span className="pill dark">54</span>
                  <span className="pill light">103</span>
                </div>

                {/* KPI */}
                <div className="cell kpi">0.89</div>

                {/* W/L */}
                <div className="cell wl">
                  <span className="wl-text">39%</span>
                  <span className="pill dark">21</span>
                  <span className="pill light">33</span>
                  <button className="expand-btn">
                    <MdExpandLess />
                  </button>
                </div>
              </div>

              {/* Expanded Panel */}
              <div className="sales-expanded">
                <div className="expanded-card">
                  {/* Badges */}
                  <div className="badges">
                    <span className="badge">Top sales 💪</span>
                    <span className="badge">Sales streak 🔥</span>
                    <span className="badge">Top review 👍</span>
                  </div>

                  {/* ===== Work with platforms ===== */}
                  <div className="platform-header-row">
                    <span className="platform-title-text">
                      Work with platforms
                    </span>

                    <div className="platform-header-badges">
                      <span className="platform-badge">▲ 3</span>
                      <span className="platform-badge">$156,841</span>
                    </div>
                  </div>

                  <div className="platform-cards-grid">
                    {/* LEFT — DRIBBBLE (BIG CARD) */}
                    <div className="platform-card big">
                      <div className="platform-card-title">
                        <FaDribbble className="ref-icon dribbble" />
                        <span>Dribbble</span>
                      </div>

                      <div className="platform-card-value">
                        <span className="percent">
                          <h2>45.3%</h2>
                        </span>
                        <span className="amount">
                          <h2>$71,048</h2>
                        </span>
                      </div>
                    </div>

                    {/* RIGHT — STACK */}
                    <div className="platform-cards-right">
                      {/* Instagram */}
                      <div className="platform-card">
                        <div className="platform-card-title">
                          <FaInstagram className="ref-icon instagram" />
                          <span>Instagram</span>
                        </div>

                        <div className="platform-card-value">
                          <span className="percent">28.1%</span>
                          <span className="amount">$44,072</span>
                        </div>
                      </div>

                      {/* Google */}
                      <div className="google-block">
                        {/* Main Google card */}
                        <div className="platform-card striped">
                          <div className="platform-card-title">
                            <FaGoogle className="ref-icon google" />
                            <span>Google</span>
                          </div>

                          <div className="platform-card-value">
                            <span className="percent">14.1%</span>
                            <span className="amount">$22,114</span>
                          </div>
                        </div>

                        {/* Dot card */}
                        <div className="google-sub-pill">
                          <span className="dot-group">
                            <span className="dot"></span>
                            <span className="dot"></span>
                          </span>
                          <span className="sub-percent">5.4%</span>
                          <span className="sub-amount">$8,469</span>
                        </div>
                      </div>

                      {/* Other */}
                      <div className="platform-card full other-card">
                        <div className="other-left">
                          <FaBehance className="ref-icon behance" />
                          <span>Other</span>
                        </div>

                        <div className="other-right">
                          <span className="other-percent">7.1%</span>
                          <span className="other-amount">$11,135</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sales Dynamic */}
                  <h6 className="mt">Sales dynamic</h6>

                  <div className="sales-chart">
                    <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                      {/* Grid */}
                      <g className="chart-grid">
                        <line x1="0" y1="30" x2="300" y2="30" />
                        <line x1="0" y1="60" x2="300" y2="60" />
                        <line x1="0" y1="90" x2="300" y2="90" />
                      </g>

                      {/* Line */}
                      <path
                        d="
                  M 0 90
                  C 40 70, 60 60, 80 65
                  S 120 80, 140 55
                  S 180 40, 200 50
                  S 240 70, 260 40
                  S 290 20, 300 30
                "
                        className="chart-line"
                        fill="none"
                      />

                      {/* Points */}
                      <circle cx="80" cy="65" r="3" />
                      <circle cx="140" cy="55" r="3" />
                      <circle cx="200" cy="50" r="3" />
                      <circle cx="260" cy="40" r="3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Row 3 ===== */}
            <div className="sales-row">
              {/* Sales */}
              <div className="cell user">
                <img src="https://i.pravatar.cc/28?img=13" alt="" />
                <span>Eren Y.</span>
              </div>

              {/* Revenue */}
              <div className="cell revenue">$117,115</div>

              {/* Leads (two pills together) */}
              <div className="cell leads">
                <span className="pill dark">22</span>
                <span className="pill light">84</span>
              </div>

              {/* KPI */}
              <div className="cell kpi">0.79</div>

              {/* W/L */}
              <div className="cell wl">
                <span className="wl-text">32%</span>
                <span className="pill dark">7</span>
                <span className="pill light">15</span>
                <button className="expand-btn">
                  <MdExpandMore />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}