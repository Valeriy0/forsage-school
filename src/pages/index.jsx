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
} from '@/features';

const Index = () => {
  return (
    <div className="flex flex-col items-center w-screen space-y-[120px] px-4">
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
    </div>
  )
}
export default Index;