import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function UserDataPage() {
	const { token } = useContext(UserContext);
	const [userData, setUserData] = useState(null);

	function getUserData() {
		axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/users/", {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(response => {
			setUserData(response.data);
		});
	}

	return (
		<></>
	)
}