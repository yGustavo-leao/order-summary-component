import { BannerContainer, BannerImg, ButtonCancel, ButtonProceed, Container, ContentContainer, IntroductionText, SubscriptionChange, SubscriptionContainer, SubscriptionIcon, SubscriptionPrice, SubscriptionTitle, Title } from "./OrderSumary.styles"

export const OrderSumary = () => {
    return (
        <Container>
            <BannerContainer>
                <BannerImg src={`${process.env.PUBLIC_URL}/assets/images/illustration-hero.svg`} alt="Banner image"/>
            </BannerContainer>

            <ContentContainer>
                <Title>Order Summary</Title>
                <IntroductionText>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</IntroductionText>

                <SubscriptionContainer>
                    <SubscriptionIcon src={`${process.env.PUBLIC_URL}/assets/images/icon-music.svg`} />
                    <SubscriptionTitle>Annual Plan</SubscriptionTitle>
                    <SubscriptionPrice>$59.99/year</SubscriptionPrice>
                    <SubscriptionChange>Change</SubscriptionChange>
                </SubscriptionContainer>

                <ButtonProceed>Proceed to Payment</ButtonProceed>
                <ButtonCancel>Cancel Order</ButtonCancel>
            </ContentContainer>
        </Container>
    )
}