import React from 'react';
import { 
  FirstWin, 
  Second, 
  Points, 
  CryptoMain, 
  NotTraidng, 
  Earning, 
  InstallWallet, 
  BuyCrypto, 
  Steps, 
  Security, 
  Marketing, 
  XQore, 
  HowBuildBus,
  InvitePartners,
  RefferalLinks,
  OnePager,
} from '@/features';

const Index = () => {
  return (
    <div className="flex flex-col items-center w-screen space-y-[120px] px-4 sm:space-y-[60px]">
      <FirstWin />
      <Second />
      <Points />
      <CryptoMain />
      <NotTraidng />
      <Earning />
      <InstallWallet />
      <BuyCrypto />
      <Steps />
      <Security />
      <Marketing />
      <XQore />
      <HowBuildBus />
      <InvitePartners />
      <RefferalLinks />
      <OnePager />
    </div>
  )
}
export default Index;