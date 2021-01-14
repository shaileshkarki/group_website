import styled from 'styled-components';

export const Header = styled.div`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color}
`;

export const LargeCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.1fr 1fr 0.5fr;
    width: 100%;
    height: 100%;
    grid-gap: 1rem;
    border-radius: 20px;
    border-style:solid;
    border-width:5px;
    border-color: ${props => props.theme.color};
    min-width: 280px;
    color: ${props => props.theme.color};
`;
// display: inline-block;
export const SmallCardWrapper = styled.div`
    
text-align: center;
border-radius: 20px;
border-style:solid;
    border-width:2px;
    border-color: ${props => props.theme.color};
    color: ${props => props.theme.color};
    width: 20%;
    height: auto;
    margin-top: 15px;
    margin-left: 25px;
    margin-right: 25px;
    
    display: flex;
    align-items: center;
  min-width: 280px;
  min-height: 220px;
  flex-direction: column;
  height: 100%;
`;

export const AboutUsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 260px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border-style:solid;
    border-width:5px;
    border-color: ${props => props.theme.color};
    color: ${props => props.theme.color};
    margin: 20px 10%;
    width: 80%;
    `;