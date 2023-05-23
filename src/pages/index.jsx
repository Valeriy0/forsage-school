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
        title: 'No, the information about the transactions and their number is hidden.',
        isTrue: false,
    },
    {
        title: 'Yes, each transaction and all information about it can be viewed on the blockchain.',
        isTrue: true,
    },
    {
        title: 'Yes, but only developers can view transactions and their number.',
        isTrue: false,
    },
  ];
  const testContent3 = [
    {
        title: 'There are no income limits or fees.',
        isTrue: true,
    },
    {
        title: 'Up to $25,000 per account.',
        isTrue: false,
    },
    {
        title: 'No income limit, but there is a 5% fee on each transaction.',
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
      <Earning title='How do you earn at Forsage ?' testContent={testContent1} />
      <InstallWallet />
      <BuyCrypto />
      <Steps />
      <Security />
      <Earning title='Is it possible to see all the transactions in Forsage?' testContent={testContent2} />
      {/* <Testi /> */}
      <Marketing />
      <XQore />
      <HowBuildBus />
      <InvitePartners />
      <RefferalLinks />
      <Earning title='What are the income limits in Forsage?' testContent={testContent3} />
      <OnePager />
      <ForsageSources />
    </div>
  )
}
export default Index;