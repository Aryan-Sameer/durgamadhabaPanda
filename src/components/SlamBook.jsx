import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SlamBook = () => {

  const slam = sessionStorage.getItem("slamBook")

  const messages = [
    {
      name: "Yasaswini",
      image: "./messages cover/yasaswini.jpg",
      message: {
        p1: "To",
        p2: "The GOD!",
        p3: "The GUIDE!",
        p4: "Nizampet",
        p5: "Hyderabad",
        p6: "nextLine",
        p7: "Pranaam!🙏",
        p8: "Kaise ho aap",
        p9: "Mein yaha theek hu",
        p10: "Wish u a very happy birthday Durga!!💃🎉",
        p11: "U are one of the sweet and caring person I have come across till now.",
        p12: "Idk what to say…but one thing is just follow what ur heart says!🙂",
        p13: "nextLine",
        p14: "And I wanna say one funny thing I can't forget about u is…on certification day we were talking u remember? Suddenly in between our convo Khushi came from nowhere and heard us🫠💀",
        p15: "I didn't see her and I was blabbering something(I'm sorry for that😭)but u saw her cmg…then u said to me…but I didn't realise…by the time I realised it…she heard us already…and the moment u ran behind😂😂😂😂Comedyy!!!",
        p16: "After that also…when she to put biometric…that was epic😂😂 even Khushi tried to stop laughing…me and khushi literally laughed for an hour on the way how u ran🤣",
        p17: `Khushi even said, "I was biting my lips so that I could stop my laugh…" OMG u are so cutee!!😂🩷`,
        p18: "nextLine",
        p19: "Just remember one thing whenever u need to share anything I'm therefor u bhai🫡(ur MB)I can listen but can't give any suggestions! 🥲",
        p20: "nextLine",
        p21: "Ik there is no connection for each part of my text…but still…bear with my unprofessionalism..Thank you🙇",
        p22: "nextLine",
        p23: "Ayya I forgot to tell u……every time you'll tell that u r nothing krke…but remember one should have confidence in themselves first! Just go with ur gut feeling and prove what u can do…so not ever think u r alone…we all are there for u…don't ever let anyone and u urself let u down…Ik some day you'll be the most succesfull person and you'll buy me a villa with ur salary as a token of frendship😂💃",
        p24: "Remember what I said today and after few yrs you'll get to know why did said like this…coz u don't know how Intelligent u r and what all u can do….you can be the next sundar pichai or Elon musk🤞 🫡",
        p25: "nextLine",
        p26: "Make us all proud!",
        p27: "The GOD..",
        p28: "The GUIDE..",
        p29: "nextLine",
        p30: "I'm sorry if I have hurt u intentionally or unintentionally. Maafi chaahti hu!🙇(Sorry for my Hindi…idk whether that's correct Hindi or not)",
        p31: "At last l wish a great career and future ahead as u MANIFEST!🤞💕",
        p32: "nextLine",
        p33: "Mm..what else is there to say…🤔",
        p34: "Ig I'm done…if anything is there to add…I'll text u😬",
        p35: "nextLine",
        p36: "Okay then",
        p37: "Take care!",
        p38: "Signing off🥱😴",
      },
    },
    {
      name: "vibha",
      image: "./messages cover/anonymous.png",
      message: {
        p1: "Hi.",
        p2: "I'll let this letter be completely anonymous.",
        p3: "I'd like to tell you that, you have had a great impact on everyone who has been around you. It's difficult to do that, you need to have a good heart urself to make a place in someone else's.",
        p4: "nextLine",
        p5: "I hope you love yourself a little more and work hard to fill that void in your heart with love for yourself first before seeking it from others. You should know that you are a beautiful person and good things will come along at the right time.",
        p6: "nextLine",
        p7: "I'm grateful to you for being a true friend at times when I was low...and maybe even more grateful that you opened your heart to this friend of yours when you were fighting a war with yourself. It's a difficult world and everyone is fighting their own battles, but I'll pray everyday that you have the more strength to fight them as every day passes.",
      }
    },
    {
      name: "hitesh",
      image: "./messages cover/hitesh.png",
      message: {
        p1: "Hi ra Panda!!! This is Hitesh... I just wanted to express myself about you! I really mean every line that I type here.. For the past 2 years I have been along with you and I can definitely say that I have never seen anyone who has most self confident in life as much as you! Sometimes I feel shocked the way you deal with problems in life.. U are such an easy going person even in tough situations! The way you tackle those situations is mind blowing.. You are more of a brother to me rather than a friend... Also your commitment towards the work you do makes me motivated everytime!",
        p2: "nextLine",
        p3: `Regarding our friendship.. I must say you are such a fucking asshole😂😂... I have to share an incident with you.. When I got a backlog in CAT and when I was about to attempt my supplementary exam.. Everyone of our friends came to cheer me up before the exam.. But you idiot just said "Arey lanjakodaka... Neeku malli suppl. paduthundi lyt teesuko exam!😂".. The moment I felt so much irritated but later I found it silly.. There is another incident when it our first year scintillations fest.. During DJ night everyone were dancing like anything and I was dumbass who doesn't know how to dance😂 at that moment you and shiven were the one's who made me dance without any hesitation.. I knew my steps were weird and awkward so you people.. But even then you people didn't discourage me... from that day onwards I never hesitated to dance in public..😉`,
        p4: "nextLine",
        p5: "I truly enjoy being with you and I feel privileged to have a friend like you! Thanks ra panda for being my friend!❤️ friendship longlasts till the end! .. I hope our",
        p6: "nextLine",
        p7: "Woth love,",
        p8: "Hitesh",
      }
    },
    {
      name: "sathwik",
      image: "./messages cover/sathwik.jpg",
      message: {
        p1: "Yo panda Bhai this is your bro from bachupally",
        p2: "First only saying ha whoever other than him reads I hope their nuts gets crushed 😈😈 and theirs never khada hoga in lifee ☠️☠️",
        p3: "Met panda in 1st time in November 2022 socha bohut innocent Banda tha but bhaii NXT level ka banda nikla. One of the best things I like about u is u do so much for everyone 💕 and also expect nothing from them and Bhai u also go till next level to help them. We went out together very few times but had fun whenever we went out,saaley agli baar plan karenge tho kahi na kahi jayenge pakka iss baar. And there are also many words which I can't tell on text woh directly better honge, one thing I can say is panda Bhai is one of my coolest and chillest mates and saaaley time miley aur time pass karna hai tho ham bachupally mai rahte hai aapke liye everytime available rahenge just one call away. Always remember ki kuch bhi ho one Bhai is there for u and i also respect panda bhaii a lot okk bhaii. I also hope ki u have the best time of ur life ahead and success in whatever u wish all the best bhaiii.i also hope our relation remains the same even after college also we had good memories 😁 and also ham chahte hai ki ham more and more happy memories banayenge and bad times mai bhi sath denge, love u lotss bhaii wish u happiest birthday (13th oct) hamesha happy rehna take care of yourself",
        p4: "From your friend sathwik",
        p5: "Saaley hamare duo pics nahi hai NXT time pakka pics lenge",
      }
    },
    {
      name: "shruti",
      image: "./messages cover/shruti.JPG",
      message: {
        p1: "Hii panda bhaiiii🐼",
        p2: "nextLine",
        p3: "Chomu kahinka kya rae thu himesha deep thoughts mai khoya hua rehta hai ....jabh bhi tujhe dekhi aisa lagtha hai jaise thunkoi depression mai h ...ik ki internships n all kar raha h stress hai... Sabh kuch kar raha hai projects n all bt still thoda hass diya kar andhar se not lyk hasne ke liye has raha hai ... Khushi se hass bahiii ... Khushi matlabh Teri waali khushi nahi happiness.. Happiness..real",
        p4: "nextLine",
        p5: "Aisa nahi bolri ki ur not happy never happy or smtg bt most of the time whenever I see u or tere se baath karthi hu thu aisa reheta hai jaise bohoth dukhi hai...pagal",
        p6: "nextLine",
        p7: "Ik mai tere baare mai ithna nahi jaanti cause apni uthni baath kabhi hui nahi...ofc mai bhi uthna share nahi karthi tujhe bhi wajahse mujhse har cheez share karne ka Mann nahi kartha hoga...but ek baath yaad rakh...tujhe joh bhi baath karni hai kuch bhi agar laga share karna hai...toh I'm here u can tell me watsapp pe nahi bt insta pe...watsapp pe risk h papa ka dar h mereko... So yeah",
        p8: "nextLine",
        p9: "I'm always there....everyone of us are there for you with you ❤️",
        p10: "nextLine",
        p11: "Bhale he I won't show uthna ki I care for you or you people but I do theek hai u guys have done so much for us for me... lyk after woh nasa hackathons i motivated to participate in other hackathons nd I won usme bhi tumlog ne help Kiya u khaleel praneeth...so yeah u guys have also played very important role in my winning SECOND prize in every hackathon which me nd shreya participated.",
        p12: "nextLine",
        p13: "Byeeee",
        p14: "nextLine",
        p15: "-shruti bhai",
      }
    },
    {
      name: "basha",
      image: "./messages cover/basha.png",
      message: {
        p1: "So, may be you reading this after one month. You are the person I can say I have brothers in college with me. You are the person who always there for me when i needed. You are the person said ok everytime whatever I asked. This is the meaning of brother in my pov. The moments which were good with you was our duo moments like only two of us  went to eat roll in CU, walking from nexus to jntu, running for drone in the night and many more. Those moments were the best. The name you from my side so called STOIC is due to 2-1 era. If I say you no need to change anything in yourself, everything is fine. May be gaali decrease little bit. And yeah we have 2 years more abd for sure we will grow and enjoy together. We have to reach our dreams, let's work hard together!. I am not getting anywords to express as my mind is little messy right not. And thank you being my friend. wait thanks for being my brother🫂. you are the best dude. stay active as you are.",
      }
    },
    {
      name: "khushi",
      image: "./messages cover/khushi.png",
      message: {
        p1: "Hiii.. Madhav",
        p2: "nextLine",
        p3: "So, Madhav isliye Because this was the name I used to call you.",
        p4: "nextLine",
        p5: "lets do it in this way... Agar hum hamari journey dheke to frm first year to till now... It has been quite long ride ig at first I wasn't able to fully think about It but later I realized we could be good friends... But haa when I think about it now, you gave me vry good memories jisko abhi agar sochi tho I smile when I remember all those moments which we had. Hope our friendship last long. You r dng great and be the same wishing that you get everything u deserve 🐼",
        p6: "nextLine",
        p7: "Sorry for everything which hurt you & Thankyou for everything u did till now",
      }
    },
    {
      name: "maithili",
      image: "./messages cover/guess who.png",
      message: {
        p1: "Hai👋🏻 Spidey🕸🐼 first file meda name ledu ga so try guessing 🧐me.",
        p2: "Sarle Baga time padutundi without lag telling koncham bore kottina vinu and first use translator while reading Telugu vadesa 😂avesam lo . Firstuuu",
        p3: "Wish u happiest birthday 🎉 (every day my birthday annav ga😉)",
        p4: "Wished nooo now  smile 😁 and continue reading..",
        p5: "By the way telling uhh aa ur  smile is gooduuu so poniku face nunchi em antav 🤨",
        p6: "And  koncham ammamma la anipinchachu😂 kani vinu 🥲",
        p7: "Aa water coffee thagadam apeyava 🙃 and lunch dinner ani options unnayi so appuduappudina thinu  time ki  ...",
        p8: "Esari experimentlu chese tappudu  hand jagrtha 😅..",
        p9: "Sare ippudu serious talks aaa🤫",
        p10: "I don't know u require it or not but telling no listenuuu🥲",
        p11: "U are toooooo good to handle so some people leave those who left are left anthe they missed being with u so lite 🫠",
        p12: "And mari antha samaja seva thgistae better emo 🙄 but nee istam it's instinct naahh kani don't get hurt 🤕 anthe ...",
        p13: "Mari ekkuva matladesa bore kotinda😅 I am sure u didn't understand half of it nahhh😶‍🌫",
        p14: "Lite le malli kalisinappudu nenu chadivi vinipista I mean explain chesta 😅 sare mari baayyyyi and finally u stopped smiling ahhh in between ayye untadi so inka one smile 😁 plzzz and unta ippatikae Baga lag chesa and inko mata na Peru inka teleleda ???",
        p15: "It's me rey ..... And one more thing uhh doing ur best in every thing rey keep it up ❣💪🏻",
      }
    },
    {
      name: "harshini",
      image: "./messages cover/harshini.jpg",
      message: {
        p1: "Belated happy birthday durgaaaa…this was written by Harshini on 6th november 2024",
        p2: "nextLine",
        p3: "I just wanted to take a moment to tell you how special you are. You’re someone who always knows how to bring a smile to our faces, and your kindness and support never go unnoticed.",
        p4: "You have this incredible way of making people feel seen and valued, no matter what. The way u asked me to come to Chandigarh so all of us would be together..and even during the fest.. I'll never forget these memories.  You’ve grown so much, and I can’t wait to see all the amazing things you’ll do in the future and I'll always be there behind you as your biggest well-wisher",
        p5: "ALL THE BEST DMP FOR YOUR AMAZING FUTURE",
        p6: "NEVER LET YOUR CHARM GO DOWN BUDDY!",
        p7: "With love",
        p8: "Harshini",
      }
    },
    {
      name: "jandu",
      image: "./messages cover/jandu.png",
      message: {
        p1: "Heyy dimple bhai...",
        p2: "Thanks for making my b.tech lyf a better one😅😅",
        p3: "U seriously are a diff kind fellow man, very talented nd a person wid whom tym just passes by nd u don't even realize it.",
        p4: "I still remember our first day of clg u were sitting beside me nd randomly u stood up nd started answering to the ex HOD thought u were a studious kinda person but it turned out to be completely opp to it🤣🤣",
        p5: "Thanksss alot man for helping me out when I had been all alone without getting along wid anyone u really are the best person I got in b.tech, tbh u are the connecting chain btwn all of us... u always make sure that all of us are present during any outing❤️",
        p6: "But I always made out an excuse nd didn't turn up most of the times yet u never took me lyt thanks for that.",
        p7: "Nd lastly the only thing I want u to change is sometimes u just get lost in thoughts nd stay too silent which doesn't suit u at all so I would really request u to not be like that..🫠",
      }
    },
    {
      name: "shreya",
      image: "./messages cover/anonymous.png",
      message: {
        p1: "Hey chomuuuuu",
        p2: "guess who 😏",
        p3: "you'll probably guess wrong anyway,",
        p4: "may you have the best year ahead✨",
        p5: "may you always stay the same dumbass we all know and love,",
        p6: "you're a great friend, sure we've drifted apart with time but I know that I can always count on you so, thankyou for that🥸",
        p7: "and yea,here's to all that you are and all that you'll become!!🍾",
        p8: "ps: tu tension mat le, koi na koi tho zaroor pat jayegi ✋🏻✨ Thatastu",
      }
    },
    {
      name: "pranav",
      image: "./messages cover/pranav.jpg",
      message: {
        p1: "Durga, you are one of the most kind people I have met in my life. You radiate that positive energy around you which makes people feel comfortable. Your positive vibes make others happy to be around you. I am really glad to be your friend. I am really grateful to you as you helped me in some important projects like field project. It really made me happy as i didn't find any other way to work on it.",
        p2: "One of the best quality in you is that u put others before yourself and think about them before yourself. This is really appreciated in this world as there are very few people have got that in them. I want you to be the same and always be happy no matter the circumstances.",
      }
    },
    {
      name: "shoib",
      image: "./messages cover/shoaib.JPG",
      message: {
        p1: "Hi",
        p2: "This is shoaib and this sandesh is for  pandu💦. Pandya is someone who is highly passion driven along with his work ethic, you can trust him fully. The thing I like about him is that he wants the same for his friends which he wants for himself. And also I'll remember all the memories we had and the things we yapped forever!",
        p3: "And also yeah",
        p4: "bro thinks he is spoidermon(Which is clearly me but issokay!)",
      }
    },
    {
      name: "kp",
      image: "./messages cover/praneeth.jpg",
      message: {
        p1: "Many more Happy Returns of the day Panda!!",
        p2: "nextLine",
        p3: "I still remember the day we met in college on the very 1st day where I was sitting in front of you and you were the very 1st person to introduce and we became friends from then on. I still remember that you where the who introduced that fellow Shivam to me which changed my life 😂.",
        p4: "nextLine",
        p5: "You are a very funny person who enjoys life in the present moment which I very much like about you and you are very honest to yourself all these things are which appreciate about you. Be the same you and don't change yourself for anyone becz we like you like this only.🤩😂",
        p6: "On top of all these you are one of the honest friends I ever had who does not hold back his opinions, you are very funny, and someone who always knows how to make everything better. Watching you grow and succeed has been such a privilege, and I know you will keep achieving incredible things ahead.",
        p7: "You have an unparalleled practical knowledge base and helped us whenever you could in hackathons and projects and have a helping nature to anyone who is in need without any thought.😎",
        p8: "The memories we made, the fun we had, the jokes we laughed on, the challenges we faced, you have made every moment unforgettable and I will always cherish them throughout my life and will never forget this friendship ❤️.",
        p9: "nextLine",
        p10: "I will always be there for you at anytime, anywhere I am always a call away and ready to help you at any situation.",
        p11: "Here's to many more years of friendship, laughter, and memories, countless memories we've made and to many more ahead. I wish you all the happiness and success this year.❤️❤️❤️",
        p12: "nextLine",
        p13: "Bro, we need to click more pics as I don't have any not just to upload but to keep it as a memory.❤️😂😂",
      }
    },
  ]

  const backgroundColours = [
    "#ffb5b5",
    "#fdffcd",
    "#53a8b6",
    "#118a7e",
    "#dc2f2f",
    "#007cb9",
    "#927fbf",
    "#cca8e9",
    "#c3195d",
    "#bad8b6",
  ]

  const randomTilt = () => {
    return (Math.floor(Math.random() * 30))
  }

  const [password, setPassword] = useState("")
  const [showSlam, setShowSlam] = useState(false)

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    sessionStorage.setItem("slamBook", true)
    setShowSlam(true)
    const song = new Audio("./assets/spiderman-2099-theme.mp3")
    song.play()
  }

  return (
    <div className='slamBook'>
      {!showSlam ? <Card style={{ width: '18rem', border: "none", background: "none" }}>
        <Card.Body className='InputCard'>
          <Form.Floating>
            <Form.Control
              className="inputField"
              onChange={e => handleChange(e)}
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              value={password}
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
          <Button onClick={handleSubmit} disabled={password == "123587" ? false : true} variant="secondary">Open</Button>
        </Card.Body>
      </Card> : ""}

      {slam && showSlam ? <div className="canvas">
        <div className="cardContainer">

          {messages.map((item, index) => {

            const pageStyles = {
              transform: `rotate(${index % 2 == 0 ? "-" : ""}${randomTilt()}deg)`,
              background: `${backgroundColours[Math.floor(Math.random() * backgroundColours.length)]}`,
            }

            return (
              <div key={index} className={`page`} style={pageStyles}>
                <img src={item.image} width={"100%"} height={"100%"} alt="" />
                {Object.values(item.message).map((para, idx) => {
                  return (
                    <p style={{ margin: "0px" }} key={idx}>
                      {para.includes("nextLine") ? <br /> : para}
                    </p>
                  )
                })}
              </div>
            )
          })}

        </div>
      </div> : ""}

    </div>
  )
}

export default SlamBook
