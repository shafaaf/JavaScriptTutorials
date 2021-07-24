const User = ({user}) => {
	const { name, email } = user;

	return (
		<div className="person">
            <h1>Api call:</h1>
			<h3>Name: {name}</h3>
			<h3>Email: {email}</h3>
		</div>
	);
};

export default User;
