import styled from "styled-components";

export const Container = styled.main`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    border-radius: 20px;
    overflow: hidden;
    background: white;
`

export const BannerContainer = styled.div`
    display: flex;
`

export const BannerImg = styled.img`
    width: 100%;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    row-gap: 1rem;
    text-align: center;
`

export const Title = styled.h1`
    font-weight: 900;
    color: #1f2f56;
`

export const IntroductionText = styled.p`
    color: #7280a7;
    font-weight: 500;
    font-size: 1.1rem;
    letter-spacing: 1px;
`

export const SubscriptionContainer = styled.div`
    display: grid;
    grid-template-areas:
    "sIcon sTitle sChange"
    "sIcon sPrice sChange"
    ;
    margin: 1rem 0;
    background: #f5f7ff;
    padding: 1rem;
    border-radius: 10px;
    grid-template-columns: max-content;
    column-gap: 1rem;
`

export const SubscriptionIcon = styled.img`
    grid-area: sIcon;
`

export const SubscriptionTitle = styled.h2`
    grid-area: sTitle;
    justify-self: start;
    font-weight: 900;
    font-size: 1rem;
    color: #1f2f56;
`

export const SubscriptionPrice = styled.span`
    grid-area: sPrice;
    justify-self: start;
    color: #7280a7;
    font-weight: 900;
`

export const SubscriptionChange = styled.button`
    grid-area: sChange;
    padding: 0;
    width: max-content;
    height: max-content;
    justify-self: end;
    align-self: center;
    border: none;
    background: transparent;
    text-decoration: underline;
    color: #3829e0;
    font-weight: 900;
`

export const ButtonProceed = styled.button`
    padding: 1rem;
    font-weight: 900;
    letter-spacing: 1px;
    color: white;
    background: #3829e0;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 15px 15px #e0e8ff;
`

export const ButtonCancel = styled(ButtonProceed)`
    background: transparent;
    color: #7280a7;
    box-shadow: none;
`