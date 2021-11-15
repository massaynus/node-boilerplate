export default gql`
query getRecord($id: ID!) {
  record(id: $id) {
    id
    name
  }
}
`;
