import { User } from "@lib/functions/auth";
import useLogin from "@hooks/useLogin";
import { createContext } from "react";



export const UserContext = createContext<User>({} as User);