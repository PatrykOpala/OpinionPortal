import { IUserStore } from "../../types/interfaces/user-store.interface";

export const userState: IUserStore = {
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