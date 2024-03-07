import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './home.css'
import { Col, Image, Row } from 'react-bootstrap';
class Home extends Component {
    render() {
        return (
            <>
            <Container fluid className="container-page py-sm-4">
                <Container className='pg-dark py-lg-4 home-title py-sm-5'>
                    <h1 className='title text-dark'>هذا الكتاب</h1>
                    <p className='text-dark fs-4 py-4'>" المجتمع المعرفي"
تعبير بات شائعاً اليوم في العالم،لكونه استراتيجياً في مخططات معظم الحكومات والهيئات القيادية في العالم، كما هو الحال في المملكة حيث بدأ التفكير بشأنه قبل أكثر من عقد من الزمن،وتكلل ذلك باطلاق "استراتيجية المعرفة" على يد المغفور له بإذن الله خادم الحرمين الشريفين الملك عبدالله بن عبدالعزيز في عام 2013م. وها هو "التحوّل المعرفي " عنوان كتاب تضمن فصولاً من ذكريات الأمير فيصل بن عبدالله بن محمد آل سعود. فهذا الكتاب ليس سيرة ذاتية وفق المفهوم التقليدي للسير الذاتية،ولا هو تسجيل كامل لكل ماشهدتها المملكة،وتشهده اليوم، من جهود في سبيل التحول الى مجتمع معرفي بل هو وقفة رجل يتأمل فيما أنجزه،وما يسعى لإنجازه، بعدما تقلد مسؤوليات عديدة، كان ولايزال يرى أن رسالته فيها هي قبل كل شيء تطوير الكفاءات البشرية وتعزيز قدرات شباب الوطن، تلك هي الاستراتيجية التي كان سموه أحد روّاد التفكير فيها وصياغتها بالمعنى الدقيق للكلمة. وبدلاً من التوسع في التفاصيل التي في غاية الأهمية والتنوع، ومن باب الاستفادة مما باتت تتيحه التقنيات الحديثة، قرر سموه اختصار النص المكتوب حتى أقصى حدٍ ممكن، واعتماد تقنية "كيو. آر." ،لإحالة القارىء إلى مايكمّل النص المكتوب ويوضحه ويدعمه، في رحلة بين أفلام الفيديو والكتب والوثائق المختلفة. إنها تقنية جديدة في عالم النشر، وكونها غير شائعة حتى الآن يجب أن لايثنينا عن الإقدام عليها. أليس الانفتاح على التقنيات الحديثة والإقدام بجرأة على الاستفادة منها أحد أعمدة التحوّل المعرفي؟</p>
<Row>
                    <Col lg={4} sm={6} className='my-1' >
                        <Image src='https://web.archive.org/web/20220819024426im_/http://tktsa.com/Content/images/Chp1.jpg' fluid thumbnail/>
                    </Col>
                    <Col lg={4} sm={6} className='my-1' >
                        <Image src='https://web.archive.org/web/20220819024426im_/http://tktsa.com/Content/images/Chp2.jpg' fluid thumbnail/>
                    </Col>
                    <Col lg={4} sm={6} className='my-1' >
                        <Image src='https://web.archive.org/web/20220819024426im_/http://tktsa.com/Content/images/Chp3.jpg' fluid thumbnail/>
                    </Col>
                    <Row className='justify-content-center'>
                        <Col lg={4} sm={6} className='my-1 justify-content-center' >
                            <Image src='https://web.archive.org/web/20220819024426im_/http://tktsa.com/Content/images/Chp4.jpg' fluid thumbnail/>
                        </Col>
                        <Col lg={4} sm={6} className='my-1 justify-content-center' >
                            <Image src='https://web.archive.org/web/20220819024426im_/http://tktsa.com/Content/images/Chp5.jpg' fluid thumbnail/>
                        </Col>
                    </Row>
                    
                </Row>
                </Container>
                
            </Container>
            </>
        );
    }
}

export default Home;
