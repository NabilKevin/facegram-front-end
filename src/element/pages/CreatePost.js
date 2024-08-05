const CreatePost = () => {
  return (
    <main className="mt-5">
      <div className="container py-5">
          <div className="row justify-content-center">
              <div className="col-md-5">
                  <div className="card">
                      <div className="card-header d-flex align-items-center justify-content-between bg-transparent py-3">
                          <h5 className="mb-0">Create new post</h5>
                      </div>
                      <div className="card-body">
                          <form action="my-profile.html">
                              <div className="mb-2">
                                  <label for="caption">Caption</label>
                                  <textarea className="form-control" name="caption" id="caption" cols="30" rows="3"></textarea>
                              </div>

                              <div className="mb-3">
                                  <label for="attachments">Image(s)</label>
                                  <input type="file" className="form-control" id="attachments" name="attachments" multiple/>
                              </div>

                              <button type="submit" className="btn btn-primary w-100">
                                  Share
                              </button>
                          </form>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </main>
  )
}

export default CreatePost