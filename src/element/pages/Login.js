const Login = ({authController}) => {
    document.title = 'login'
  return (
    <main className="mt-5">
      <div className="container py-5">
          <div className="row justify-content-center">
              <div className="col-md-5">
                  <div className="card">
                      <div className="card-header d-flex align-items-center justify-content-between bg-transparent py-3">
                          <h5 className="mb-0">Login</h5>
                      </div>
                      <div className="card-body">
                          <form onSubmit={e => authController(e, 'login')}>
                              <div className="mb-2">
                                  <label for="username">Username</label>
                                  <input type="text" className="form-control" id="username" name="username"/>
                              </div>

                              <div className="mb-3">
                                  <label for="password">Password</label>
                                  <input type="password" className="form-control" id="password" name="password"/>
                              </div>

                              <button type="submit" className="btn btn-primary w-100">
                                  Login
                              </button>
                          </form>
                      </div>
                  </div>

                  <div className="text-center mt-4">
                      Don't have account? <a href="/register">Register</a>
                  </div>

              </div>
          </div>
      </div>
  </main>
  )
}

export default Login