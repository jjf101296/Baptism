import Image from "next/image"
import { Download, MapPin, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Confetti from "@/components/confetti"

export default function BaptismAnnouncement() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Confetti />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60 z-10"></div>
        <div className="absolute inset-0">
          <Image src="/images/baptism-image.png" alt="Baptism ceremony" fill className="object-cover" priority />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md font-playfair">
              Baptism of Joshua Matthew
            </h1>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-t-4 border-gold animate-bounce-in">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-slate-800">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gold" />
                  <span className="font-medium font-montserrat">
                    22<sup>nd</sup> September 2024
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="font-medium font-montserrat">Sri Ranga Hall, Ambattur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  <span className="font-medium font-montserrat">11:30 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verse Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 font-playfair">Bible Verse</h2>
          <div className="relative p-8 bg-gradient-to-r from-slate-50 to-sky-50 rounded-lg border border-gold/30 shadow-md transform transition-all hover:scale-105 duration-500">
            <div className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed tamil-text">
              உன் வழியைக் கர்த்தருக்கு ஒப்புவித்து, அவர்மேல் நம்பிக்கையாயிரு; அவரே காரியத்தை வாய்க்கப்பண்ணுவார்
            </div>
            <div className="mt-2 text-gold">- சங்கீதம் 37:5</div>
            <div className="mt-4 text-lg text-slate-600 font-montserrat">
              "Commit your way to the LORD; trust in him, and he will act."
            </div>
            <div className="text-gold font-montserrat">- Psalm 37:5</div>
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner animate-pulse">
              <div className="text-gold text-3xl">✝️</div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner animate-pulse delay-300">
              <div className="text-gold text-3xl">🕊️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Name Meaning Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-slate-50 to-sky-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center font-playfair animate-fade-in">
            The Meaning Behind the Name
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-gold shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-left">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4 font-montserrat">Joshua</h3>
                <p className="text-slate-700 mb-4 font-lato">
                  The name Joshua is of Hebrew origin, derived from the name Yehoshua (יְהוֹשֻׁעַ), meaning "God is
                  salvation" or "Yahweh is salvation". It is a strong biblical name, famously associated with Joshua,
                  the leader of the Israelites after Moses.
                </p>
                <p className="text-slate-700 tamil-text">
                  ஜோஸ்வா என்ற பெயர் எபிரேய மொழியில் தோன்றியது, இது யேஹோசுவா (יְהוֹשֻׁעַ) என்பதிலிருந்து பெறப்பட்டது, இதன் பொருள் "கடவுள்
                  ரட்சிப்பு" அல்லது "யாஹோவா ரட்சிப்பு" என்பதை குறிக்கிறது.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-gold shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-right">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4 font-montserrat">Matthew</h3>
                <p className="text-slate-700 mb-4 font-lato">
                  Matthew is also of Hebrew origin, derived from Matityahu (מַתִּתְיָהוּ), meaning "Gift of God" or "Gift from
                  Yahweh." It is another significant biblical name, most notably associated with one of the twelve
                  apostles of Jesus and the author of the Gospel of Matthew.
                </p>
                <p className="text-slate-700 tamil-text">
                  மேத்யூ என்ற பெயரும் எபிரேய மொழியில் தோன்றியது, இது மத்தித்யாஹு (מַתִּתְיָהוּ) என்பதிலிருந்து பெறப்பட்டது, இதன் பொருள்
                  "கடவுளின் பரிசு" அல்லது "யாஹோவாவின் பரிசு" என்பதாகும்.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border-t-4 border-gold transform transition-all hover:scale-105 duration-500 animate-fade-in">
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center font-montserrat">Combined Meaning</h3>
            <p className="text-slate-700 text-center text-lg font-lato">
              Together, Joshua Matthew can be interpreted as "God is salvation" and "Gift of God," which gives the
              combined meaning:
            </p>
            <p className="text-gold text-center text-xl font-medium mt-4 font-montserrat">
              "A gift of salvation from God"
            </p>
            <p className="text-gold text-center mt-4 tamil-text">"கடவுளிடமிருந்து வரும் ரட்சிப்பின் பரிசு"</p>
          </div>
        </div>
      </section>

      {/* Songs Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center font-playfair animate-fade-in">
          Songs for the Ceremony
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="song-1" className="bg-white rounded-lg mb-4 shadow-md animate-slide-up">
            <AccordionTrigger className="text-lg font-medium text-slate-800 px-4 py-2 hover:bg-slate-50 rounded-t-lg font-montserrat">
              Song 1 - நன்றியால் துதிபாடு
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 whitespace-pre-line p-4 tamil-text">
              {`நன்றியால் துதிபாடு நம் இயேசுவை 
உள்ளத்தால் என்றும் பாடு 
வல்லவர் நல்லவர் போதுமானவர் 
வார்த்தையில் உண்மையுள்ளவர் (2) 

1. எரிகோ மதிலும் முன்னே வந்தாலும் 
இயேசு உந்தன் முன்னே செல்கிறார் (2) 
கலங்கிடாதே திகைத்திடாதே 
துதியினால் இடிந்து விழும் (2) நன்றியால் 

2. செங்கடல் நம்மை சூழ்ந்து கொண்டாலும் 
சிலுவையின் நிழல் உண்டு (2) 
பாடிடுவோம் துதித்திடுவோம் 
பாதைகள் கிடைத்து விடும் (2) நன்றியால் 

3. கோலியாத் நம்மை எதிர்த்து வந்தாலும் 
கொஞ்சமும் பயம் வேண்டாம் (2) 
இயேசு என்னும் நாமம் உண்டு 
இன்றே ஜெயித்திடுவோம் (2) நன்றியால்`}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="song-2" className="bg-white rounded-lg mb-4 shadow-md animate-slide-up delay-100">
            <AccordionTrigger className="text-lg font-medium text-slate-800 px-4 py-2 hover:bg-slate-50 rounded-t-lg font-montserrat">
              Song 2 - தம் கிருபை பெரிதல்லோ
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 whitespace-pre-line p-4 tamil-text">
              {`தம் கிருபை பெரிதல்லோ
எம் ஜீவனிலும் அதே
இம்மட்டும் காத்ததுவே
இன்னும் தேவை, கிருபை தாருமே

1. தாழ்மை உள்ளவரிடம் தங்கிடுதே கிருபை
வாழ்நாள் எல்லாம் அது போதுமே  
சுகமுடன் தம் பெலமுடன்
சேவை செய்யக் கிருபை தாருமே – தம் கிருபை

2. நிர்மூலமாகாததும் நிற்பதுமோ கிருபை
நீசன் என் பாவம் நீங்கினதே
நித்திய ஜீவன் பெற்று கொண்டேன்
காத்துக் கொள்ள கிருபை தாருமே – தம் கிருபை

3. தினம் அதிகாலையில் தேடும் புதுக்கிருபை
மனம் தளர்ந்த நேரத்திலும்
பெலவீன சரீரத்திலும்
போதுமே உம் கிருபை தாருமே – தம் கிருபை`}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="song-3" className="bg-white rounded-lg mb-4 shadow-md animate-slide-up delay-200">
            <AccordionTrigger className="text-lg font-medium text-slate-800 px-4 py-2 hover:bg-slate-50 rounded-t-lg font-montserrat">
              Song 3 - மகா அதிசயங்களை
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 whitespace-pre-line p-4 tamil-text">
              {`1. மகா அதிசயங்களை
செய்தென்னைப் பூரிப்பித்து
உபத்திரவத்தின் பாரத்தை
இரக்கமாய்க் கழித்து
ரட்சிக்கிற தயாபரர்
இஸ்தோத்திக்கப்பட்டவர்
கர்த்தாவுக்குப் புகழ்ச்சி

2. கர்த்தாதி கர்த்தா, தேவரீர்
யாவற்றையும் நன்றாக
சிஷ்டித்துத் திட்டம் பண்ணினீர்
என்றும்மைப் பணிவாக
விண் மண் கடல் ஆகாசத்து
சேனைத் திரள்கள் போற்றுது
கர்த்தாவுக்குப் புகழ்ச்சி

3. ஆக கேளும் என்தன் துன்பத்தில்
கர்த்தாவைக் கெஞ்சி வந்தேன்
அப்போது ஏற்ற வேளையில்
மகா ரட்சிப்பைக் கண்டேன்
இதற்கென் நாவே, கீதம் சொல்
என்னோடெல்லாரும் பாருங்கள்
கர்த்தாவுக்குப் புகழ்ச்சி`}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="song-4" className="bg-white rounded-lg mb-4 shadow-md animate-slide-up delay-300">
            <AccordionTrigger className="text-lg font-medium text-slate-800 px-4 py-2 hover:bg-slate-50 rounded-t-lg font-montserrat">
              Song 4 - ஆ, என்னில் நூறு வாயும் நாவும்
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 whitespace-pre-line p-4 tamil-text">
              {`1. ஆ, என்னில் நூறு வாயும் நாவும்
இருந்தால், கர்த்தர் எனக்கு
அன்பாச் செய்த நன்மை யாவும்,
அவைகளால் பிரசங்கித்து,
துதிகளோடே சொல்லுவேன்,
ஓயாதொனியாய்ப் பாடுவேன்.

2. என் சத்தம் வானமளவாக
போய் எட்டவேண்டும் என்கிறேன்;
கர்த்தாவைப் போற்ற வாஞ்சையாக
என் ரத்தம் பொங்க ஆசிப்பேன்;
ஒவ்வொரு மூச்சும் நாடியும்
துதியும் பாட்டுமாகவும்.`}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Purpose of Naming Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-slate-50 to-sky-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center font-playfair animate-fade-in">
            பெயர் வைத்ததின் நோக்கம்
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gold animate-bounce-in">
            <h3 className="text-xl font-bold text-slate-800 mb-4 tamil-text">Joshua (ஜோஸ்வா)</h3>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 tamil-text">
              <li>மோசேவுக்குப் பிறகு இஸ்ரயேலர்களை கானான் தேசத்திற்கு வழிநடத்த கர்த்தரால் தேர்ந்தெடுக்கப்பட்டவன் ஜோஸ்வா</li>
              <li>பாலும் தேனும் ஓடுகின்ற கானான் தேசத்துக்குள் யோர்தானைக் கடந்து இஸ்ரயேலர்களை வழிநடத்தி வந்தவன் ஜோஸ்வா</li>
              <li>
                இவைகள் அனைத்தும் நம் சிறுவயதிலிருந்து கேட்டு தெரிந்தவைகள் இந்த பெயர் ஒரு தாக்கத்தை எங்கள் மனதில் ஏற்படுத்தியது எங்கள்
                குழந்தையும் ஒரு வெற்றி வீரனாக சிறந்த தலைவனாக வர வேண்டும் என்று நினைத்து எங்கள் குழந்தைக்கு அந்த பெயரை வைத்தோம்.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4 tamil-text">Matthew (மேத்யூ)</h3>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 tamil-text">
              <li>
                சங்கீதம் 127: 4 படி "இதோ பிள்ளைகள் கர்த்தரால் வரும் சுதந்திரம் கர்ப்பத்தின் கனி அவரால் கிடைக்கும் பலன்" என்ற வேத வசனத்தின் படி
                எங்கள் குழந்தை எங்களுக்கு கிடைத்த ஒரு வரம், கர்த்தர் கொடுத்த பரிசு. அதை நாங்கள் வாழ்நாள் முழுவதும் நினைவு கூறும் படி இருக்க
                வேண்டும் என்று எங்கள் பிள்ளைக்கு அந்த பெயரை வைத்தோம்.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 font-playfair animate-fade-in">
          Thank You
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gold/30 animate-bounce-in">
          <p className="text-lg text-slate-700 mb-6 tamil-text">
            நீங்கள் எங்களுக்காகவும் எங்கள் பிள்ளைக்காகவும் உங்கள் தனிப்பட்ட ஜெபத்தில் ஜெபித்துக் கொள்ளுமாறு உங்களை கேட்டுக்கொள்கிறோம்.
          </p>
          <p className="text-xl font-medium text-slate-800 mb-8 font-montserrat">THANKS FOR YOUR PARTICIPATION</p>
          <p className="text-slate-700 font-lato">
            BY
            <br />
            JOHN, MERLIN & JOSHUA MATTHEW
            <br />
            AND FAMILY MEMBERS
          </p>

          <div className="mt-12">
            <Button className="bg-gradient-to-r from-gold to-amber-600 hover:from-amber-600 hover:to-gold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
              <Download className="mr-2 h-4 w-4" />
              Download Invitation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
