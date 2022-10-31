import axios from "axios";

const baseUrl = process.env.REACT_APP_REQUEST_URL;

export const getProducts = () =>
  axios({
    method: "POST",
    url: `${baseUrl}/graphql`,
    data: {
      query: `
        query {
          products {
            _id
            name
            brand {
              name
            }
            imgSrc
            price
            expireDate
          }
        }
      `,
    },
  }).then((res) => res.data);
