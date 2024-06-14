import QRcode from "react-qr-code";
import "./App.css";

const treasure =
  "https://t.me/qrBeastBot/start?startapp=treasure-tZUli2qh3ASLsAqdIysc";

function App() {
  return (
    <>
      <a href={treasure}>
        <QRcode value={treasure} />
      </a>
    </>
  );
}

export default App;
