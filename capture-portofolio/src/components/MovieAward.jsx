import React from 'react';
import styled from 'styled-components';

export const MovieAward = ({ title, description }) => {
    return (
        <Award>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </Award>
    );
};

const Award = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0;
    }
    p{
        padding: 2rem 0;
    }
`;