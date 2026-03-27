function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <div className="background-glow background-glow--one" />
      <div className="background-glow background-glow--two" />
      <div className="page-wrapper">{children}</div>
    </div>
  );
}

export default MainLayout;
