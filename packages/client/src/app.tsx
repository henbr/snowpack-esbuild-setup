import { h, render } from "preact";
import { Main } from "./components/main";

render(<Main title={"Things and stuff"} />, document.getElementById("app")!);
