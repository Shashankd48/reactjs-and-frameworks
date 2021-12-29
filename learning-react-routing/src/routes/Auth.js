import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Auth() {
   const Auth = useContext(AuthContext);
   const handleLogin = () => {};

   return (
      <div>
         <button className="btn btn-primary" onClick={handleLogin}>
            Login
         </button>
      </div>
   );
}
