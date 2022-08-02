import { gql, useQuery } from "@apollo/client";
import { Loading, Card, Grid, Text, Avatar } from "@nextui-org/react";
import { useUsersQuery } from "../foo";

const query = gql`
  query users {
    userCollection(first: 10) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useUsersQuery();

  if (loading) return <Loading type="points" />;
  if (error) throw error;

  // return <div>{JSON.stringify(data)}</div>;

  return data?.userCollection?.edges && (
    <Grid.Container gap={2}>
      {data.userCollection.edges.map((edge, index) => (
        <Grid xs={6} sm={4} md={3} key={edge?.node.id ?? index}>
          <Card>
            <Card.Body>
              <Avatar
                squared
                size="xl"
                text={edge?.node.name.charAt(0)}
                aria-hidden="true"
              />

              <Text
                weight="bold"
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }
              }>
                {edge?.node.name}
              </Text>

              <Text
                size={12}
                css={{
                  overflowWrap: "anywhere",
                }}
              >
                {edge?.node.id}
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
};

export default Home;
