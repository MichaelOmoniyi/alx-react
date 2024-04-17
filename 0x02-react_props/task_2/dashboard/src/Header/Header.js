import logo from "../assets/HolbertonLogo.jpg";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}
