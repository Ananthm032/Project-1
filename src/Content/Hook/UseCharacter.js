import {useQuery,gql} from "@apollo/client"

const HELL =gql`
query GetUsers($walletAddress:String!){
  getUser(walletAddress:$walletAddress){
    username
    walletAddress
    displayName
    userID
    profilePic
    banner
    shortBio
allNFTs{
    collectionID
  itemName
  itemImage
}
  }
}`;
 export default function UseCharacter(walletAddress) {
  
  const { loading, error, data } = useQuery(HELL, {
    variables: {walletAddress},
  });

return{
   
  error,
  loading,
  data,

};
};