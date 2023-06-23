"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useSignMessage } from "wagmi";
import Button from "./Button";
import { useRouter } from "next/navigation";


const SignIn = () => {
  const { isConnected } = useAccount();
  const router = useRouter();
  const { signMessage, isSuccess, isLoading } = useSignMessage({
    message: "I am signing into this Simple dApp",
    onSuccess(data) {
      router.push("/dashboard");
    },
  });

  if (!isConnected) {
    return <ConnectButton />;
  }

  if (!isSuccess) {
    return <Button onClick={() => signMessage()}>Sign Message</Button>;
  }
};

export default SignIn;
