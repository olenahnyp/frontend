export default function BlobTest() {
    return (
      <div style={{ position: "relative", minHeight: "100vh", background: "#FFF0F3" }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Пляма через <code>img</code></h1>
  
        <img
  src="/red-blob.jpg"
  alt="Red blob"
  style={{
    position: "absolute",
    top: "100px",
    left: "50px",
    width: "150px",
    height: "150px",
    backgroundColor: "red", // <--- тимчасова заливка
    zIndex: 1,
    border: "3px dashed green",
  }}
/>
      </div>
    );
  }
  