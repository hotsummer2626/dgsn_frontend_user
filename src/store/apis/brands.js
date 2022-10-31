import axios from "axios";

const baseUrl = process.env.REACT_APP_REQUEST_URL;

export const getBrands = () =>
  axios({
    method: "POST",
    url: `${baseUrl}/graphql`,
    data: {
      query: `
        query {
          brands {
            _id
            name
            imgSrc
          }
        }
      `,
    },
  }).then((res) => res.data);
