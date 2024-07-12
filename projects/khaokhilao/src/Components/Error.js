import { useRouteError } from "react-router-dom";
import { ERROR_IMAGE } from "../utils/constant";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <img  src={ERROR_IMAGE} />
            <h1>{err.status} {err.statusText}</h1>
            <h3>Error: {err?.error?.message}</h3>
        </div>
    )
}

export default Error;