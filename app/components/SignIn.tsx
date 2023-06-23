import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useSignMessage } from "wagmi";
import Button from "./Button";

type SignInType = {
  setIsAuth: (auth: boolean) => void;
};

const SignIn = ({ setIsAuth }: SignInType) => {
  const { isConnected } = useAccount();
  const { signMessage, isSuccess, isLoading } = useSignMessage({
    message: "I am signing into this Simple dApp",
    onSuccess(data) {
      setIsAuth(true)
    }
  });

  if (!isConnected) {
    return <ConnectButton />;
  }

  if (!isSuccess) {
    return <Button onClick={() => signMessage()}>Sign Message</Button>;
  }

};

export default SignIn;
