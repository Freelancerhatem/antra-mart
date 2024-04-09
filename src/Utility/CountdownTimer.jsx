
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {

        return 'complete'
    } else {

        return (
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max font-custom">
                <div className="flex flex-col p-2 bg-neutral  rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": hours }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": minutes }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": seconds }}></span>
                    </span>
                    sec
                </div>
            </div>
        )
    }
};

const CountdownTimer = () => {
    return (
        <Countdown
            date={Date.now() + 5000000}
            renderer={renderer}
        />
    );
};
export default CountdownTimer;
