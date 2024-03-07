import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from '../../components/slider/Slider'
import VideoPlayer from '../../components/video/VideoPlayer'

function Bassmala() {
  const images= ['http://tktsa.com/Uploads/Media/c2d40923-515d-413a-a3fd-a174455568ca.jpg','http://tktsa.com/Uploads/Media/bf544f23-e89a-4873-a97e-f1374684479f.jpg']
  const videoSrc = 'http://tktsa.com/Uploads/Media/4d5e6afe-8efc-4ff1-8000-f0aa5c85e0b1.mp4'
  return (
    <Container fluid className="container-page pb-sm-4" >
            <Container className='py-lg-4 home-title py-sm-5'>
                <h1 className='title text-dark'>البسملة</h1>
                <p className='text-dark fs-4 py-4'>البسملة كما أبدعها الخطاط العالمي أحمد مصطفى، على شكل تاج يحمل بين طياته (بسم الله الرحمن الرحيم عليه توكلنا وبه نستعين ).
"الخط الكوني" من أهم الأعمال التي تؤرخ وتبحث في عظمة الخط العربي، فما قام به الدكتور أحمد مصطفى يعدّ من أهم الدراسات على مرّ التاريخ. وقد كان لنا في "ليان الثقافية" مساهمة في هذا العمل العظيم، عسى أن يوفق المولى وتعم به الفائدة.
الدكتور أحمد مصطفي صديق ومحبّ، كانت مساهماته في أعمال كثيرة ذات أثر إيجابي على إثراء رسالتنا الثقافية والفنية. ومن الأعمال التي نعتز بها "لوحة الإسراء والمعراج" التي كانت عنوانا لمعرض (مساجد تشدّ إليها الرحال) الذي أقيم بمناسبة اختيار مكة المكرمة أول عاصمة للثقافة الإسلامية.</p>
              <Slider images={images} />
              <h3 className='title text-dark my-5 text-decoration-none'>فديو مساجد تشجد اليها الرحال -دكتور احمد مصطفى</h3>
              <VideoPlayer src={videoSrc}/>
            </Container>
        </Container>
  )
}

export default Bassmala
