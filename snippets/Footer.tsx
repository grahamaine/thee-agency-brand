// React / Next.js credit component — <TheeAgencyCredit /> inside your footer
export default function TheeAgencyCredit() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "14px 12px", fontSize: 13, opacity: 0.85 }}>
      <a href="https://github.com/grahamaine" target="_blank" rel="noopener noreferrer"
         style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "inherit", textDecoration: "none" }}>
        <img src="https://raw.githubusercontent.com/grahamaine/thee-agency-brand/main/logo/thee-agency-mark-orange.png"
             alt="" width={22} height={22} style={{ borderRadius: "50%" }} />
        <span>Powered &amp; rendered by <strong>thee <span style={{ color: "#FF5E1A" }}>AGENCY</span> Consults (UG) Limited</strong></span>
      </a>
    </div>
  );
}
