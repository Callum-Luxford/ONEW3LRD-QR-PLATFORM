function CompanyLogo({ src, alt = "Company Logo", options = {} }) {
  if (!src) return null;

  const style = {
    width: options.width || "180px",
    maxWidth: options.maxWidth || "100%",
  };

  return (
    <div className="company-logo">
      <img src={src} alt={alt} style={style} />
    </div>
  );
}

export default CompanyLogo;
