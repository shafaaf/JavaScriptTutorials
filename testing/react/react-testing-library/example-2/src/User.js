const User = ({user}) => {
	const { name, email } = user;

	return (
		<div className="person">
			<h2>Name: {name}</h2>
			<h3>Email: {email}</h3>
		</div>
	);
};

export default User;
