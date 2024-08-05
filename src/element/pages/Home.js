import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
  document.title = 'Home'
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [followers, setFollowers] = useState([])

  let page = 0
  // Mengambil data postingan
  const getPost = async (page) => {
    const response = await axios.get('http://localhost:8000/api/v1/posts?page=' + page, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    setPosts(prev => [...prev, ...response.data.posts])
  }

  // membuat function saat scroll end
  const scrollend = () => {
    page += 1
    getPost(page);
  }

  // membuat function mengambil user yang belum di follow
  const getUsers = async () => {
    const response = await axios.get('http://localhost:8000/api/v1/users', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    setUsers(prev => [...prev, ...response.data.users])
  }

  // membuat function mengambil user yang belum di acc
  const getAccept = async () => {
    const response = await axios.get(`http://localhost:8000/api/v1/${localStorage.getItem('username')}/followers`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    setFollowers(prev => [...prev, ...response.data.followers.filter(follower => !follower.is_requested)])
  }


  useEffect(() => {
    getPost(page);
    getUsers();
    window.addEventListener('scrollend', scrollend)
    return () => window.removeEventListener('scrollend', scrollend)
  }, [])
  useEffect(() => {
    console.log(users);
    
  }, [users])
  return (
    <main className="mt-5">
      <div className="container py-5">
          <div className="row justify-content-between">
              <div className="col-md-8">
                  <h5 className="mb-3">News Feed</h5>
                  {
                    posts.map((post, i) => (
                      <div className="card mb-4" key={i}>
                          <div className="card-header d-flex align-items-center justify-content-between bg-transparent py-3">
                              <h6 className="mb-0">{post.user.full_name}</h6>
                              <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="card-body">
                              <div className="card-images mb-2">
                                {
                                  post.post_attachments.map((att, ii) => (
                                    <img src={`http://localhost:8000/storage/${att.storage_path}`} alt="image" className="w-100" key={ii}/>
                                  ))
                                }
                              </div>
                              <p className="mb-0 text-muted"><b><a href="user-profile.html">{post.user.username}</a></b> {post.caption}</p>
                          </div>
                      </div>
                    ))
                  }
              </div>
              <div className="col-md-4">
                  <div className="request-follow mb-4">
                      <h6 className="mb-3">Follow Requests</h6>
                      <div className="request-follow-list">
                          <div className="card mb-2">
                              <div className="card-body d-flex align-items-center justify-content-between p-2">
                                  <a href="user-profile-private.html">@laychristian92</a>
                                  <a href="" className="btn btn-primary btn-sm">
                                      Confirm
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="explore-people">
                      <h6 className="mb-3">Explore People</h6>
                      <div className="explore-people-list">
                        {
                          users.map((user, i) => (
                            <div className="card mb-2" key={i}>
                              <div className="card-body p-2">
                                  <a href="user-profile-private.html">@{user.username}</a>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
  )
}

export default Home