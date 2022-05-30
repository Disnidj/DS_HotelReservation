import axios from 'axios';


let RegisterURL = "http://localhost:8000/signup";
let LoginURL = "http://localhost:8000/signin";
let AuthURL = "http://localhost:8000/auth";
let getAllUsers = "http://localhost:8000/getallusers";
let CreateHotel = "http://localhost:8000/createUser";
//let UpdateHotelAdmin = "http://localhost:8000/user/updateUserById/";
//let DeleteHotelAdmin = "http://localhost:8000/user/deleteUser/";

export async function RegisterCustomer(data) {
    const alldata = {
        Name:data.Name,
        NationalID:data.NationalID,
        Email:data.Email,
        UserName:data.UserName,
        Password:data.Password,
        userRole:"traveller"
    };

    return await axios.post(RegisterURL,alldata);
}


export async function LoginCustomer(data) {
    const alldata = {
      Email:data.Email,
      Password:data.Password,
    };
  
    return await axios.post(LoginURL,alldata);
}

export async function AuthCustomer(token) { 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return await axios.get(AuthURL,config);
}

export async function GetallUsers(){
  return axios.get(getAllUsers);
}

export async function CreateAdmin(data) {
  const alldata = {
    Name:data.Name,
    NationalID:data.NationalID,
    Email:data.Email,
    UserName:data.UserName,
    Password:data.Password,
    userRole:"Hotelstaff"
  };

  return await axios.post(CreateHotel,alldata);
}


/*export async function UpdateAdmin(id,data) {
  const alldata = {
      name:data.name,
      mobileno:data.mobileno,
      email:data.email,
      password:data.password,
      userRole:"hotelAdmin"
  };

  return await axios.patch(UpdateHotelAdmin + id,alldata);
}

export async function DeleteAdmin(id) {
  return await axios.delete(DeleteHotelAdmin + id);
}*/