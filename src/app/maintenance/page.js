"use client";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#f1f3f4] flex flex-col items-center justify-center px-4" style={{ fontFamily: "arial, sans-serif" }}>
      <div className="max-w-xl w-full">

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="36" stroke="#dadce0" strokeWidth="3" fill="none"/>
            <line x1="40" y1="16" x2="40" y2="40" stroke="#dadce0" strokeWidth="3" strokeLinecap="round"/>
            <line x1="22" y1="24" x2="40" y2="40" stroke="#dadce0" strokeWidth="3" strokeLinecap="round"/>
            <line x1="58" y1="24" x2="40" y2="40" stroke="#dadce0" strokeWidth="3" strokeLinecap="round"/>
            <line x1="14" y1="42" x2="40" y2="40" stroke="#dadce0" strokeWidth="3" strokeLinecap="round"/>
            <line x1="66" y1="42" x2="40" y2="40" stroke="#dadce0" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="40" cy="40" r="6" fill="#dadce0"/>
          </svg>
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: "22px",
          fontWeight: "normal",
          color: "#202124",
          marginBottom: "8px",
          lineHeight: "1.4",
        }}>
          This site can't be reached
        </h1>

        {/* Domain */}
        <p style={{ fontSize: "14px", color: "#5f6368", marginBottom: "20px", lineHeight: "1.6" }}>
          <strong>starreachapp.com</strong> took too long to respond.
        </p>

        {/* Try */}
        <p style={{ fontSize: "14px", color: "#5f6368", marginBottom: "6px" }}>Try:</p>
        <ul style={{
          fontSize: "14px",
          color: "#5f6368",
          paddingLeft: "20px",
          marginBottom: "24px",
          lineHeight: "2.2",
        }}>
          <li>Checking the connection</li>
          <li>Checking the proxy and the firewall</li>
          <li>Running Windows Network Diagnostics</li>
        </ul>

        {/* Error code */}
        <p style={{ fontSize: "12px", color: "#9aa0a6", marginBottom: "28px" }}>
          ERR_CONNECTION_TIMED_OUT
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: "#1a73e8",
              color: "white",
              border: "none",
              padding: "9px 18px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: "500",
              cursor: "pointer",
              fontFamily: "arial, sans-serif",
            }}
          >
            Reload
          </button>
          <button
            onClick={() => alert("ERR_CONNECTION_TIMED_OUT\n\nThe connection to starreachapp.com timed out.")}
            style={{
              background: "none",
              color: "#1a73e8",
              border: "1px solid #dadce0",
              padding: "9px 18px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: "500",
              cursor: "pointer",
              fontFamily: "arial, sans-serif",
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}