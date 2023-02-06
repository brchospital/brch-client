import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>გვერდი ვერ მოიძებნა</h1>
      <p>შეცდომაააა 💊 💉 🩸</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
