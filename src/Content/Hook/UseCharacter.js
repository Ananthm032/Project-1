import {useQuery,gql} from "@apollo/client"

const HELL =gql`
query GetUsers($walletAddress:String!){
  getUser(walletAddress:$walletAddress){
    username
    walletAddress
    displayName
    isKYCVerified
    userID
    profilePic
    banner
    shortBio
    twitter
    instagram
    linkedIn
    facebook
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