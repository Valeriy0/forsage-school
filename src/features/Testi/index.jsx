import React, { useState, useMemo } from "react";
import { FirstBlock } from "./firsBlock";
import { FirstTest } from "./firstTest";
import { SecondTest } from "./secondTest";
export const Testi = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesData = [
        {
            title: "Seed Phrase",
            firstTitle: [<span>A mnemonic phrase, or seed phrase, or "12 words" is <br className="sm:hidden" /> generated when you create a wallet. It cannot be changed or <br className="sm:hidden" />  recovered.</span>    ],
            secondTitle: [<span>The seed phrase allows you to have 100% access to your  <br className="sm:hidden" />  wallet and assets, so it is important to keep your 12 words <br className="sm:hidden" /> safe and not share them with third parties.</span>],
            img: "img/seedPhrase/12words.png",
            desc: ["Don't share your 12 words with anyone."],
            desc2: null,
        },
        {
            title: "Private Key",
            firstTitle: [<span>A private key is a combination of letters and numbers that <br className="sm:hidden" />  allows you to manage your wallet and assets. Only the owner<br className="sm:hidden" /> of the address can know the private key, and it cannot be<br className="sm:hidden" /> changed or disabled.</span>    ],
            secondTitle: [<span>A private key provides access to only one specific<br className="sm:hidden" />  cryptocurrency address, while a seed phrase gives you ful<br className="sm:hidden" />  control over all cryptocurrency addresses that have been <br className="sm:hidden" /> generated in the wallet.</span>],
            img: "img/privateKey/key.png",
            desc: [<span>Do not copy or request your private key from the blockchain<br className="sm:hidden" />  without need. It is strictly forbidden to transfer, paste or share<br className="sm:hidden" />   your private key!</span>],
            desc2: null,
        },
        {
            title: "Phishing Web Pages",
            firstTitle: [<span>More and more phishing websites (clones of the original ones)<br className="sm:hidden" /> are appearing online. These websites can be used by<br className="sm:hidden" />  fraudsters to gain access to your data and finances.</span>    ],
            img: "img/phishingWeb/error.png",
            desc: [<span>Always make sure the domain name is spelled correctly, since<br className="sm:hidden" /> sometimes it is replaced by a similar one. Check for SSL-<br className="sm:hidden" /> certificate (the lock icon near the input line). Don't click the<br className="sm:hidden" />  links from strangers.</span>],
            desc2: [<span>The official Forsage website is <span className="text-[#2AF598]">forsage.io</span></span>],
        },
        {
            title: "Telegram bots",
            firstTitle: [<span>A popular type of scam emerging in Telegram is fake bots<br className="sm:hidden" /> using well-known platform and project names. Please note:<br className="sm:hidden" /> Forsage has no Telegram bots with passive income.</span>],
            img: "img/telegramBots/telegram.png",
            desc: [<span>Use only the Telegram bots referenced on the official<br className="sm:hidden" />  resources of the platforms.</span>],
            desc2: [<span>Read more in this article: <a className="text-[#2AF598]">read more</a></span>],
        }
    ];

    console.log(currentSlide);

    const nextSlide = () => setCurrentSlide(currentSlide + 1);
    const prevSlide = () => currentSlide !== 0 ? setCurrentSlide(currentSlide - 1) : null;

    const renderContent = useMemo(() => {
        switch (currentSlide) {
            case 4: {
                return <FirstTest 
                currentSlide={currentSlide}
                nextSlide={() => nextSlide()}
                prevSlide={() => prevSlide()}
                />
            }
            case 5: {
                return < SecondTest
                />
            }
            default: {
                return <FirstBlock 
                currentSlide={currentSlide}
                nextSlide={() => nextSlide()}
                prevSlide={() => prevSlide()}
                title={slidesData[currentSlide].title}
                firstTitle={slidesData[currentSlide].firstTitle}
                img={slidesData[currentSlide].img}
                desc={slidesData[currentSlide].desc}
                desc2={slidesData[currentSlide].desc2} />
            }
        }
    }, [currentSlide, slidesData])

    return (
        <div className="space-y-5">
            {renderContent} 
        </div>   
    )
 }