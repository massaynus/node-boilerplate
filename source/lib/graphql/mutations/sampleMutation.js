export default gql`
  mutation mutateRecord($id: ID!, $name: String) {
    record(id: $id, name: $name) {
      record {
        id
        name
      }
    }
  }
`;