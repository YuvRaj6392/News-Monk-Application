import React from 'react'
import NewsItem from './NewsItem'

export default function News() {
  const articles=[
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine war latest: Zelensky defiant as fighting rages around key town",
            "description": "Ukraine closes in on Russian troops in Lyman after the Kremlin declared occupied regions to be part of Russia.",
            "url": "http://www.bbc.co.uk/news/live/world-europe-63100522",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
            "publishedAt": "2022-10-01T08:22:26.1245149Z",
            "content": "This week, one Russian newspaper, Moskovsky Komsomolets, concluded: \"Vladimir Putin has nowhere to retreat. So, he'll continue to attack.\"\r\nCue St George's Hall of the Kremlin Palace and the controve… [+583 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine war: Biden says US will not be intimidated by reckless Putin",
            "description": "The US president leads condemnation of Vladimir Putin after he annexes four occupied regions of Ukraine.",
            "url": "http://www.bbc.co.uk/news/world-europe-63098651",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16D6F/production/_126915539_mediaitem126915535.jpg",
            "publishedAt": "2022-10-01T03:37:21.3444087Z",
            "content": "By George WrightBBC News\r\nPresident Joe Biden has warned Russia that the United States will not be intimidated by reckless threats after Vladimir Putin annexed four occupied regions of Ukraine.\r\nMr P… [+3962 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Iran protests: 'Nine Europeans' arrested in latest unrest",
            "description": "Germany, France, the UK and Sweden have been warned over the involvement of their \"agents\", Iran says.",
            "url": "http://www.bbc.co.uk/news/world-middle-east-63097629",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/95C5/production/_126914383_mediaitem126914379.jpg",
            "publishedAt": "2022-10-01T02:22:26.6250385Z",
            "content": "By Sam HancockBBC News\r\nNine European nationals have been arrested in Iran during deadly street protests sparked by a custody death.\r\nIntelligence officers detained people deemed to be \"agents of for… [+2886 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Burkina Faso unrest: Military officers remove leader Damiba",
            "description": "An army captain has announced the removal of the country's military leader Lt Col Paul-Henri Damiba.",
            "url": "http://www.bbc.co.uk/news/world-africa-63098217",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/96F1/production/_126914683_mediaitem126914679.jpg",
            "publishedAt": "2022-10-01T02:22:25.1237624Z",
            "content": "By George WrightBBC News\r\nAn army captain in Burkina Faso has announced on national television that he has ousted military leader Lt Col Paul-Henri Damiba.\r\nIbrahim Traore cited Lt Col Damiba's inabi… [+3080 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Hurricane Ian: Bigotry couldn't beat this family - then came the storm",
            "description": "Their ancestors were among the first black Americans on Sanibel Island. Hurricane Ian drove them away.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-63095545",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6BF9/production/_126914672_20150227_191619.jpg",
            "publishedAt": "2022-10-01T02:22:21.2653473Z",
            "content": "By Kayla EpsteinBBC News\r\nThe Gavin family arrived on Sanibel over 100 years ago, one of the first two black families to settle on the idyllic island that dangles off the west coast of Florida like a… [+6298 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Inuit Greenlanders demand answers over Danish birth control scandal",
            "description": "Denmark and Greenland agree to investigate traumatising birth control procedures on Inuit Greenlanders.",
            "url": "http://www.bbc.co.uk/news/world-europe-63049387",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1C81/production/_126879270_naja2resize.jpg",
            "publishedAt": "2022-09-30T23:52:20.640381Z",
            "content": "By Adrienne MurrayBBC News\r\nDenmark and Greenland have formally agreed to launch a two-year investigation into historic birth control practices carried out for many years on Inuit Greenlanders by Dan… [+6956 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Cyclone Ian batters South Carolina in second US landfall",
            "description": "After wreaking deadly havoc in Florida, Ian smashes piers in South Carolina and floods neighbourhoods.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-63097951",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DC1F/production/_126915365_1fd3adea00f3a552e8ac816ac5558646212057170_946_5603_31511000x563.jpg",
            "publishedAt": "2022-09-30T23:22:20.453142Z",
            "content": "By John Sudworth &amp; Bernd Debusmann JrBBC News, Florida\r\nPost-Tropical Cyclone Ian is lashing South Carolina in its second US landfall after carving a swathe of deadly destruction across Florida.\r… [+3519 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Roblox removes 'meat grinder' Ukraine v Russia game",
            "description": "The War on Larkiv game was accepted and promoted by the world's largest children's game platform.",
            "url": "http://www.bbc.co.uk/news/technology-63078950",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1472F/production/_126895738_62ddfdd6-0fa9-45da-8f51-fbc95bbf5808.jpg",
            "publishedAt": "2022-09-30T23:07:22.3742927Z",
            "content": "By Joe TidyCyber reporter \r\nThe world's biggest gaming platform for children, Roblox, has removed two games that allowed players to fight and kill each other as Russians or Ukrainians. \r\nOne of them,… [+4112 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Messages reveal how Musk and Twitter boss fell out",
            "description": "New text messages between Musk and Twitter boss Parag Agrawal reveal how the relationship broke down.",
            "url": "http://www.bbc.co.uk/news/technology-63098117",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1665D/production/_126914719_010d9f25-7dbe-47de-902d-aff656f4eb41.jpg",
            "publishedAt": "2022-09-30T21:22:19.4062844Z",
            "content": "By James ClaytonBBC North America technology reporter\r\nMessages between Elon Musk and Twitter boss Parag Agrawal have been published in a court filing. \r\nThey reveal how the pair's relationship, afte… [+4775 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine war: Putin's speech marks gamble to change course of war",
            "description": "The Russian leader's fiery speech is an attempt to divert from Russia's problems on the battlefield.",
            "url": "http://www.bbc.co.uk/news/world-europe-63094561",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/46BF/production/_126911181_gettyimages-1243615777.jpg",
            "publishedAt": "2022-09-30T14:52:17.7259966Z",
            "content": "By Steve RosenbergBBC Russia Editor, Moscow\r\nThis week, one Russian newspaper, Moskovsky Komsomolets, concluded: \"Vladimir Putin has nowhere to retreat. So, he'll continue to attack.\"\r\nCue St George'… [+3452 chars]"
        }
    ]

  return (
    <div className='container mt-3 my-3'>
    <h2>News Monk Top Headlines</h2>
    <div className="row">
   
    {
      articles.map((element)=>{
        return  <div className="col col-md-4"  key={element.url} >
        <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} url={element.urlToImage} newsUrl={element.url} />
                </div>
      })
    }
   
    
    
    
    </div>
   
    </div>
  )
}
