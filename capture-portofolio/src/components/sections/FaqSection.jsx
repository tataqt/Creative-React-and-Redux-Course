import React from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from '../../useHooks/useScroll';
import { scrollReveal } from '../../animation';
import { About } from '../../styles';
import ToggleFAQ from '../Toggle';

const FaqSection = () => {
    const [element, controls] = useScroll();

    return (
        <FAQ variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
            <h2>Any questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <ToggleFAQ title='How do i start?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </ToggleFAQ>
                <ToggleFAQ title='Daily schedule'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officiis?</p>
                    </div>
                </ToggleFAQ>
                <ToggleFAQ title='Differnt payment methods'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officiis?</p>
                    </div>
                </ToggleFAQ>
                <ToggleFAQ title='What products do you offer?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officiis?</p>
                    </div>
                </ToggleFAQ>
            </AnimateSharedLayout>
        </FAQ>
    );
};

const FAQ = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccc;
        height:0.2rem;
        margin: 2rem 0rem;
        width:100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;