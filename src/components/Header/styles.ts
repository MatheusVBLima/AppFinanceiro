import styled from 'styled-components';

export const Container = styled.header`
    background: var(--purple);
`
export const Content = styled.div`
    max-width: 70rem;
    margin: 0 auto;

    padding: 2rem 1rem 8.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
    button {
        font-size: 1rem;
        color: #fff;
        background: var(--purple-light);
        border: 0;
        padding: 0 2rem;
        border-radius: .25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`