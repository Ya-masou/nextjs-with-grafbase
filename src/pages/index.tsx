import { gql, useQuery } from "@apollo/client";
import { Loading } from "@nextui-org/react";

const query = gql`
  {
    todoCollection(first: 10) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <Loading type="points" />;
  if (error) throw error;

  return <div>{JSON.stringify(data)}</div>;
};

export default Home;
