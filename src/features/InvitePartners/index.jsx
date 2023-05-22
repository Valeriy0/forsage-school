import react from "react";

export const InvitePartners = () => {
  const info = [
   'Sign up on relevant platforms for your audience — Twitter, Facebook, Instagram, Youtube.',
   'Explore forums like Reddit and various blogs, and post comments in the threads.',
   'Share the opportunity to join your Forsage team by using hashtags and your personal referral link.'
  ]
  return (
    <div className="relative flex flex-col items-center w-full pb-[100px]">
      <img className="absolute left-0 top-0 sm:hidden" src="/img/invitePartners/left.png" alt="" />
      <img className="absolute right-0 bottom-0 sm:hidden" src="/img/invitePartners/right.png" alt="" />
      <div className="max-w-[866px] w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center space-y-10 mb-[60px]">
          <span className="text-4xl font-semibold">How to invite new <br/> partners to Forsage</span>
          <span className="opacity-50">The most convenient and powerful technique is inviting people on social media.</span>
        </div>
        <div className="flex flex-col space-y-5 z-10">
          {info.map((item, itemIndex) => {
            return (
              <div className="flex items-center justify-start space-x-10 px-10 py-[30px] bg-[#0E0E0F] border border-white-100 rounded-[30px] sm:px-5" key={itemIndex}>
                <img className="opacity-50 h-[24px]" src="/icons/bigBlackCheck.svg" alt="" />
                <span className="opacity-30">{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}