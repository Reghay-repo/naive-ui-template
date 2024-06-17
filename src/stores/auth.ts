import {defineStore} from "pinia";
import type {User} from "@/types/user";
import {router} from "@/router";
import {getCurrentUser, getUserById} from "@/api/user";

import {login, resetPassword, resetPasswordRequest} from "@/api/auth";

export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => ({
    /*user: JSON.parse(localStorage.getItem('user')),*/
    user: {} as User,
    current_user: {} as User,
    isLoggedIn: false,
    token: "",
  }),
  actions: {
    async GET_CURRENT_USER() {
      try {
        const data = await getCurrentUser();
        this.user = await getUserById(data.sub);
        this.current_user = data;
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    async LOGIN(email: string, password: string) {
      try {
        const response = await login(email, password);
        this.token = response.data.token;
        this.isLoggedIn = true;
        await router.push("/");
      } catch (error: any) {
        console.log(error);
        this.token = "";
        this.isLoggedIn = false;
        return Promise.reject(error);
      }
    },
    async LOGOUT() {
      this.user = {} as User;
      this.isLoggedIn = false;
      this.token = "";
      await router.push("/auth/login");
    },
    async RESET_PASSWORD_REQUEST(email: string) {
      try {
         await resetPasswordRequest(email);
        await router.push({ name: "reset-password-request-success" });
      } catch (error: any) {
        console.log(error);
        this.token = "";
        this.isLoggedIn = false;
        return Promise.reject(error);
      }
    },
    async RESET_PASSWORD(
      token: string,
      password: string,
      password_confirmation: string
    ) {
      try {
       await resetPassword(
          token,
          password,
          password_confirmation
        );
        await router.push({ name: "reset-password-success" });
      } catch (error: any) {
        console.log(error);
        this.token = "";
        this.isLoggedIn = false;
        return Promise.reject(error);
      }
    },
  },
  persist: true,
});
