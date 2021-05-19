import React from 'react';

const Login = (props) => {

    const {
    email,
    setEmail,
    password,
    setPassword,
    handelLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError, 
    passwrodError,
} = props


    return(

        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input 
                type="text" 
                autoFocus 
                required value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwrodError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handelLogin}>Sign in</button>
                        <p>Do not have a account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign up</span></p>

                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>    

                    )}

                </div>
            </div>
        </section>

    ) 


};

export default Login;