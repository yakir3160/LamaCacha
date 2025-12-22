import { create } from "zustand";
import {getUsers} from "../services/users.service";
const useUsersStore = create((set) => ({
    users: getUsers() || [],
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
    removeUser: (id) => set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
}));

export default useUsersStore;
