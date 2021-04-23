import { useEffect, useState } from "react";
import { getApi } from "./api";
import { User } from "./types";

export const useFetchSomeItems = () => {
  const api = getApi();
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = () => {
    api
      .get<{ users: User[] }>("/users", { limit: 10 })
      .then(({ data }) => {
        if (data.success) {
          setUsers(data.result.users);
        } else {
          console.error(data.error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(fetchUsers, []);
  return { users, fetchUsers };
};
