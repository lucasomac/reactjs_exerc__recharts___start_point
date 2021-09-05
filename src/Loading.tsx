import { GlobalStyle, SForm, SpinningLoader } from "./StyledComponents";

function Loaging() {
    return <>
        <GlobalStyle />
        <SForm >
            <SpinningLoader size="180" />
        </SForm>
    </>;
}

export default Loaging;