import { API } from "aws-amplify";
import { listServices } from "../graphql/queries";

const allServices = async () => await API.graphql({
    query: listServices
});

export default {
    allServices,
};

export {
    allServices,
};
