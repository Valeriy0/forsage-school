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
  ForsageSources,
  Testi,
} from '@/features';

const Index = () => {
  return (
    <div className="flex flex-col items-center w-screen space-y-[120px] px-4 pb-10 sm:space-y-[60px]">
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
      <Testi />
      <Marketing />
      <XQore />
      <HowBuildBus />
      <InvitePartners />
      <RefferalLinks />
      <OnePager />
      <ForsageSources />
    </div>
  )
}
export default Index;