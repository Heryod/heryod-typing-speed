import "./Nav.css";
import KeyboardIcon from "../assets/keyboard.svg";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <img className="logo-icon" src={KeyboardIcon} alt="KeyboardIcon" />
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
