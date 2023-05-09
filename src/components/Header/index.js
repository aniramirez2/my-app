import React from 'react';
import styled from 'styled-components';

export const Header = ({text, image, enlace, orient, color, padding }) => {

    const Container = styled.div`
        text-align: ${orient};
        color: ${color};
        padding: ${padding};
        display: flex;
        align-items: center;
    `;

    return (
    <>
        <Container>
            {image ? <figure><img src={image} alt="logo"></img></figure>: null}
            <p>{text}</p> {enlace ? <a href={enlace}></a> : null }
        </Container>
    </>
    )

}