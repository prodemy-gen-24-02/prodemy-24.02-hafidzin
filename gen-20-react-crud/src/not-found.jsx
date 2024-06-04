import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="ot-found" className="w-screen h-screen text-center content-center">
      <h1 className="text-8xl font-bold">Oops!</h1>
      <p className="pt-8 text-4xl">Sorry, an unexpected error has occurred.</p>
      <p className="pt-8 text-4xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}