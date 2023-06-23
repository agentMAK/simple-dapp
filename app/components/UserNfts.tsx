import { useAccount } from "wagmi";
import { fetchNftsForOwner } from "@/utlis/alchemy";
import ViewNFTs from "./ViewNFTs";

const UserNFTs = async () => {
  const { address } = useAccount();
  const ownedNfts = await fetchNftsForOwner(address as '0x${string}');

  return <ViewNFTs nfts={ownedNfts.slice(0, 10)} />;
};

export default UserNFTs;
