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

  const testContent1 = [
    {
        title: 'Activate levels in programs and wait for passive income.',
        isTrue: false,
    },
    {
        title: 'Invite partners to your team and activate levels and programs together.',
        isTrue: true,
    },
    {
        title: 'Wait for income from your upline partner.',
        isTrue: false,
    },
  ];
  const testContent2 = [
    {
        title: 'Activate levels in programs and wait for passive income.',
        isTrue: false,
    },
    {
        title: 'Invite partners to your team and activate levels and programs together.',
        isTrue: true,
    },
    {
        title: 'Wait for income from your upline partner.',
        isTrue: false,
    },
  ];
  const testContent3 = [
    {
        title: 'Activate levels in programs and wait for passive income.',
        isTrue: false,
    },
    {
        title: 'Invite partners to your team and activate levels and programs together.',
        isTrue: true,
    },
    {
        title: 'Wait for income from your upline partner.',
        isTrue: false,
    },
  ];

  return (
    <div className="flex flex-col items-center w-screen space-y-[120px] px-4 pb-10 sm:space-y-[60px]">
      <FirstWin />
      <Second />
      <Points />
      <CryptoMain />
      <NotTraidng />
      <Earning testContent={testContent1} />
      <InstallWallet />
      <BuyCrypto />
      <Steps />
      <Security />
      <Earning testContent={testContent2} />
      {/* <Testi /> */}
      <Marketing />
      <XQore />
      <HowBuildBus />
      <InvitePartners />
      <RefferalLinks />
      <Earning testContent={testContent3} />
      <OnePager />
      <ForsageSources />
    </div>
  )
}
export default Index;