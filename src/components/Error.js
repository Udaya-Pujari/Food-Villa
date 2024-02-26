import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <di>
        <h1>oops ! </h1>
        <h2>Something went wrong</h2>
        <hr></hr>
        <h2>
          {err.status}:{err.statusText}
        </h2>
      </di>
    </>
  );
};
export default Error;
