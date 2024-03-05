// Code: Landing page
export default function LP() {
  // create giant text for WIP in the center of the page
  const renderWIP = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 80px)",
          fontSize: "4rem",
        }}
      >
        <h1 style={{ color: "white" }}>WIP</h1>
      </div>
    );
  };
  return <main>{renderWIP()}</main>;
}
