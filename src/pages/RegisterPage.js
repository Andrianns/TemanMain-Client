import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loadingSet } from '../store/action/events';
import { addUser } from '../store/action/users';
import Swal from 'sweetalert2';

export default function RegisterPage() {
  const [placeholderDisabled, setPlaceholderDisabled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'Visitor',
    phoneNumber: '',
    address: '',
    birthdate: '',
    profilePict: '',
    instagramAccount: '',
    twitterAccount: '',
    gender: '',
  });

  const { loading } = useSelector((e) => e.events);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeUser = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // console.log(e.target);
    if (clicked) {
      setPlaceholderDisabled(true);
    }
  };
  const userSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(addUser(userData))
      .then((data) => {
        Swal.fire('Success Register', data.data.message, 'success');
        navigate('/login');
      })
      .catch((error) => {})
      .finally(() => dispatch(loadingSet(false)));
  };
  return (
    <div id="add-food">
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: '60px' }}
      >
        <div className="card shadow">
          <div className="card-body" style={{ width: '400px' }}>
            <form onSubmit={userSubmit}>
              <h3>Register</h3>
              <hr />
              <div className="form-floating mb-3">
                <input
                  value={userData.firstName}
                  onChange={changeUser}
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={userData.lastName}
                  onChange={changeUser}
                  type="text"
                  className="form-control"
                  id="addName"
                  placeholder="Last Name"
                  name="lastName"
                />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="email"
                  value={userData.email}
                  onChange={changeUser}
                  type="text"
                  className="form-control"
                  id="addDescription"
                  placeholder="Email"
                />
                <label htmlFor="floatingDescription">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="password"
                  value={userData.password}
                  onChange={changeUser}
                  type="password"
                  className="form-control"
                  id="addPrice"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={changeUser}
                  type="number"
                  className="form-control"
                  id=""
                  placeholder="Phone Number"
                />
                <label htmlFor="addImage">Phone Number</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="address"
                  value={userData.address}
                  onChange={changeUser}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
                <label htmlFor="addImage">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="birthdate"
                  value={userData.birthdate}
                  onChange={changeUser}
                  type="date"
                  className="form-control"
                  placeholder="Birthdate"
                />
                <label htmlFor="addImage">Birthdate</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={changeUser}
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                  onClick={() => setPlaceholderDisabled(true)}
                >
                  <option value={''} disabled={placeholderDisabled}>
                    Select Gender
                  </option>
                  <option value={'Male'}>Male</option>
                  <option value={'Female'}>Female</option>
                </select>
                <label htmlFor="addImage">Gender</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="profilePict"
                  value={userData.profilePict}
                  onChange={changeUser}
                  type="text"
                  className="form-control"
                  placeholder="Profile Picture"
                />
                <label htmlFor="addImage">Profile Picture</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="instagramAccount"
                  value={userData.instagramAccount}
                  onChange={changeUser}
                  type="text"
                  className="form-control"
                  placeholder="instagramAccount"
                />
                <label htmlFor="addImage">Instagram</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="twitterAccount"
                  value={userData.twitterAccount}
                  onChange={changeUser}
                  type="text"
                  className="form-control"
                  placeholder="twitterAccount"
                />
                <label htmlFor="addImage">Twitter</label>
              </div>
              <hr />
              <div className="d-flex flex-row justify-content-end">
                <Link
                  to={'/'}
                  type="button"
                  className="btn main-button btn-outline-primary"
                  id=""
                >
                  Cancel
                </Link>
                <button
                  className="btn btn-primary ms-2"
                  id="addFood"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
