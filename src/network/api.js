import axios from "axios";

// DEV
export const BASE_URL = "http://10.0.2.2:8080/";

// PROD
// export const BASE_URL = "https://test-mobile-fachri.herokuapp.com/";

export const MASTERPRODUCT = "GetMasterProduct";
export const MASTERBRANCH = "GetMasterBranch";
export const ADDCUSTOMER = "customer/SaveDataCust";
export const UPDATECUSTOMER = "customer/UpdateDataCust";
export const GETALLCUSTOMER = "customer/GetAllDataCust";
export const GETDETAILCUSTOMER = "customer/GetDataCustomer";
export const DELETECUSTOMER = "customer/UpdateDataCust/1";
export const APIRESPONSE = "log/ApiResponse";
export const APIREQUEST = "log/ApiRequest";

export const logApiRequest = async body => {
  console.log("ini ada di api : ", body);
  try {
    return new Promise((resolve, reject) => {
      axios
        .post(BASE_URL + APIREQUEST, body)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
          console.log("ERROR =>  : ", err);
        });
    });
  } catch (error) {
    // console.error('error postData', error);
  }
};

export const logApiResponse = async body => {
  console.log("ini ada di api : ", body);
  try {
    return new Promise((resolve, reject) => {
      axios
        .post(BASE_URL + APIRESPONSE, body)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
          console.log("ERROR =>  : ", err);
        });
    });
  } catch (error) {
    // console.error('error postData', error);
  }
};

export default { logApiRequest, logApiResponse };
