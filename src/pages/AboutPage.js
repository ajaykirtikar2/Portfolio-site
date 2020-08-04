import React from 'react';

import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props){

        return(
           <div>
               <Hero title={props.title}/>

               <Content>
                   <p>Hi, my name is Ajay Kirtikar.  I'm currently a rising senior pursuing a B.S in Computer Science at The Ohio State University specializing in Artificial Intelligence.</p>
                   <p>I love to create, and I dream to one day start my own business that will impact and help those around the world. Attached is my resume which lists my past experience with various companies ranging from backend to frontend work.</p>
                   <p>I am constantly learning new things and my recent project dove deep into Mschine Learning with Recurrance Neural Networks to create a text classifier for rap lyrics.</p>
                   <p>My preferred language is Python, however I have experience with Java, C, C#, Javascript, React, React Native, Objective C and more.</p>
                   <p>When I am not coding I enjoy playing tennis, playing the trumpet, traveling, and making music. </p>
               </Content>
           </div>
        );

}

export default AboutPage;