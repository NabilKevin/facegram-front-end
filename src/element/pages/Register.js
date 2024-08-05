const Register = ({authController}) => {
  document.title = 'Register'
  return (
    <main className="mt-5">
      <div className="container py-5">
          <div className="row justify-content-center">
              <div className="col-md-5">
                  <div className="card">
                      <div className="card-header d-flex align-items-center justify-content-between bg-transparent py-3">
                          <h5 className="mb-0">Register</h5>
                      </div>
                      <div className="card-body">
                          <form onSubmit={e => authController(e, 'register')}>
                              <div className="mb-2">
                                  <label for="full_name">Full Name</label>
                                  <input type="text" className="form-control" id="full_name" name="full_name"/>
                              </div>

                              <div className="mb-2">
                                  <label for="username">Username</label>
                                  <input type="text" className="form-control" id="username" name="username"/>
                              </div>

                              <div className="mb-3">
                                  <label for="password">Password</label>
                                  <input type="password" className="form-control" id="password" name="password"/>
                              </div>

                              <div className="mb-3">
                                  <label for="bio">Bio</label>
                                  <textarea name="bio" id="bio" cols="30" rows="3" className="form-control"></textarea>
                              </div>

                              <div className="mb-3 d-flex align-items-center gap-2">
                                  <input type="checkbox" id="is_private" name="is_private"/>
                                  <label for="is_private">Private Account</label>
                              </div>

                              <button type="submit" className="btn btn-primary w-100">
                                  Register
                              </button>
                          </form>
                      </div>
                  </div>

                  <div className="text-center mt-4">
                      Already have an account? <a href="/login">Login</a>
                  </div>

              </div>
          </div>
      </div>
  </main>
  )
}

export default Register