import React, { useEffect, useState } from "react";

const usePersistenceState = () => {
	const [searchTerm, setSearchTerm] = useState(
		localStorage.getItem("searchTerm")
	);
	useEffect(() => {
		localStorage.setItem("searchTerm", searchTerm);
	}, [searchTerm]);

}
export default usePersistenceState;