import { h, JSX } from "preact";
import { useState, useEffect } from "preact/hooks";

export interface Props {
  readonly title: string;
}

export function Main(props: Props): JSX.Element {
  const [serverMessage, setServerMessage] = useState(undefined);

  useEffect(() => {
    fetch("api/test")
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  });

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{`Server message: ${serverMessage === undefined ? "Loading..." : serverMessage}`}</p>
    </div>
  );
}
