import React from 'react'
import { Container, Image } from 'react-bootstrap'
import VideoPlayer from '../../components/video/VideoPlayer'
import Slider from '../../components/slider/Slider'

function Cover() {
  const images1= ['http://tktsa.com/Uploads/Media/0fd0c96a-830c-4f40-ad6b-087f243be954.jpg','http://tktsa.com/Uploads/Media/e6ccc500-35e1-4cca-a57b-858717312c32.jpg','http://tktsa.com/Uploads/Media/975947cd-bfa2-4b84-9d69-191c36595e6e.png','http://tktsa.com/Uploads/Media/6a877098-9015-44ee-bc99-2a28d2f9bb54.png']
  return (
    <Container fluid className='container-page pb-sm-4"'>
      <Container className='py-lg-4 home-title py-sm-5'>
        <h1 className='title text-dark'>مجسم المعرفة</h1>
        <p className='text-dark fs-4 py-4'>يجسد"مجسّم المعرفة" رسالة وآمال وتطلعات (مجموعة الأغر) منذ بداية مسيرتها في طريق قادها إلى بناء "استراتيجية المعرفة" وإيمانها بأن المستقبل يجب أن يؤسس لمجتمع قائم على اقتصاد المعرفة. والمجسّم مركّب من الأعلى إلى الأسفل، يحمل في أعلاه سبع حمامات للمعرفة بدوائرها التي تحمل شعار الأغر وهدفنا للوصول إلى تأسيس مجتمع معرفي بحلول عام ١٤٤٤هـ، ومن بينها تخرج يدان لفتى وفتاة تنفتحان باتجاه الأعلى للإمساك بالمستقبل. واليدان تخرجان من كرة أرضية محفور على قاراتها سبع آيات قرآنية كريمة، بدءاً بـ ( اقرأ ) و(علم الإنسان) و(فوق كل ذي عليم) ويحملها مربع هو قاعدتها. وأضيفت إلى المجسم أخيرا قاعدة منفصلة يرتكز عليها، تمثل نجمة خماسية عليها شعار (الأغر) وكلمة (السلام ) باللغة العربية وبثلاث عشرة لغة عالمية أخرى.
صُمّم "مجسم المعرفة" ليقام في الميدان الرئيس بمنطقة خزام التاريخية بجدة عندما تقدمت (مجموعة الأغر) بمقترح إعادة ترميم قصر الملك عبدالعزيز التاريخي وقصر الملك سعود- يرحمهما الله- وإقامة مبنى منظمة التعاون (التضامن) الإسلامي بجانب مبنى البنك الإسلامي، والمنطقة الحضارية الثقافية وجادة الحضارات المؤدية إلى جدة التاريخية. وقد أنجز المجسم من قطعة رخام واحدة بطول يقارب ثلاثة أمتار في قرية بيتراسانتا بإيطاليا، تحت إشراف مصممه الفنان السعودي ضياء عزيز ضياء. وأملنا أن يجد مكانه الدائم في مدينة المعرفة بالمدينة المنورة بإذن الله وتيسيره.</p>
        <Image  src='http://tktsa.com/Uploads/Media/c15db496-8767-4347-8d3a-730c476c2060.jpg' thumbnail fluid />
        <h2 className='title text-dark my-4'>مراحل تصنيع مجسم المعرفة</h2>
        <h4 className='title text-dark my-1 mx-3 text-decoration-none'>فديو مراحل تصنيع مجسم المعرفة 1</h4>
        <VideoPlayer src={'http://tktsa.com/Uploads/Media/fe8b8d74-2d86-423f-9254-285df2073a92.mp4'} />
        <h4 className='title text-dark my-1 mx-3 text-decoration-none'>فديو مراحل تصنيع مجسم المعرفة 2</h4>
        <VideoPlayer src={'http://tktsa.com/Uploads/Media/434d9d55-bb9d-400f-b83e-2a2757640d61.mp4'} />
        <h4 className='title text-dark my-1 mx-3 text-decoration-none'>فديو مراحل تصنيع مجسم المعرفة 3</h4>
        <VideoPlayer src={'http://tktsa.com/Uploads/Media/2de35b67-35f0-4f16-9c02-b3905781e15f.mp4'} />
        
        <h4 className='title text-dark  mx-3 text-decoration-none'>معرض صور</h4>
        <Slider images={images1} />

        <h1 className='title text-dark mt-5'>معرض "مساجد تشد اليها الرحال"</h1>
        <p className='text-dark fs-5 py-4'>الذي أقيم بمناسبة اختيار مكة المكرمة أول عاصمة للثقافة الإسلامية.و كان للزميل الفنان ضياء عزيز ضياء دور كبير فيه؛ إذ أن لوحاته الثلاث مكة المكرمة، والمدينة المنورة، والقدس الشريف رسمت قبل فكرة المعرض بسنوات، وبتوفيق الله وتقديره كانت هي الموحية والملهمة لإقامة المعرض.</p>
        <h4 className='title text-dark my-1 mx-3 text-decoration-none'>فيديو مساجد تشد إليها الرحال - ضياء عزيز ضياء</h4>
        <VideoPlayer src={'http://tktsa.com/Uploads/Media/73440a15-fc7c-4187-94a1-573e9110bd15.mp4'} />

        <h1 className='title text-dark mt-5'>ملك الحوار</h1>
        <p className='text-dark fs-5 py-4'>من الأعمال الفنية التي يرسم لها التاريخ قصة تُروى، وهي التي تنبع من قلب الفنان بإيمان وقناعة. وما كونته الألوان في لوحة الحوار ستبقى تاريخا في مسيرة فنانا المبدع ضياء عزيز ضياء.</p>
        <h4 className='title text-dark my-1 mx-3 text-decoration-none'>فيديو ملك الحوار للفنان ضياء عزيز ضياء</h4>
        <VideoPlayer src={'http://tktsa.com/Uploads/Media/0b6ba2d8-83d5-43f6-936b-48dfe4de30e6.mp4'} />
        <Image style={{height:'100vh',width:'100%'}} src='http://tktsa.com/Uploads/Media/350720b1-85eb-4737-9f22-1d216ac3a021.jpg' thumbnail fluid />


      </Container>
    </Container>
  )
}

export default Cover