import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
	return fetch('http://177.72.161.199:7770/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: JSON.stringify(credentials)
	})
		.then(data => data.json())
}

export default function Login( { setToken } ) {
	const Background = "https://source.unsplash.com/WEQbe2jBg40/600x1200"

	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
		  username,
		  password
		});
		setToken(token);
	}

	return (
		<div className = "container-fluid ps-md-0">
			<div className = "row g-0">
				<div className = "d-none d-md-flex col-md-4 col-lg-6" 
				style = { { 
				backgroundImage: `url(${Background})`,
				backgroundSize: "cover",
				backgroundPosition: "center"
				} } ></div>

				<div className = "col-md-8 col-lg-6">
					<div className = "login d-flex align-items-center py-5" style = { { minHeight: "100vh"  } } >
						<div className = "container">
							<div className = "row">
								<div className = "col-md-9 col-lg-8 mx-auto">
									<h2 className = "text-center mb-4">Log In</h2>

									<form onSubmit= { handleSubmit } >
										<label htmlFor="uname" />
										<input type="text" className = "mb-3" placeholder="usuário" name="uname" required 
												onChange= { e => setUserName(e.target.value) } />

										<label htmlFor="psw" />
										<input type="password" className = "mb-3" placeholder="senha" name="psw" required
												onChange= { e => setPassword(e.target.value) } />
										
										<div>
											<button type="submit" 
											className = "btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
											style = { { fontSize: "0.9rem", letterSpacing: "0.05rem", padding: ".75rem 1rem" } }
											>LOGIN</button>
										</div>
									</form>
								</div>

								{/*<div>
									<p> <span>AVISO</span> <br />
									Este sistema é protegido por leis de direitos autorais. 
									A reprodução ou distribuição não autorizada deste sistema ou de 
									qualquer parte dele resultará em serveras punições civis e 
									criminais, e os infratores serão punidos sob a máxima extensão 
									possível dentro da lei.
									</p>
								</div>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Login.propTypes = 
{
	setToken: PropTypes.func.isRequired
};