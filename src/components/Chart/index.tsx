import { Container, SubtitleContainer } from './styles';
import { VictoryPie } from 'victory';

const subtitlesLabel = [
    {
        color: 'tomato',
        text: 'A pagar'
    },
    {
        color: 'orange',
        text: 'A receber'
    }
]

const Chart = () => {
    return (
        <Container>
            <VictoryPie
                data={[{ x: "A pagar", y: "20" }, { x: "A receber", y: "50" }]}
                innerRadius={100}
                colorScale={["tomato", "orange"]}
                padAngle={2}
                style={{ labels: { display: "none" }, parent: { width: 500 } }}
            />
            {subtitlesLabel.map((subtitle) => (
                <SubtitleContainer key={subtitle.color} color={subtitle.color}>
                    <div></div>
                    {subtitle.text}
                </SubtitleContainer>
            ))}
        </Container>
    );
}

export default Chart;
