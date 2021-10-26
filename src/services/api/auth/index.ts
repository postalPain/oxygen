import apiUrls from "config/apiUrls";
import { ISignUpPayload } from "modules/auth/types";
import request from "../request";

interface ISignInBody {
  email: string;
  password: string;
}

const signIn = (body: ISignInBody) => request.post('login', body);

const auth = {
  signUp: (data: ISignUpPayload) => request.post(apiUrls.signUp, data),
  signOut: () => request.post(apiUrls.signOut),
  signIn,
};

export default auth;