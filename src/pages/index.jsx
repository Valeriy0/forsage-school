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
      title: 'How do you earn at Forsage ?',
      questions: [
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
      ]
    },
    {
      title: 'What is the basis of the Forsage marketing ?',
      questions: [
        {
          title: `Smart contracts in blockchain that do not store participants' funds.`,
          isTrue: true,
        },
        {
            title: `Smart contracts in blockchain that store participants' funds.`,
            isTrue: false,
        },
        {
            title: `Wait for income from your upline partner.`,
            isTrue: false,
        },
      ]
    },
    {
      title: 'Who owns Forsage?',
      questions: [
        {
          title: 'There are no owners or administrators, the platform is managed by the participants themselves.',
          isTrue: true,
        },
        {
            title: 'An administrator.',
            isTrue: false,
        },
        {
            title: 'An international finance company.',
            isTrue: false,
        },
      ]
    }
  ];
  const testContent2 = [
    {
      title: 'Is it possible to see all the transactions in Forsage?',
      questions: [
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
      ]
    },
    {
      title: 'Can Forsage stop working or just shut down?',
      questions: [
        {
          title: `No, everything works and is stored in the blockchain, it is impossible to stop the operation.`,
          isTrue: true,
        },
        {
            title: `Yes, if government regulators choose to do so.`,
            isTrue: false,
        },
        {
            title: `Yes, if the web site is shut down.`,
            isTrue: false,
        },
      ]
    },
    {
      title: 'Does my Forsage account have an expiration date?',
      questions: [
        {
          title: 'No, the account cannot be closed or blocked.',
          isTrue: true,
        },
        {
            title: 'Yes, it is valid for only 1 year.',
            isTrue: false,
        },
        {
            title: 'Yes, if you stop working.',
            isTrue: false,
        },
      ]
    }
  ];
  const testContent3 = [
    {
      title: 'What are the income limits in Forsage?',
      questions: [
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
      ]
    },
    {
      title: 'Can a new Forsage member earn more than everyone else?',
      questions: [
        {
          title: `Yes, since the date of registration does not affect your profit.`,
          isTrue: true,
        },
        {
            title: `No, you cannot earn more than your upline partner.`,
            isTrue: false,
        },
        {
            title: `Yes, if you have more than one FORSAGE account.`,
            isTrue: false,
        },
      ]
    },
    {
      title: 'Can I change my referral link after registering?',
      questions: [
        {
          title: 'No, the attachment is recorded in the blockchain with no possibility to disconnect from the team.',
          isTrue: true,
        },
        {
            title: 'Yes, anyone can do this at any time.',
            isTrue: false,
        },
        {
            title: 'Yes, if you pay for this service.',
            isTrue: false,
        },
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center w-screen space-y-[120px] pb-10 sm:pb-0 sm:space-y-[60px]">
      <FirstWin />
      <Second />
      <Points />
      <CryptoMain />
      <NotTraidng />
      <Earning id={1} title='How do you earn at Forsage ?' testContent={testContent1} />
      <div className="px-4 sm:px-0 flex flex-col w-full">
        <InstallWallet />
        <BuyCrypto />
      </div>
      <Steps />
      <Security />
      <Testi />
      <Earning id={2} title='Is it possible to see all the transactions in Forsage?' testContent={testContent2} />
      <Marketing />
      <XQore />
      <HowBuildBus />
      <InvitePartners />
      <RefferalLinks />
      <Earning id={3} title='What are the income limits in Forsage?' testContent={testContent3} />
      <div className="px-4 sm:px-0 flex flex-col w-full">
        <OnePager />
        <ForsageSources />
      </div>
    </div>
  )
}
export default Index;