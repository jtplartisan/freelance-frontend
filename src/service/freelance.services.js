 import axios from "axios";
 const API_BASE_URL = "http://localhost:8000/api/v1";

 const FreelanceService = {
  signUpAsFreelancer: async (freelancerData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/signUpAsFreelancer`,
        freelancerData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  blog: (data) => {
    return axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/en/latest-blog`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },

  blogcomment: (data) => {
    return axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog-comment/create-comment`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },

  openticket: (data) => {
    return axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/ticket/sap/open-tickets`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },

  acceptjob: (data) => {
    return axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/ticket/sap/accept-job`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  

  rejectjob: (data) => {
    return axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/ticket/sap/reject-job`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },

   saprofileget: (data) => {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/sap-profile`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  sapprofile: (data) => {
    return axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/update-profile`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};
export default FreelanceService;
