import React from "react";
import styles from "./Main.module.css";

export function Message(rawRrror:unknown) {
	const error = rawRrror as Error
	
	return <div>{error.message}</div>;
}
