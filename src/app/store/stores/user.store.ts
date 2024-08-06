import { UserStore } from "../../types/types";

export const userState: UserStore = {
    user: {
        id: 0,
        email: "",
        name: "",
        type: "",
        user_uuid: "",
        delete_user: false,
        isEmpty: true
    }
};