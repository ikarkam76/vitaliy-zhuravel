import { ProgressContainer, ProgressLine } from "./ProgressBar.styled";


export const ProgressBar = ({percentage}) => {
    return (
        <ProgressContainer>
            <ProgressLine style={{width: `${percentage}%`}}></ProgressLine>
      </ProgressContainer>
    );
}