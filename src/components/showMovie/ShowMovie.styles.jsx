import styled from "styled-components";

export const Container = styled.div`
  padding: 0 14vw;
  background-image: ${props =>
    `linear-gradient(to bottom, ${props.color1}, ${props.color2})`};
`;

export const HeroContainer = styled.div`
  height: 50vh;
  position: relative;

  z-index: 1;

  transform: skewY(2.5deg) translateY(-30px);

  color: var(--text-white);
  display: flex;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;

    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    background: url(https://image.tmdb.org/t/p/w1280//${props => (props.poster ? props.poster : null)});
    background-size: 100% 100%;
    background-repeat: cover;
    background-attachment: inherit;
  }
`;

export const TopContainer = styled.div`
  transform: skewY(-2.5deg);
`;

export const MovieCard = styled.div`
  background: ${props => props.color};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export const TagLineContainer = styled.div`
  margin-top: -3rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 700;
  font-style: italic;
`;

export const BottomContainer = styled.div`
  height: 46.4%;
  display: flex;
  flex-wrap: wrap;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  align-self: flex-start;
  padding: 4rem 0;
`;

export const PlotContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 2rem;
  align-self: flex-start;
  color: ${props => props.color};
  font-size: var(--paragraph);
`;

// const VibrantC = styled.div`
//   height: 5rem;
//   width: 5rem;
//   background: ${props.item.colors
//     ? props.colors.vibrant
//     : "var(primary-color)"};
// `;
// const DarkVibrant = styled.div`
//   height: 5rem;
//   width: 5rem;
//   background: ${props.item ? props.colors.vibrantDark : "var(primary-color)"};
// `;
// const LightVibrant = styled.div`
//   height: 5rem;
//   width: 5rem;
//   background: ${props.item
//     ? props.colors.vibrantLight
//     : "var(primary-color-light)"};
// `;
// const Muted = styled.div`
//   height: 5rem;
//   width: 5rem;
//   background: ${props.item ? props.colors.muted : "var(secondary-color)"};
// `;
// const DarkMuted = styled.div`
//   height: 5rem;
//   width: 5rem;
//   background: ${props.item ? props.colors.mutedDark : "var(secondary-color"};
// `;
// const LightMuted = styled.div`
//   height: 5rem;
//   width: 5rem;
//   background: ${props.item
//     ? props.colors.mutedLight
//     : "var(secondary-color-light)"};
// `;

{
  /* <div style={{ display: "flex" }}>
            <DarkVibrant></DarkVibrant>
            <VibrantC></VibrantC>
            <LightVibrant></LightVibrant>
          </div>
          <div style={{ display: "flex" }}>
            <DarkMuted></DarkMuted>
            <Muted></Muted>
            <LightMuted></LightMuted>
          </div> */
}
