const Footer = ({ slideAnimation }) => {
  return (
    <>
      <div
        className={`footer ${
          slideAnimation ? "slideOut-footer" : "slideIn-footer"
        }`}
      >
        Footer
      </div>
    </>
  );
};

export default Footer;
