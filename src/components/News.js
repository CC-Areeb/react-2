import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "Stock Market Today: Dow, S&P Live Updates for Jan. 11 - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=d0e74053-918d-11ed-8ba4-734a66645756&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMS0xMC9hc2lhbi1zdG9ja3Mtc2V0LXRvLXJpc2UtYW1pZC1pbmZsYXRpb24tb3B0aW1pc20tbWFya2V0cy13cmFw",
            "urlToImage": null,
            "publishedAt": "2023-01-11T06:46:00Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Prince Harry's memoir 'Spare' hits shelves - NBC News",
            "description": "Prince Harry’s long-awaited memoir “Spare” finally hit shelves after weeks of leaked stories and speculation. NBC’s Keir Simmons has the details on even more...",
            "url": "https://www.youtube.com/watch?v=MlWbIKYtWfs",
            "urlToImage": "https://i.ytimg.com/vi/MlWbIKYtWfs/maxresdefault.jpg",
            "publishedAt": "2023-01-11T04:30:05Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Rachel Pannett, Frances Vinall",
            "title": "Cardinal George Pell, convicted then acquitted of child sex abuse, dies at 81 - The Washington Post",
            "description": "The sexual assault conviction of the Australian cleric, who was a top adviser to Pope Francis, was overturned after he spent more than a year in prison.",
            "url": "https://www.washingtonpost.com/obituaries/2023/01/10/cardinal-george-pell-dead-child-sexual-abuse/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IW5NLMAOV7RRUOAZ5WZSQW2HHI.jpg&w=1440",
            "publishedAt": "2023-01-11T04:23:18Z",
            "content": "Cardinal George Pell, a conservative theologian who served as the Vatican finance chief for Pope Francis and who was acquitted after becoming the most senior Catholic cleric to be convicted of sexual… [+3583 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Brian Melley",
            "title": "Landslides, sinkholes, floodwaters plague soggy California - The Associated Press - en Español",
            "description": "LOS ANGELES (AP) — Sinkholes swallowed cars and floodwaters swamped towns and swept away a small boy as California was wracked by more wild winter  while the next in a powerful string of storms loomed on the horizon Tuesday.",
            "url": "https://apnews.com/article/floods-weather-natural-disasters-landslides-and-mudslides-storms-21b103e791710f4af6ca0ce45c6030b5",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/151fc091c2164fb1bf8ca0cb8a505746/3000.webp",
            "publishedAt": "2023-01-11T04:07:28Z",
            "content": "LOS ANGELES (AP) Sinkholes swallowed cars and floodwaters swamped towns and swept away a small boy as California was wracked by more wild winter while the next in a powerful string of storms loomed o… [+6412 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Here are Tuesday’s winning Mega Millions numbers for the $1.1B jackpot - The Hill",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMifWh0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvbmV4c3Rhcl9tZWRpYV93aXJlLzM4MDc5OTktaGVyZS1hcmUtdHVlc2RheXMtd2lubmluZy1tZWdhLW1pbGxpb25zLW51bWJlcnMtZm9yLXRoZS0xLTFiLWphY2twb3Qv0gGBAWh0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvbmV4c3Rhcl9tZWRpYV93aXJlLzM4MDc5OTktaGVyZS1hcmUtdHVlc2RheXMtd2lubmluZy1tZWdhLW1pbGxpb25zLW51bWJlcnMtZm9yLXRoZS0xLTFiLWphY2twb3QvYW1wLw?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-01-11T04:02:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "TVLine"
            },
            "author": "Dave Nemetz",
            "title": "Golden Globes: Kevin Costner Wins Best Actor in a Drama for Yellowstone - Yahoo Entertainment",
            "description": "Yellowstone finally managed to lasso a major award: Kevin Costner won the Golden Globe for best actor in a drama series at Tuesday’s ceremony.",
            "url": "https://tvline.com/2023/01/10/golden-globes-2023-kevin-costner-yellowstone-wins-speech/",
            "urlToImage": "https://tvline.com/wp-content/uploads/2022/11/yellowstone-season-5-episode-4-kevin-costner.jpg?w=619",
            "publishedAt": "2023-01-11T03:59:00Z",
            "content": "Yellowstone finally managed to lasso a major award: Kevin Costner won the Golden Globe for best actor in a drama series at Tuesday’s ceremony.\r\nCostner, who was not present to receive the trophy, bea… [+1269 chars]"
        },
        {
            "source": {
                "id": "buzzfeed",
                "name": "Buzzfeed"
            },
            "author": "Larry Fitzmaurice",
            "title": "Jerrod Carmichael's Will Smith Joke 2023 Golden Globes - BuzzFeed",
            "description": "He didn't mention \"the slap,\" but, like, c'mon...he was definitely talking about it.",
            "url": "https://www.buzzfeed.com/larryfitzmaurice/jerrod-carmichael-will-smith-golden-globes-joke",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2023-01/11/3/enhanced/19ffb2c06e44/original-2164-1673408309-3.jpg?crop=1243:651;0,0%26downsize=1250:*",
            "publishedAt": "2023-01-11T03:55:09Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Annie Grayer, Zachary Cohen, Sara Murray",
            "title": "Biden's classified documents issue adds to House Republicans' growing list of investigations - CNN",
            "description": "As House Republicans officially take over Congress and clamor to investigate the Biden administration, a new line of attack fell squarely into their laps: classified documents recovered from one of President Joe Biden's private offices when he served as vice …",
            "url": "https://www.cnn.com/2023/01/10/politics/gop-investigations-new-congress/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221103232520-01-jim-jordan-james-comer-file.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-11T03:54:00Z",
            "content": "As House Republicans officially take over Congress and clamor to investigate the Biden administration, a new line of attack fell squarely into their laps: classified documents recovered from one of P… [+13000 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suntimes.com"
            },
            "author": "Tina Sfondeles",
            "title": "Illinois assault weapons ban: Pritzker signs bill hours after final passage - Chicago Sun-Times",
            "description": "The governor paid tribute to some of the lives lost to assault weapons: “We have done this for Highland Park’s Kevin and Irina McCarthy, Jacquelyn Sundheim, Katherine Goldstein, Eduardo Uvaldo, Nicolas Toledo-Zaragoza and Stephen Straus. For Benito Juarez Hig…",
            "url": "https://chicago.suntimes.com/politics/2023/1/10/23548867/illinois-assault-weapons-ban-house-approves-pritzker-vows-sign-it",
            "urlToImage": "https://cst.brightspotcdn.com/dims4/default/2ca7d34/2147483647/strip/true/crop/1173x670+0+61/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FjIv6h995TCn_nwCFj8H8uGVKYpM%3D%2F0x0%3A1173x731%2F1173x731%2Ffilters%3Afocal%28561x585%3A562x586%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24351101%2Faa_IMG_4398.jpg",
            "publishedAt": "2023-01-11T03:37:00Z",
            "content": "SPRINGFIELD Assault weapons can no longer be sold in Illinois.\r\nThe state immediately banned the sale of the military-style weapons and high-capacity magazines Tuesday evening, with Gov. J.B. Pritzke… [+7030 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Michelle Toh",
            "title": "The owner of Uniqlo is boosting pay for Japan employees by up to 40% as inflation bites - CNN",
            "description": "Fast Retailing, the Japanese giant that owns popular clothing brands Uniqlo and Theory, will start paying its employees much more this year.",
            "url": "https://www.cnn.com/2023/01/10/business/fast-retailing-japan-employees-pay-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230110203310-01-uniqlo-logo-tokyo-101721.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-11T03:33:00Z",
            "content": "Fast Retailing, the Japanese giant that owns popular clothing brands Uniqlo and Theory, will start paying its employees much more this year.\r\nThe company announced Wednesday that it would boost salar… [+1833 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Lee Ying Shan",
            "title": "Asia-Pacific shares trade mostly higher ahead of U.S. inflation report - CNBC",
            "description": "Asia-Pacific shares traded higher as investors look ahead to U.S. inflation data report, which would inform the Fed's rate hike policy trajectory.",
            "url": "https://www.cnbc.com/2023/01/11/asia-pacific-shares-us-inflation-report.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107176904-1673393538701-gettyimages-1245822772-AUSTRALIA_SALES.jpeg?v=1673394874&w=1920&h=1080",
            "publishedAt": "2023-01-11T03:06:00Z",
            "content": "Inflation in the Philippines is expected to return to the government's target range in two years, Finance Secretary Benjamin Diokno said.\r\nDiokno said he is confident that average inflation for 2023 … [+657 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Margaret Abrams",
            "title": "Rihanna brings the glamour to Golden Globes 2023 in velvet and diamonds - Page Six",
            "description": "While RiRi didn’t hit the red carpet, she was spotted at the awards ceremony looking as elegant as ever in a black strapless gown and stole.",
            "url": "https://pagesix.com/2023/01/10/rihanna-brings-glamour-to-golden-globes-2023-in-velvet/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/01/golden-globes-2023-rihanna-split.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2023-01-11T02:56:00Z",
            "content": "The Bad Gal is back.\r\nRihanna shined bright like a diamond at the 2023 Golden Globes on Tuesday night in Los Angeles, where she skipped the red carpet but was spotted inside the ceremony wearing a bl… [+1741 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Sarah Rumpf",
            "title": "American Gas Association fires back on potential gas stove ban: 'Not substantiated by sound science' - Fox Business",
            "description": "The American Gas Association pushed back against a potential gas ban calling the removal of the appliance \"reckless\" and \"not substantiated by sound science.\"",
            "url": "https://www.foxbusiness.com/politics/american-gas-association-fires-back-potential-gas-stove-ban",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/01/0/0/GettyImages-1243649447.jpg?ve=1&tl=1",
            "publishedAt": "2023-01-11T02:39:38Z",
            "content": "The American Gas Association (AGA) is clapping back after news that U.S. federal regulators may ban gas stoves over their potential risks to human health stating the removal of the appliance is \"reck… [+3401 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Dribble Handoff: With Kentucky struggling so far, how will the Wildcats finish the regular season? - CBS Sports",
            "description": "UK has been a disappointment in 2022-23 but our experts predict what is in store for the Wildcats the rest of the season",
            "url": "https://www.cbssports.com/college-basketball/news/dribble-handoff-with-kentucky-struggling-so-far-how-will-the-wildcats-finish-the-regular-season/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/10/e76f4f8f-c501-48bc-b65b-62a8c3d91d4e/thumbnail/1200x675/0646ff65cad6a4ee4c093b5bcaf05e89/kentucky-usatsi.jpg",
            "publishedAt": "2023-01-11T02:08:00Z",
            "content": "After beginning the season ranked No. 4 in the AP Top 25, Kentucky failed to receive a single vote in this week's poll amid a 1-3 start to SEC play marked by an embarrassing 78-52 loss at Alabama on … [+6804 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "CBSBoston.com Staff",
            "title": "I-Team: Hatchet, hacksaw, blood found in Peabody trash facility during Ana Walshe search - CBS Boston",
            "description": "Investigators searching for Ana Walshe found trash bags with blood, a hatchet, a hacksaw, a rug and used cleaning supplies at a Peabody trash facility, sources told WBZ-TV's I-Team.",
            "url": "https://www.cbsnews.com/boston/news/ana-walshe-brian-cohasset-massachusetts-missing-mother-hatchet-hacksaw-blood-peabody-trash-facility-wbz-tv-i-team/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/01/10/d6eb73e2-450e-4ea0-9fd1-3be8240bb2a8/thumbnail/1200x630/9fd2c3d4107bea4950e3472b092595ed/search.jpg",
            "publishedAt": "2023-01-11T01:53:00Z",
            "content": "COHASSET - Investigators searching for evidence in the disappearance of Cohasset mother Ana Walshe found trash bags with blood, a hatchet, a hacksaw, a rug and used cleaning supplies at a transfer st… [+2886 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Leanne Italie",
            "title": "Golden Globes fashion: See the best red carpet looks - The Associated Press - en Español",
            "description": "NEW YORK (AP) — The stars were back Tuesday for the Golden Globes' return to television,  walking a soggy grayish carpet in relatively predictable looks — with a few notable exceptions.",
            "url": "https://apnews.com/article/2023-golden-globes-fashion-best-looks-baa99ecc1d8da550694fa3f0bc0be8a5",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/c76adabe8b944d768a9ec94c19d02588/3000.webp",
            "publishedAt": "2023-01-11T01:16:47Z",
            "content": "NEW YORK (AP) The stars were back Tuesday for the Golden Globes return to television, walking a soggy grayish carpet in relatively predictable looks with a few notable exceptions.\r\nA look at fashion … [+4528 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "Apple to Begin Making In-House Screens in 2024 in Shift Away From Samsung - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=18e1f939-917d-11ed-871b-427a65584b59&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMS0xMS9hcHBsZS10by1iZWdpbi1tYWtpbmctaW4taG91c2Utc2NyZWVucy1pbi0yMDI0LWluLXNoaWZ0LWF3YXktZnJvbS1zYW1zdW5n",
            "urlToImage": null,
            "publishedAt": "2023-01-11T00:33:00Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Ashley Strickland",
            "title": "Second potentially habitable Earth-size planet found orbiting nearby star - CNN",
            "description": "A second Earth-size exoplanet has been spotted orbiting the small star TOI 700, located about 100 light-years away. Astronomers used NASA's planet-hunting TESS mission to spot the fourth world in the planetary system.",
            "url": "https://www.cnn.com/2023/01/10/world/nasa-tess-earth-size-exoplanet-scn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230110102813-nasa-toi-700-e-planet.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-10T23:58:00Z",
            "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nA NASA mission has spottedan Earth-size exoplanet orbi… [+3672 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. House Republicans vote to go after Biden Justice Department - Reuters",
            "description": "Republicans controlling the U.S. House of Representatives voted on Tuesday to launch an investigation into what they term President Joe Biden's weaponization of the federal government, but Democrats branded it a partisan fishing expedition.",
            "url": "https://www.reuters.com/world/us/us-house-republicans-go-after-biden-justice-department-2023-01-10/",
            "urlToImage": "https://www.reuters.com/resizer/PM2D2JGNxsDk86_pv1bgYT4Bcf0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NBKZ3RMISJKU5BS5HIWWUATQOE.jpg",
            "publishedAt": "2023-01-10T23:38:00Z",
            "content": "WASHINGTON, Jan 10 (Reuters) - Republicans controlling the U.S. House of Representatives voted on Tuesday to launch an investigation into what they term President Joe Biden's weaponization of the fed… [+3465 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Patrick Hauf",
            "title": "Gov. Sarah Huckabee Sanders bans 'Latinx' from Arkansas government documents - Fox News",
            "description": "Arkansas Gov. Sarah Huckabee Sanders will ban the use of the term \"Latinx\" in government documents — the latest in a series of executive actions on her first day.",
            "url": "https://www.foxnews.com/politics/gov-sarah-huckabee-sanders-bans-latinx-arkansas-government-documents",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/07/sanders-SAI-softness.jpg",
            "publishedAt": "2023-01-10T23:26:00Z",
            "content": "Arkansas Republican Gov. Sarah Huckabee Sanders will prohibit the use of the term \"Latinx\" in government documents through an executive order.\r\nSanders, who was sworn in as the first female governor … [+2965 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }


    render() {
        return (
            <>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-4">
                            <NewsItem
                                title="This is the title"
                                description="This is a description"
                                imgUrl="https://ichef.bbci.co.uk/news/1024/branded_news/1E7F/production/_128270870_gettyimages-1245977780.jpg"
                                newsUrl="TODO"
                            />
                        </div>

                        <div className="col-4">
                            <NewsItem
                                title="This is the title"
                                description="This is a description"
                                imgUrl="https://ichef.bbci.co.uk/news/1024/branded_news/17F9F/production/_128270289_gettyimages-1432230036.jpg"
                                newsUrl="TODO"
                            />
                        </div>

                        <div className="col-4">
                            <NewsItem
                                title="This is the title"
                                description="This is a description"
                                imgUrl= "https://media.cnn.com/api/v1/images/stellar/prod/230111114001-09-california-weather-0110.jpg?c=16x9&q=w_800,c_fill"
                                newsUrl="TODO"
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default News
