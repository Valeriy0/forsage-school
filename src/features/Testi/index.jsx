import React from "react";
import { SeedPhrase } from "./firsBlock";
import { Good } from "./Good";

export const Testi = () => {
    return (
        <div className="space-y-5">
        <SeedPhrase 
        title={"Seed Phrase"}
        firstTitle={[<span>A mnemonic phrase, or seed phrase, or "12 words" is <br /> generated when you create a wallet. It cannot be changed or<br />  recovered.</span>    ]}
        secondTitle={[<span>The seed phrase allows you to have 100% access to your <br /> wallet and assets, so it is important to keep your 12 words<br />  safe and not share them with third parties.</span>]}
        img={"img/seedPhrase/12words.png"}
        desc={["Don't share your 12 words with anyone."]}/>

         <SeedPhrase 
        title={"Private Key"}
        firstTitle={[<span>A private key is a combination of letters and numbers that <br /> allows you to manage your wallet and assets. Only the owner<br /> of the address can know the private key, and it cannot be<br /> changed or disabled.</span>    ]}
        secondTitle={[<span>A private key provides access to only one specific<br /> cryptocurrency address, while a seed phrase gives you full<br /> control over all cryptocurrency addresses that have been <br />generated in the wallet.</span>]}
        img={"img/privateKey/key.png"}
        desc={[<span>Do not copy or request your private key from the blockchain<br />  without need. It is strictly forbidden to transfer, paste or share<br />  your private key!</span>]}/>

         <SeedPhrase 
        title={"Phishing Web Pages"}
        firstTitle={[<span>More and more phishing websites (clones of the original ones)<br /> are appearing online. These websites can be used by<br /> fraudsters to gain access to your data and finances.</span>    ]}
        img={"img/phishingWeb/error.png"}
        desc={[<span>Always make sure the domain name is spelled correctly, since<br /> sometimes it is replaced by a similar one. Check for SSL-<br />certificate (the lock icon near the input line). Don't click the<br /> links from strangers.</span>]}
        desc2={[<span>The official Forsage website is <span className="text-[#2AF598]">forsage.io</span></span>]} />

        <SeedPhrase 
        title={"Telegram bots"}
        firstTitle={[<span>A popular type of scam emerging in Telegram is fake bots<br /> using well-known platform and project names. Please note:<br /> Forsage has no Telegram bots with passive income.</span>    ]}
        img={"img/telegramBots/telegram.png"}
        desc={[<span>Use only the Telegram bots referenced on the official<br /> resources of the platforms.</span>]}
        desc2={[<span>Read more in this article: <a className="text-[#2AF598]">read more</a></span>]} />
     

        <Good />     
        </div>   
    )
 }