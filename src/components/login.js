function Login(){
    return(
        <div className={"row justify-content-center"}>
            <div className={"col-md-3"}>
                <form className={"card bg-light p-3"}>
                    <div className="mb-3">
                        <label className="form-label">Usuario o email</label>
                        <input type="text" className="form-control" id="username"
                               placeholder="nombre@ejemplo.com"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" className="form-check-input m-1" id="rememberme"/>
                        <label className="form-check-label" for="rememberme">Recordarme</label>
                    </div>
                    <div className="mb-3">
                        <button className={"btn btn-dark"}>Acceder</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Login